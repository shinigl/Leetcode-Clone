import React from 'react';
import styles from '../styles/Login.module.css'; // Assuming your CSS is in this file
import GoogleLogo from '../assets/GoogleLogo.png'; // Assuming the Google logo is available

const Login = () => {
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
          <p>Don't have an account?</p>
          <button className={styles.signupButton}>
            <span style={{display:'flex',alignItems:'center'}} ><img className={styles.googleLogo} src={GoogleLogo} alt="Google Logo" /></span>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
