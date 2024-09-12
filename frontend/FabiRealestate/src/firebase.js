// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fabiestate-2de79.firebaseapp.com",
  projectId: "fabiestate-2de79",
  storageBucket: "fabiestate-2de79.appspot.com",
  messagingSenderId: "62830077956",
  appId: "1:62830077956:web:31dff15a44d9d020f86d51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);