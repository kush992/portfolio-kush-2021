import firebase from 'firebase';
import 'firebase/storage'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJkuFwvJSZy4VV75AsoMq27LKn8_lJKJw",
    authDomain: "kush-web.firebaseapp.com",
    projectId: "kush-web",
    storageBucket: "kush-web.appspot.com",
    messagingSenderId: "140632826826",
    appId: "1:140632826826:web:e1fa06b0426b4c7e0f6533",
    measurementId: "G-MJ2L5VMTHZ"
  };
  // Initialize Firebase
 export const fireStorage = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
export {auth , provider};  
export default db;