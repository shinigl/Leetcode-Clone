import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Designed by <span className={styles.name}>Aniket Kumar</span></p>
        <a 
          href="https://www.linkedin.com/in/aniket-kumar-shin/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.linkedinLink}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
    
        </a>
      </div>
    </footer>
  );
}

export default Footer;
