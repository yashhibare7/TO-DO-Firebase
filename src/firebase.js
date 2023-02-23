// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwCZIZO83jfaqKOgVx-NLoa-nAl-hIbik",
  authDomain: "to-do-firebase-b785b.firebaseapp.com",
  projectId: "to-do-firebase-b785b",
  storageBucket: "to-do-firebase-b785b.appspot.com",
  messagingSenderId: "580577035183",
  appId: "1:580577035183:web:6d14d4cfa0c85691ce655a",
  measurementId: "G-W5G2YF61BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)