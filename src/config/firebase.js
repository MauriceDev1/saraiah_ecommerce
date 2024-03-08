// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA85tOagdiaBpLdjY2kjoqUiy9D2FN0WI",
  authDomain: "sariah-39f84.firebaseapp.com",
  projectId: "sariah-39f84",
  storageBucket: "sariah-39f84.appspot.com",
  messagingSenderId: "857818955355",
  appId: "1:857818955355:web:e41a83420ec3de561c097e",
  measurementId: "G-82JGYK0D2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);