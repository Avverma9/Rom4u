
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBMFI7qgXvfJRskz5oT8YL6l1rW2R0NUS8",
  authDomain: "login-purpose-395019.firebaseapp.com",
  projectId: "login-purpose-395019",
  storageBucket: "login-purpose-395019.appspot.com",
  messagingSenderId: "1053848829385",
  appId: "1:1053848829385:web:43a3ea5625ec2258203c18",
  measurementId: "G-B31V3ZSHE9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
