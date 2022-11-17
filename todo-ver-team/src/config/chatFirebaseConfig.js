// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrDJc-1jSxUh6YEpkknJkdMf5cpyQfaLs",
  authDomain: "todogroup-71a92.firebaseapp.com",
  databaseURL: "https://todogroup-71a92-default-rtdb.firebaseio.com",
  projectId: "todogroup-71a92",
  storageBucket: "todogroup-71a92.appspot.com",
  messagingSenderId: "77365565939",
  appId: "1:77365565939:web:f5af68e4c42c62cd83da86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;