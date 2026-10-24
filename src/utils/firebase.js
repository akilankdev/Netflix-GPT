// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkwbbkO0wPsQUEi33JztdEjE3uk7hM9g",
  authDomain: "streamgpt-2fe11.firebaseapp.com",
  projectId: "streamgpt-2fe11",
  storageBucket: "streamgpt-2fe11.firebasestorage.app",
  messagingSenderId: "985638229107",
  appId: "1:985638229107:web:23287686bffe8f58b3c606",
  measurementId: "G-B389FHLK01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
//This utility is used for various things like signin,signup,reset password,etc...So its better to put this in a central place and import it wherever we want to use it.
export const auth = getAuth();