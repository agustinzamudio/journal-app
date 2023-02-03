// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM4uVMjhV1rpWVwz90M7g0eUX8peXeMhY",
  authDomain: "journal-app-a3db4.firebaseapp.com",
  projectId: "journal-app-a3db4",
  storageBucket: "journal-app-a3db4.appspot.com",
  messagingSenderId: "123076563138",
  appId: "1:123076563138:web:e87ef3e6c37fddc5c76b5b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);