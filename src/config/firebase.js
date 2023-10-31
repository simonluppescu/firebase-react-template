// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
// TODO: ONCE A FIREBASE PROJECT IS SET UP, AND firebaseConfig IS FILLED OUT,
// UNCOMMENT THE BELOW LINES
// export const firebaseApp = initializeApp(firebaseConfig);

// // FIRESTORE
// // export const firestore = getFirestore(firebaseApp);
// export const firestore = getFirestore();
// connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
// // AUTHENTICATION
// // export const auth = getAuth(firebaseApp);
// export const auth = getAuth();
// connectAuthEmulator(auth, "http://127.0.0.1:9099");
// // FUNCTIONS
// // export const functions = getFunctions(firebaseApp);
// export const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
