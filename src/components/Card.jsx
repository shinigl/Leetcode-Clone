import React from 'react';
import { useContext } from 'react';
import { myContext } from '../main';
import styles from './Card.module.css';

function Card(props) {
  const ctx = useContext(myContext);

  return (
    <div className={styles.card}>
      <div className={styles.sr}>
        <p>{props.data.Sr}</p>
      </div>
      <div className={styles.title}>
        <p>{props.data.Title}</p>
      </div>
      <div className={styles.difficulty}>
        <p>{props.data.Difficulty}</p>
      </div>
    </div>
  );
}

export default Card;
