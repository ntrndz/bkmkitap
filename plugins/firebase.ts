// Import Firebase ve Firestore SDK
import { defineNuxtPlugin } from "#app";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Firebase Authentication modülü

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDNjdi4MgeB4ggTWKkbGKmRd2RfKKIlwDU",
  authDomain: "bkmkitap-webproject.firebaseapp.com",
  projectId: "bkmkitap-webproject",
  storageBucket: "bkmkitap-webproject.firebasestorage.app",
  messagingSenderId: "213349187587",
  appId: "1:213349187587:web:636f075bac44be173e0e36",
  measurementId: "G-2HRKQSE7V7",
};

// Firebase'i başlat
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const db = getFirestore(app);

// Authentication instance
const auth = getAuth(app);

console.log("Firestore initialized:", db);
console.log("Firebase Authentication initialized:", auth);


export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseDb: db,
      firebaseAuth: auth, // Authentication'ı sağlayın
    },
  };
});