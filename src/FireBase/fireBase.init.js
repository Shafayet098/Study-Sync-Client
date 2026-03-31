// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTN4BNpN_YdmN0Tw9cFLgHpDOkncLxyBs",
  authDomain: "study-sync-project-2d35a.firebaseapp.com",
  projectId: "study-sync-project-2d35a",
  storageBucket: "study-sync-project-2d35a.firebasestorage.app",
  messagingSenderId: "109991111116",
  appId: "1:109991111116:web:57d137834b89c9d134d569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);