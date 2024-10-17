<template>
  <div class="tw-container tw-mx-auto tw-p-6">
    <div class="tw-flex">
      <!-- Sidebar for API selection -->
      <div class="tw-w-1/4 tw-bg-gray-100 tw-p-4 tw-border-r">
        <h3 class="tw-text-lg tw-font-semibold tw-mb-4">APIs</h3>
        <ul class="tw-space-y-2">
          <li
            class="tw-cursor-pointer tw-p-2 tw-rounded hover:tw-bg-gray-200"
            :class="{ 'tw-bg-gray-300 tw-font-bold': selectedApi === 'sendEmail' }"
            @click="selectApi('sendEmail')"
          >
            Send Email API
          </li>
          <li
            class="tw-cursor-pointer tw-p-2 tw-rounded hover:tw-bg-gray-200"
            :class="{ 'tw-bg-gray-300 tw-font-bold': selectedApi === 'getUserInfo' }"
            @click="selectApi('getUserInfo')"
          >
            Get User Info API
          </li>
        </ul>
      </div>

      <!-- API details section -->
      <div class="tw-w-3/4 tw-p-6">
        <section v-if="selectedApi === 'sendEmail'">
          <h2 class="tw-text-xl tw-font-semibold tw-mb-4">Send Email API</h2>
          <div class="api-info">
            <p><strong>Endpoint:</strong> <code class="tw-text-pink-600">{{ sendEmailApiUrl }}</code></p>
            <p><strong>Method:</strong> <code class="tw-text-blue-600">POST</code></p>
            <p><strong>Description:</strong> Sends an email to a recipient with optional attachments.</p>

            <h3 class="tw-font-semibold tw-mt-4">JSON Example Without Attachment</h3>
            <pre>
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email from Postman."
}
            </pre>

            <h3 class="tw-font-semibold tw-mt-4">JSON Example With Attachment</h3>
            <pre>
{
  "to": "recipient@example.com",
  "subject": "Test Email with Attachment",
  "text": "This is a test email with a PDF attachment.",
  "attachmentInfo": {
    "self": "JVBERi0xLjcKJb/... (long base64 content)",
    "mimeType": "application/pdf",
    "filename": "test.pdf"
  }
}
            </pre>

            <!-- Show email sending status -->
            <div v-if="emailStatus" class="mt-4">
              <h4>Status:</h4>
              <p>{{ emailStatus }}</p>
            </div>

            <!-- Display email logs from Firestore -->
            <div v-if="emailLogs.length > 0" class="mt-4">
              <h4>Email Logs:</h4>
              <ul>
                <li v-for="log in emailLogs" :key="log.id">
                  <strong>To:</strong> {{ log.to }} - <strong>Subject:</strong> {{ log.subject }} - <strong>Status:</strong> {{ log.status }}
                  <br />
                  <strong>Timestamp:</strong> {{ log.timestamp.toDate().toLocaleString() }}
                  <br />
                  <strong>Email Content:</strong> {{ log.emailContent }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section v-if="selectedApi === 'getUserInfo'">
          <h2 class="tw-text-xl tw-font-semibold tw-mb-4">Get User Info API</h2>
          <div class="api-info">
            <p><strong>Endpoint:</strong> <code class="tw-text-pink-600">{{ getUserInfoApiUrl }}</code></p>
            <p><strong>Method:</strong> <code class="tw-text-blue-600">GET</code></p>
            <p><strong>Description:</strong> Retrieves user information from the system.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      sendEmailApiUrl: 'https://us-central1-fit5032assignment-acbb4.cloudfunctions.net/sendEmailWithAttachmentAPI',
      getUserInfoApiUrl: 'https://us-central1-fit5032assignment-acbb4.cloudfunctions.net/getUserInfoAPI',
      selectedApi: 'sendEmail', // Default to sendEmail API
      emailStatus: '', // Status of the email API call
      emailLogs: [] // Store Firestore email logs
    };
  },
  methods: {
    // Function to switch the selected API
    selectApi(api) {
      this.selectedApi = api;
    },

    // Function to load email logs from Firestore
    async loadEmailLogs() {
      const db = getFirestore();
      const emailLogsCollection = collection(db, 'emailLogs');
      const snapshot = await getDocs(emailLogsCollection);
      this.emailLogs = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
    }
  },
  mounted() {
    this.loadEmailLogs(); // Load the email logs when the component is mounted
  }
};
</script>

<style scoped>
/* You can use additional custom styles or Tailwind classes directly in the template */
</style>
