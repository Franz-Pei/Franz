<template>
    <div class="list-container">
        <h1>Book with ISBN > 1000</h1>
        <ul>
            <li class="list-item" v-for="book in books" :key="book.id">
                <!-- Bind input to book.name -->
                <input type="text" v-model="book.name" placeholder="Enter book name"> 
                <!-- Bind input to book.isbn (Editable ISBN) -->
                <input type="number" v-model.number="book.isbn" placeholder="Enter ISBN"> 
                <!-- Save and Delete buttons -->
                <button @click="updateBook(book.id, book.name, book.isbn)">Save</button>
                <button @click="deleteBook(book.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs, orderBy, limit, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';

export default {
    setup() {
        const books = ref([]);

        // Fetch books with ISBN > 1000, ordered by ISBN, limited to 5 results
        const fetchBooks = async () => {
            const q = query(
                collection(db, 'books'), 
                where('isbn', '>', 1000),   // Filter by ISBN > 1000
                orderBy('isbn', 'desc'),    // Order by ISBN in descending order
                limit(5)                    // Limit the results to 5
            );
            const querySnapshot = await getDocs(q);
            books.value = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    name: data.name || 'Unnamed',  // Default to 'Unnamed' if name is missing
                    isbn: data.isbn || 0,          // Fetch the 'isbn' field, default to 0 if missing
                };
            });
            console.log("Books loaded:", books.value);
        };

        // Update book's name and ISBN in Firestore
        const updateBook = async (bookId, newName, newIsbn) => {
            const bookRef = doc(db, 'books', bookId);
            try {
                const docSnap = await getDoc(bookRef);
                if (docSnap.exists()) {
                    const currentData = docSnap.data();
                    // Update both name and ISBN
                    await updateDoc(bookRef, {
                        name: newName || currentData.name,  // Update name
                        isbn: newIsbn ? Number(newIsbn) : currentData.isbn // Update ISBN
                    });
                    console.log("Document updated with ID:", bookId);
                    await fetchBooks();  // Refresh the list after update
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        };

        // Delete book from Firestore
        const deleteBook = async (bookId) => {
            const bookRef = doc(db, 'books', bookId);
            try {
                await deleteDoc(bookRef);
                console.log("Document deleted with ID:", bookId);
                await fetchBooks();  // Refresh the list after deletion
            } catch (error) {
                console.error("Error removing document: ", error);
            }
        };

        // Fetch books when the component is mounted
        onMounted(fetchBooks);

        return {
            books,
            updateBook,
            deleteBook
        };
    }
};
</script>

<style>
.list-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 100%; /* Ensure it uses all available width */
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

input[type="text"], input[type="number"] {
    flex: 1 1 auto; /* Automatically adjust width but don't shrink below content size */
    margin-right: 10px;
    min-width: 150px; /* Minimum width to prevent content squeeze */
}

button {
    white-space: nowrap; /* Prevent button text wrapping */
    margin-left: 5px;
    flex: 0 0 auto; /* Don't flex with the container */
}
</style>