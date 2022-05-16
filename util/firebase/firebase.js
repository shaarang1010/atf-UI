// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIjNc1JVgmUGtqHubkxW7N1gznDU0Rbvs",
  authDomain: "atf-therapy.firebaseapp.com",
  projectId: "atf-therapy",
  storageBucket: "atf-therapy.appspot.com",
  messagingSenderId: "84942944294",
  appId: "1:84942944294:web:0ea87d2c1c55cc2702cee7",
  measurementId: "G-ZN5EN4V0E3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
