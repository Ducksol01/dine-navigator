import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcIxXB5R6JR9ZNuZoQxH9s9AdiTQhHWvA",
  authDomain: "kooko-9c524.firebaseapp.com",
  projectId: "kooko-9c524",
  storageBucket: "kooko-9c524.firebasestorage.app",
  messagingSenderId: "772909888799",
  appId: "1:772909888799:web:c574f7b5878843b9346c2a",
  measurementId: "G-97N50MK8GT",
  // Add Realtime Database URL
  databaseURL: "https://kooko-9c524-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);