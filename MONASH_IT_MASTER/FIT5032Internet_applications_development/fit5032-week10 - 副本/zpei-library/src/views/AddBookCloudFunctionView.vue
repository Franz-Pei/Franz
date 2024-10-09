<template>
    <div id="app">
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <label for="title">Book Title:</label>
        <input id="title" v-model="newBook.title" placeholder="Enter book title" required />
  
        <label for="author">Author:</label>
        <input id="author" v-model="newBook.author" placeholder="Enter author's name" required />
  
        <button type="submit">Add Book</button>
      </form>
  
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="bookDetails">Added Book - ID: {{ bookDetails.id }}, Title: {{ bookDetails.title }}, Author: {{ bookDetails.author }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newBook: {
          title: '',
          author: ''
        },
        bookDetails: null,
        successMessage: null,
        error: null,
      };
    },
    methods: {
        async addBook() {
            try {
                const response = await axios.post('https://addbook-kkfr2aoqna-uc.a.run.app', {
                    title: this.newBook.title.toUpperCase(), // Capitalize the title
                    author: this.newBook.author.toUpperCase() // Capitalize the author
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                this.successMessage = 'Book added successfully: ' + response.data.message;
                this.bookDetails = { 
                    id: response.data.id,
                    title: response.data.title,
                    author: response.data.author
                };
                this.newBook = { title: '', author: '' }; // Reset form
                this.error = null;
            } catch (error) {
                console.error('Error adding book:', error);
                this.error = 'Failed to add book';
                this.successMessage = null;
            }
        }
    },
}
</script>
  