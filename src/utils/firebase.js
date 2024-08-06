// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjnVnl8oIeMILOSddShH77FAIkzbvUdqg",
  authDomain: "netflix-f0377.firebaseapp.com",
  projectId: "netflix-f0377",
  storageBucket: "netflix-f0377.appspot.com",
  messagingSenderId: "1013500128051",
  appId: "1:1013500128051:web:db435c1e41c6632327ac46",
  measurementId: "G-4HLBRPND7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
