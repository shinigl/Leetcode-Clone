// CommentCard.js
import React from 'react';
import styles from '../styles/CommentCard.module.css';

function CommentCard(props) {

  // console.log(props.data.data());
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentCardHeader}>
        <img 
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" 
          alt="avatar"
        />
        <p>{props.data.data().name}</p>
      </div>

      <div className={styles.commentCardContent}>
        <p>{props.data.data().comment}</p>
      </div>

      <div className={styles.commentCardFooter}>
        <span className={styles.author}>{props.data.data().date}</span>
      </div>
    </div>
  );
}

export default CommentCard;
