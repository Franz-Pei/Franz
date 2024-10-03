<template>
    <div>
      <h1>All Books in JSON Format</h1>
      <pre>{{ jsondata }}</pre>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
  import db from '@/firebase/init.js'; // Import the Firestore instance from your init.js file
  
  export default {
    data() {
      return {
        jsondata: null, // To store the books data
        error: null,    // To store any error messages
      };
    },
    mounted() {
      this.getBookData(); // Call the method when the component is mounted
    },
    methods: {
      async getBookData() {
        try {
          // Fetch all documents from the "books" collection
          const querySnapshot = await getDocs(collection(db, "books"));
          const books = [];
  
          // Loop through all documents in the "books" collection
          querySnapshot.forEach((doc) => {
            books.push({
              id: doc.id,           // The document ID (Firebase auto-generated ID)
              ...doc.data(),        // The rest of the fields (title, author, etc.)
            });
          });
  
          // Assign the fetched data to jsondata
          this.jsondata = books;
        } catch (error) {
          console.error("Error fetching books data:", error);
          this.error = "Failed to load book data";
        }
      },
    },
  };
  </script>
  