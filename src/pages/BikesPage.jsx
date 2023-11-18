import React from 'react';
import styles from './components/bikes/Bikes.module.css';
import Bikes from './components/bikes/Bikes';

const BikePage = () => {
    return (
        <div className={styles.container}>
        <Bikes />
        </div>
    );
}

export default BikePage;