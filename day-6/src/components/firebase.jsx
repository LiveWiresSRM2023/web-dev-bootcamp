import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCzbdRVy96odZkE5wCZepq0ucfupCGlkrI",
    authDomain: "to-do-list-52188.firebaseapp.com",
    projectId: "to-do-list-52188",
    storageBucket: "to-do-list-52188.appspot.com",
    messagingSenderId: "861526431345",
    appId: "1:861526431345:web:20f1a81346a5a321c36dd0"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }

