import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8scaz4Nncj3LvPIa60hgkiil31uxYVUk",
  authDomain: "frontend-clone-2c701.firebaseapp.com",
  projectId: "frontend-clone-2c701",
  storageBucket: "frontend-clone-2c701.appspot.com",
  messagingSenderId: "494233356746",
  appId: "1:494233356746:web:386441936b1f4420eaa733"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
