// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pY9-eAVw1sUQWVzhXt8IwSXHJ82JFgA",
  authDomain: "assignment-project-5cda4.firebaseapp.com",
  projectId: "assignment-project-5cda4",
  storageBucket: "assignment-project-5cda4.appspot.com",
  messagingSenderId: "2075643835",
  appId: "1:2075643835:web:cd10edf12d0548f53d3e9e",
  measurementId: "G-FV6H4F6H6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth}