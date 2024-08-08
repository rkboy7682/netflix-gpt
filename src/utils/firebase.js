// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkIDO16N38TGnejVbXnBLJho-lBj56RVY",
  authDomain: "netflix-gpt-afa52.firebaseapp.com",
  projectId: "netflix-gpt-afa52",
  storageBucket: "netflix-gpt-afa52.appspot.com",
  messagingSenderId: "263039256021",
  appId: "1:263039256021:web:e7882dfa64956a1a3f695c",
  measurementId: "G-3YZ4M7YFH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
