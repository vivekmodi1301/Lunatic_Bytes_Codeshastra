// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getDownloadURL,getStorage, ref, uploadBytes} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAPXT5yOKdV9OZbiX6kWVq1sXbbqswBOUM",
  authDomain: "expense-tracker-61c69.firebaseapp.com",
  projectId: "expense-tracker-61c69",
  storageBucket: "expense-tracker-61c69.appspot.com",
  messagingSenderId: "810696160093",
  appId: "1:810696160093:web:607f225e5140e07efeeeb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage();