// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2LyQXowQMTV8IXRE0rY6wWCieYVWpNKo",
    authDomain: "tiktok-clone-e9e3b.firebaseapp.com",
    databaseURL: "https://tiktok-clone-e9e3b.firebaseio.com",
    projectId: "tiktok-clone-e9e3b",
    storageBucket: "tiktok-clone-e9e3b.appspot.com",
    messagingSenderId: "893449861258",
    appId: "1:893449861258:web:f8ac0ae3759d7a1e6d9573",
    measurementId: "G-L41XB7MSF2"
  };

  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;