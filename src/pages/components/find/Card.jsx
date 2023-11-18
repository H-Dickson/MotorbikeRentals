import React from 'react';
import styles from './Find.module.css';

const Card = ({ bike }) => {
  return (
    <div className={styles.card}>
      <a href={"/bikes/" + bike.id}>
        {/* Assuming that the first image in the array is the primary one */}
        <img src={"./images/"+bike.image[0]}/>
      {/* Add more fields as needed */}
      </a>
    </div>
  );
};

export default Card;