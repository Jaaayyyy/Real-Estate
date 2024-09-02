// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reaestate-d91f6.firebaseapp.com",
  projectId: "reaestate-d91f6",
  storageBucket: "reaestate-d91f6.appspot.com",
  messagingSenderId: "657280179731",
  appId: "1:657280179731:web:a4153f61ccb67a42c769e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);