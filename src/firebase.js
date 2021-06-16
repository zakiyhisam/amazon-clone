import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDusiOZ4APl3a-eNC1llBeyGcyYMUkeZ9k",
    authDomain: "react--clone-405b8.firebaseapp.com",
    projectId: "react--clone-405b8",
    storageBucket: "react--clone-405b8.appspot.com",
    messagingSenderId: "948526497303",
    appId: "1:948526497303:web:0c48eafa6795444d336652",
    measurementId: "G-8D5ZH8TBGZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
