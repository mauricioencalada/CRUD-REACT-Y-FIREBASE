import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvIdNyun8tSU0c2V1blq86PV7FuwohZKs",
    authDomain: "fb-crud-7871d.firebaseapp.com",
    projectId: "fb-crud-7871d",
    storageBucket: "fb-crud-7871d.appspot.com",
    messagingSenderId: "4119173162",
    appId: "1:4119173162:web:5f778f0b312efab195cb53"
  };
  // Initialize Firebase
  const fb =firebase.initializeApp(firebaseConfig);


export  const db = fb.firestore();
   