// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnnNYLLj5YM2qwXDU3Zi3JEcM9mWIE8lQ",
  authDomain: "fastfurious-11494.firebaseapp.com",
  databaseURL: "https://fastfurious-11494-default-rtdb.firebaseio.com",
  projectId: "fastfurious-11494",
  storageBucket: "gs://fastfurious-11494.appspot.com",
  messagingSenderId: "997293579572",
  appId: "1:997293579572:web:d3bf566ebb2a426e061961",
  measurementId: "G-JD7KVH28KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export default {
    db,
    storage
};