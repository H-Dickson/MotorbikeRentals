// Find.jsx

import React, { useState, useEffect } from 'react';
import styles from './Find.module.css';
import Card from './Card';


const Find = () => {
  const bikes = require('../../../json/bikes.json');
  const [numberOfCards, setNumberOfCards] = useState(getInitialNumberOfCards());

  function getInitialNumberOfCards() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1025) {
      return 2;
    } else {
      return 3;
    }
  }


  useEffect(() => {
    function handleResize() {
      setNumberOfCards(getInitialNumberOfCards());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.find}>
    {/* <img className={styles.background} src="./images/background.png" /> */}
      <div className={styles.heading}>
        <h1>Our Bikes</h1>

        <div className={styles.container}>
          {/* Render the desired number of cards */}
          {bikes.slice(0, numberOfCards).map((bike, index) => (
            <Card key={index} bike={bike} />
          ))}
        </div>
        <div className={styles.btn_container}>
        <a href="/bikes" className={styles.btn}>More</a>
        </div>
      </div>
      <div className={styles.slider_container}></div>
    </div>
  );
};

export default Find;
