// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCRrgSQnWYFG-4kGG4e-sbevAAzSTWM8yA",
  authDomain: "netflixgpt-c1a81.firebaseapp.com",
  projectId: "netflixgpt-c1a81",
  storageBucket: "netflixgpt-c1a81.appspot.com",
  messagingSenderId: "613075427716",
  appId: "1:613075427716:web:ade6fec0b7ab321a4d7dd1",
  measurementId: "G-NG87P4VKLT",
  databaseURL: "https://netflixgpt-c1a81-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
