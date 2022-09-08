// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyAF0Ot16ozgIZN0nMHtV0d7Kg-UaW8qjn4",
    authDomain: "clone-1a706.firebaseapp.com",
    projectId: "clone-1a706",
    storageBucket: "clone-1a706.appspot.com",
    messagingSenderId: "801581204346",
    appId: "1:801581204346:web:8bcccdfd1f2730b4bfccc3",
    measurementId: "G-3HWRNV004B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };