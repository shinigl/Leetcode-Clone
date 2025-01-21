


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi34auMYlKT-iG_2frzvPHQVE2gezQV1w",
  authDomain: "leetcode-cb9df.firebaseapp.com",
  projectId: "leetcode-cb9df",
  storageBucket: "leetcode-cb9df.firebasestorage.app",
  messagingSenderId: "220765056813",
  appId: "1:220765056813:web:1731b9543ae585caa66da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export default app;

//Database
export const db = getFirestore(app);