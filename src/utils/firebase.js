// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRrgSQnWYFG-4kGG4e-sbevAAzSTWM8yA",
  authDomain: "netflixgpt-c1a81.firebaseapp.com",
  projectId: "netflixgpt-c1a81",
  storageBucket: "netflixgpt-c1a81.appspot.com",
  messagingSenderId: "613075427716",
  appId: "1:613075427716:web:ade6fec0b7ab321a4d7dd1",
  measurementId: "G-NG87P4VKLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
