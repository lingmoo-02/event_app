// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCz0-cos985Z3G58CfVVB-NMMRpnWVrKIc",
  authDomain: "event-app-5294c.firebaseapp.com",
  projectId: "event-app-5294c",
  storageBucket: "event-app-5294c.firebasestorage.app",
  messagingSenderId: "252617638001",
  appId: "1:252617638001:web:b0ea773aea718fb044dbd0",
  measurementId: "G-DHRG5VQGCL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
