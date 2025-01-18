// CommentCard.js
import React from 'react';
import styles from '../styles/CommentCard.module.css';

function CommentCard(props) {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentCardHeader}>
        <img 
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" 
          alt="avatar"
        />
        <p>{props.data.date}</p>
      </div>

      <div className={styles.commentCardContent}>
        <p>{props.data.comment}</p>
      </div>

      <div className={styles.commentCardFooter}>
        <span className={styles.author}>{props.data.name}</span>
      </div>
    </div>
  );
}

export default CommentCard;
