// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9ieNal5yteerILaUJInUBE85xcFpU5M",
  authDomain: "login-auth-c13d9.firebaseapp.com",
  projectId: "login-auth-c13d9",
  storageBucket: "login-auth-c13d9.appspot.com",
  messagingSenderId: "1084614705390",
  appId: "1:1084614705390:web:62da8a46fe894f6fc7b3ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
