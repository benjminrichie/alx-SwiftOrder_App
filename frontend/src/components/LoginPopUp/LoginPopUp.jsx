import React, { useState } from 'react'
import './LoginPopUp.css'
// import { StoreContext } from '../../context/StoreContext'
// import axios from "axios"
import { assets } from '../../assets/assets'

import '@fortawesome/fontawesome-free/css/all.min.css';



const LoginPopUp = ({setShowLogin}) => {
  // const { url, setToken } = useContext(StoreContext);
  const [currState, setcurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [notification, setNotification] = useState({ message: '', type: '' });

  // const onLogin = async (event) => {
  //   event.preventDefault();
  //   let newUrl = url;
  //   if (currState === "Login") {
  //     newUrl += "/api/user/login";
  //   } else {
  //     newUrl += "/api/user/register";
  //   }

  //   try {
  //     const response = await axios.post(newUrl, data);

  //     if (response.data.success) {
  //       setToken(response.data.token);
  //       localStorage.setItem('token', response.data.token);
  //       showNotification('Login successful!', 'success');
  //       setTimeout(() => {
  //         setShowLogin(false);
  //       }, 2000);
  //     } else {
  //       showNotification('Incorrect password or email. Please try again.', 'error');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred during login:', error);
  //     showNotification('An error occurred. Please try again later.', 'error');
  //   }
  // };


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };



  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  

  return (
    <div className='login-PopUp'>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form  className="loginPopUpContainer">
        <div className="loginPopUpTitle">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginPopUpInput">
          {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <div className="password-input-container">
          <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              required
            />
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          </span>
          </div>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
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