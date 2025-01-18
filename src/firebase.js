// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcEhByrMLHs18bxuG30D43PBW8ET7oYWA",
  authDomain: "authentication-project-5a3e2.firebaseapp.com",
  projectId: "authentication-project-5a3e2",
  storageBucket: "authentication-project-5a3e2.firebasestorage.app",
  messagingSenderId: "812944915361",
  appId: "1:812944915361:web:c11efab3415017498de9e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Write the code to initialize specific service (authorization for now)

export const auth = getAuth(app); //Authentication enabled

export const googleAuthProvider = new GoogleAuthProvider();