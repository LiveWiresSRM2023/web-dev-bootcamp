# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Day 5 Summary - Web Development Bootcamp by Livewires

## Today's Focus:
- **Integrating firebase to our application**
  - **Configured Firebase into our Project**
  - **Enabled Google Authentication**


### Firebase:
- **Installation:**
  - Installed `firebase` using npm or yarn.
    ```bash
    npm install firebase
    # or
    yarn add firebase
    ```

- **Firebase Configuration:**
  - Created firebase.jsx file.
  - Exported db , provider and auth.
  - Use Your Api Key for your project .
    ```jsx

    import { initializeApp } from "firebase/app";
    import { GoogleAuthProvider, getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    
    
    const firebaseConfig = {

    // Paste your API key here
    
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth() // for authentication
    const provider = new GoogleAuthProvider() //for provider
    const db = getFirestore(app)    
    export {auth , provider, db }


    ```

- **Sign In page:**
  - Used SignInWithPopUp for Authentication using GoogleAuthProvider
  - Removed '<Link>' tag and used useNavigate() to navigate.
    ```jsx
    import React, { useState } from 'react'
    import "../styles/Signin.css"
    import google from "../assets/google.png"
    import taskimg from "../assets/taskimg.png"
    import {useNavigate } from 'react-router-dom'
    import { signInWithPopup } from 'firebase/auth'
    import { auth, provider } from './firebase'

      function Signin() {
    
      const [redirect,setRedirect] =useState(false)
      const navigate = useNavigate()

    const handleClick = () => {
      signInWithPopup(auth , provider).then(()=>{
        setRedirect(true)
      })
    }
    return (
    <div className='signcontent'>
        <div className='signdiv'>
            <h1>Sign-In</h1>
            <img src={taskimg} width='400px' alt="" />
            <button onClick={handleClick} >
                <img src= {google} alt="" className='google' />
                Continue with Google
            </button>
        </div>
        {redirect?navigate("/home"):console.log("error")}
    </div>
    )
    }
    export default Signin
    ```
-**Content page:**
  - **Displaying Profile Picture and Display name.**
  - Used 'onAuthStateChanged()' in useEffect() hook to manage the rendering process and displaying the photoURL and displayName from the user.
    ```jsx
        const navigate = useNavigate()

        const [name , setName] = useState()
        const [dp , setDp] = useState()
      
        useEffect(()=> {
      
          const displayData = auth.onAuthStateChanged(user => {
      
            if (user) {
              setName(user.displayName )
              setDp(user.photoURL)
            }
            else{
              navigate("/")
            }
      
          } )
      
          return () => displayData()
      
      
        },[navigate] )
    ```
    - Used  'dp' and 'name' to display here in the left content.
   
    ```jsx
        {/* leftcontent */}
          <div className='leftcontent'>
              <img src={dp} alt="" className='profpic' />
              <h1>Hi, {name}</h1>
              <img src={taskimg} alt="" className='taskimg'/>
  
          </div>
    ```

