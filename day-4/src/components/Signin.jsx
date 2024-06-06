import React from 'react'
import "../styles/Signin.css"
import google from "../assets/google.png"
import taskimg from "../assets/taskimg.png"
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='signcontent'>
        <div className='signdiv'>
            <h1>Sign-In</h1>
            <img src={taskimg} width='400px' alt="" />
            <Link to="/home">
            <button>
                <img src= {google} alt="" className='google' />
                Continue with Google
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Signin