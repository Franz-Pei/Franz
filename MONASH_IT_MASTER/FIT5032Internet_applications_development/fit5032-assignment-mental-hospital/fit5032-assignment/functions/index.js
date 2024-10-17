const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });
const { getStorage } = require("firebase-admin/storage");

admin.initializeApp();
const db = admin.firestore(); // Firestore database reference

const SENDGRID_API_KEY = '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';
const SENDGRID_VERIFIED_EMAIL_ADDRESS = 'pzqfranz@gmail.com';

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail(to, subject, text, attachmentInfo) {
  try {
    const msg = {
      to: to, 
      from: SENDGRID_VERIFIED_EMAIL_ADDRESS, 
      subject: subject,
      text: text
    };

    if (attachmentInfo) {
      const { self, mimeType, filename } = attachmentInfo;

      // Check if the attachment content is valid
      if (!self || !mimeType || !filename) {
        throw new Error('Invalid attachment info');
      }

      if (mimeType !== 'application/pdf') {
        return { success: false, error: 'Only PDF files are allowed.' };
      }

      msg.attachments = [
        {
          content: self, // Base64-encoded content
          filename: filename,
          type: mimeType, 
          disposition: 'attachment',
        }
      ];
    }

    await sgMail.send(msg);

    // Log email details to Firestore after successful send
    await db.collection('emailLogs').add({
      to,
      subject,
      status: 'Success',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      emailContent: text
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);

    // Log email failure to Firestore
    await db.collection('emailLogs').add({
      to,
      subject,
      status: 'Failed',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      errorMessage: error.message
    });

    return { success: false, error: error.message };
  }
}

exports.sendEmailWithAttachment = functions.https.onCall(async (data) => {
  const { to, subject, text, attachmentInfo } = data;
  return await sendEmail(to, subject, text, attachmentInfo);
});

exports.sendEmailWithAttachmentAPI = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { to, subject, text, attachmentInfo } = req.body;

    const result = await sendEmail(to, subject, text, attachmentInfo);

    if (result.success) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      return res.status(500).json({ success: false, error: result.error });
    }
  });
});

exports.getUserInfoAPI = functions.https.onRequest(async (req, res) => {
  try {
    // Reference to the file in Firebase Storage
    const bucket = getStorage().bucket();
    const file = bucket.file('users.json');

    // Get the file's content
    const [contents] = await file.download();
    const usersData = JSON.parse(contents.toString());

    // Return the user data as a response
    res.status(200).json({
      success: true,
      data: usersData,
    });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user info',
      error: error.toString(),
    });
  }
});