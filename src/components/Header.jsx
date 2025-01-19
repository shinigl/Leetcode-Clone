import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../assets/logo.png';
import {Link, useParams , useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { useContext,useState,useEffect} from 'react';
import { myContext } from '../main';


function Header() {
    const ctx = useContext(myContext);
    const {id} = useParams();
    const [page, setPage] = useState(null);
    const navigate = useNavigate();

    const[isLoggedIn , setLogin] = useState(false);
    
    const userName = localStorage.getItem('name')
    useEffect(()=>{
    if(userName){
      setLogin(true); 
    }
  },[])



  useEffect(() => {
    // Ensure page is set after URL parameter (`id`) is available
    if (id) {
      const numberId = parseInt(id);
      setPage(numberId); // Set the page state when the id is available
    }
  }, [id]); // Re-run this effect whenever `id` changes 

 
  function onNextPage(){
     
     if(page < ctx.length){
     const nextPage = parseInt(page)+1 ;
     setPage(nextPage);
     navigate(`/interface/${nextPage}`)
     }


  }
  function onPrevPage(){
     if(page != 1){
     const PrePage = parseInt(page)-1 ;
      setPage(PrePage);

      navigate(`/interface/${PrePage}`)
     }
  }

  function onLogoClick(){
       navigate('/discussion')
  }

   function onSignInClick(){
    
      navigate('/login')
   }

   function onLogoutBtn(){
     setLogin(false);
     localStorage.removeItem('name');
   }

  return (
    <header className={styles.header}>
    {/* Left Section */}
    <div className={styles.headerLeft}>
      <img onClick={onLogoClick} className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.problemList}>
        <Link to='/'> Problem List </Link>
        <button className={styles.arrow} onClick={onPrevPage}>
          <FontAwesomeIcon icon={faArrowLeft}  />
        </button>
        <button className={styles.arrow} onClick={onNextPage}>
          <FontAwesomeIcon icon={faArrowRight}  />
        </button>
      </div>
    </div>

    {/* Middle Section */}
    <div className={styles.headerMiddle}>
      <button>Submit</button>
      <button>Run</button>
    </div>

    {/* Right Section */}
    {!isLoggedIn ? (<button onClick={onSignInClick} className={styles.signInButton}>Sign In</button>) : (
          <>
          <p>{userName}</p>
          <button className={styles.logout} onClick={onLogoutBtn}>Logout</button>
          </>)
          }
   
  </header>
  )
}

export default Header