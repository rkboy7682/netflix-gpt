// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADeYQ0ocU5_2Ziun7F1n02LFNIKXJ2QwU",
  authDomain: "netflixgpt-38b52.firebaseapp.com",
  projectId: "netflixgpt-38b52",
  storageBucket: "netflixgpt-38b52.appspot.com",
  messagingSenderId: "869111488555",
  appId: "1:869111488555:web:9d9a788ebd67ab32870a6e",
  measurementId: "G-92LHR9HVXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
