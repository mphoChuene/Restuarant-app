// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBph5vh01VSSxPLmcKW_xHfIMORuVaB3EU",
  authDomain: "rnauthentication-b9e98.firebaseapp.com",
  projectId: "rnauthentication-b9e98",
  storageBucket: "rnauthentication-b9e98.appspot.com",
  messagingSenderId: "165100286813",
  appId: "1:165100286813:web:38db63793059cbafe72eb4",
  measurementId: "G-T1X8SS1Y83"
};

const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app); // Use getAuth to access authentication
const db = getFirestore(app)

export { app, auth,db };