import firebase from 'firebase'
import firestore from 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCjScZU1ewsOA-1V_7zSuUobxPuUopa6OM",
    authDomain: "ninja-chat-9d462.firebaseapp.com",
    databaseURL: "https://ninja-chat-9d462.firebaseio.com",
    projectId: "ninja-chat-9d462",
    storageBucket: "ninja-chat-9d462.appspot.com",
    messagingSenderId: "319832478803",
    appId: "1:319832478803:web:7477f6f494cdb9238262a6",
    measurementId: "G-J9DC5Q23EF"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebaseApp.firestore()
