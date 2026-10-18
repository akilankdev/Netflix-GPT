// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlfpQAVgM3jMz45--8ODk7Vd9bgkUn9Y8",
  authDomain: "netflixgpt-7cdef.firebaseapp.com",
  projectId: "netflixgpt-7cdef",
  storageBucket: "netflixgpt-7cdef.firebasestorage.app",
  messagingSenderId: "667921214503",
  appId: "1:667921214503:web:c95a172cf6e1f8cf49b202",
  measurementId: "G-DJ6Y6CB78B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);