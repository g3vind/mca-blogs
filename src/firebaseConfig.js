import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB6rnyZ9tcfvRilEOoKU8GDi_gV0sHJ_K8",
    authDomain: "mca-blogs.firebaseapp.com",
    projectId: "mca-blogs",
    storageBucket: "mca-blogs.appspot.com",
    messagingSenderId: "823316724531",
    appId: "1:823316724531:web:2317f31fba777fe39bdc46",
    measurementId: "G-XPN3D1WYKW",
};

const app = initializeApp(firebaseConfig);

// CONNECTIONS
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
