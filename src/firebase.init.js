// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQcHFZbeWTgHa8Nw3CGXOzKoa77NytDCw",
  authDomain: "hotel-management-2e170.firebaseapp.com",
  projectId: "hotel-management-2e170",
  storageBucket: "hotel-management-2e170.appspot.com",
  messagingSenderId: "721378992925",
  appId: "1:721378992925:web:3bfb7e3d9a81abcc4237f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;