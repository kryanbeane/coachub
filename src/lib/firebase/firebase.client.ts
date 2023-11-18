// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app"
import {getAuth, setPersistence, inMemoryPersistence} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
    console.info('Initialising firebase')
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    // Deleting app and reinitializing it as the old one may not have the keys
    console.info('Deleting firebase app and reinitialising')
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const auth = getAuth(firebaseApp)