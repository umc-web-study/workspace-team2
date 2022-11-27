import firebase from "firebase/app";
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCC-SaV1YUGMRNXpW6sKdeSOXNqxBmvVGY",
  authDomain: "reacttest-one.firebaseapp.com",
  projectId: "reacttest-one",
  storageBucket: "reacttest-one.appspot.com",
  messagingSenderId: "161646711479",
  appId: "1:161646711479:web:ad6cca804b087e6545b332",
  measurementId: "G-XPXRZ76VQV"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore()


export { firestore };
