// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH2ugi2sAQFovGEyzFIa22jwoY37ngriU",
    authDomain: "fit5032assignment-acbb4.firebaseapp.com",
    projectId: "fit5032assignment-acbb4",
    storageBucket: "fit5032assignment-acbb4.appspot.com",
    messagingSenderId: "819446135250",
    appId: "1:819446135250:web:18da9da920f9d3e94ff00b",
    measurementId: "G-5V1E7HCZDE"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const vertexAI = getVertexAI(app);
export const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });