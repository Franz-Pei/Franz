/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

// Function to add a new book to Firestore
exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(403).send("Forbidden! Only POST method is allowed.");
    }

    const {title, author} = req.body;

    if (!title || !author) {
      return res.status(400).send({error: "Missing title or author"});
    }

    try {
      const bookRef = admin.firestore().collection("books").doc();
      await bookRef.set({
        title: title.toUpperCase(),
        author: author.toUpperCase(),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.status(201).send({
        id: bookRef.id,
        title: title.toUpperCase(),
        author: author.toUpperCase(),
        message: "Book added successfully",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      res.status(500).send({error: "Failed to add book"});
    }
  });
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
