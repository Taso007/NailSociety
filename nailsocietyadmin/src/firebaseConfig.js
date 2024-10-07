// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5BtE3sL6mVnRQn4rVxYktDLOevZ94oEg",
  authDomain: "nailsociety-d0f92.firebaseapp.com",
  projectId: "nailsociety-d0f92",
  storageBucket: "nailsociety-d0f92.appspot.com",
  messagingSenderId: "974640467410",
  appId: "1:974640467410:web:10892a75c04997e68a8c0b",
  measurementId: "G-1623QKMLWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, signInWithEmailAndPassword };