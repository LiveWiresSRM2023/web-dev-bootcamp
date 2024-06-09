import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }

