// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYENhC_bIvoSqbXwvTjEO09urpXCJJVpc",
  authDomain: "dragon-news-efb1e.firebaseapp.com",
  projectId: "dragon-news-efb1e",
  storageBucket: "dragon-news-efb1e.firebasestorage.app",
  messagingSenderId: "145667780045",
  appId: "1:145667780045:web:42fa4ad9f1a1a2d64c2884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;