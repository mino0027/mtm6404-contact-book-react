// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLrdTwtGJr1FmQZ5czR8ncjo61CFwaCQc",
  authDomain: "contactbook-fa188.firebaseapp.com",
  projectId: "contactbook-fa188",
  storageBucket: "contactbook-fa188.firebasestorage.app",
  messagingSenderId: "1067066576432",
  appId: "1:1067066576432:web:987996beabda6501bf67f5",
  measurementId: "G-RE3WTMQGR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;