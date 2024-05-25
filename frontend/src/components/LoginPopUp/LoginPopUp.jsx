import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

  const [currState, setcurrState] = useState("Login")


  return (
    <div className='login-PopUp'>
      <form  className="loginPopUpContainer">
        <div className="loginPopUpTitle">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginPopUpInput">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Enter password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="loginPopUpCondition">
          <input type="checkbox" required />
          <p>By continuing, you agree to Terms of Use and Privacy Policy</p>
        </div>
        {currState==="Login"
        ?<p>Don't have an account? <span className='mySpan' onClick={()=>setcurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span className='mySpan' onClick={()=>setcurrState("Login")}>Login</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp