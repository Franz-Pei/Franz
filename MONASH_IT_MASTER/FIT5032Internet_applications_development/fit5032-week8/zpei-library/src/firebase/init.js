// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase client configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Zhl0wK5s6SZtdH7IaSlNdlKwzaq_0tQ",
  authDomain: "week7-ziqipei.firebaseapp.com",
  projectId: "week7-ziqipei",
  storageBucket: "week7-ziqipei.appspot.com",
  messagingSenderId: "477632597998",
  appId: "1:477632597998:web:6d5684d3d95ff74dd648ff",
};

// Initialize Firebase for client-side use
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
