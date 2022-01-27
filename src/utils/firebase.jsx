import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6GIdudDSW0ukYrnnZKdkXU3b9vteESvc",
  authDomain: "survey-typeform.firebaseapp.com",
  projectId: "survey-typeform",
  storageBucket: "survey-typeform.appspot.com",
  messagingSenderId: "480403954572",
  appId: "1:480403954572:web:40f2674e4f75047ab614a9",
  measurementId: "G-DNGZNDHG1H",
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;
