import React from 'react';
import styles from '../styles/Login.module.css'; 
import GoogleLogo from '../assets/GoogleLogo.png'; 
import { signInWithPopup  } from "firebase/auth";
import { googleAuthProvider } from '../firebase';
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  async function signUpWithGoogle(){
    try{
        let res = await signInWithPopup(auth,googleAuthProvider);
        localStorage.setItem('name',res.user.displayName);
        navigate('/');
      
    }
        catch(err){
            console.log(err);
        }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login to Your Account</h2>

        {/* Email & Password Form */}
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Login</button>
        </form>

        {/* Link to Sign Up */}
        <div className={styles.signupLink}>
          <p>Don't have an account?<span> Sign Up</span></p>
          <button onClick={signUpWithGoogle} className={styles.signupButton}>
            <span style={{display:'flex',alignItems:'center'}} ><img className={styles.googleLogo} src={GoogleLogo} alt="Google Logo" /></span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
