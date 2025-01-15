import React from 'react';
import { useContext } from 'react';
import { myContext } from '../main';
import styles from './Card.module.css';

function Card(props) {
  
  const ctx = useContext(myContext);
  
  const{Difficulty, Sr , Title} = props.data 

  let difficultyClass = '';
  if (Difficulty === 'Easy') {
    difficultyClass = styles.easy;
  } else if (Difficulty === 'Medium') {
    difficultyClass = styles.medium;
  } else if (Difficulty === 'Hard') {
    difficultyClass = styles.hard;
  }



  return (
  <div className={styles.card}>
      <div className={styles.sr}>
        <p>{props.data.Sr}</p>
      </div>
      <div className={styles.title}>
        <p>{props.data.Title}</p>
      </div>
      <div className={`${styles.difficulty} ${difficultyClass}`}>
        <p>{props.data.Difficulty}</p>
      </div>
    </div>
  );
}

export default Card;
