import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { myContext } from '../main';
import { toast, ToastContainer } from 'react-toastify';
function Header() {
  const ctx = useContext(myContext);
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const navigate = useNavigate();

  const [isLoggedIn, setLogin] = useState(false);
  const userName = localStorage.getItem('name');

  useEffect(() => {
    if (userName) {
      setLogin(true);
    }
  }, []);

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id);
      setPage(numberId);
    }
  }, [id]);

  function onNextPage() {
    if (page < ctx.length) {
      const nextPage = parseInt(page) + 1;
      setPage(nextPage);
      navigate(`/interface/${nextPage}`);
    }
  }

  function onPrevPage() {
    if (page !== 1) {
      const prevPage = parseInt(page) - 1;
      setPage(prevPage);
      navigate(`/interface/${prevPage}`);
    }
  }

  function onLogoClick() {
    navigate('/discussion');
  }

  function onSignInClick() {
    navigate('/login');
  }

  function onLogoutBtn() {
    toast.info('Logging Out',{
      autoClose:2000
    })
    setTimeout(()=>{
    setLogin(false);
    localStorage.removeItem('name');
    navigate('/');
    },2000)
  }

  return (
    <>
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.headerLeft}>
        <img onClick={onLogoClick} className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.problemList}>
          <Link to='/'>Problem List</Link>
          <button className={styles.arrow} onClick={onPrevPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className={styles.arrow} onClick={onNextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className={styles.headerMiddle}>
        <button>Submit</button>
        <button>Run</button>
      </div>

      {/* Right Section */}
      <div className={styles.headerRight}>
        {!isLoggedIn ? (
          <button onClick={onSignInClick} className={styles.signInButton}>
            Sign In
          </button>
        ) : (
          <div className={styles.logoutContainer}>
            <p className={styles.welcomeText}>Hey! <span className={styles.userName}>{userName}</span></p>
            <button className={styles.logout} onClick={onLogoutBtn}>Logout</button>
          </div>
        )}
      </div>
    </header>
      <ToastContainer/>
     </>
  );
}

export default Header;
