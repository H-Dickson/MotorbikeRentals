import React from 'react';
import styles from './components/bikes/Bikes.module.css';
import Bike from './components/bike/Bike';
import BikesPage from './BikesPage';

const BikePage = () => {
    const path = window.location.pathname;
    const match = path.match(/\/bikes\/(\d+)/);
    const bike = require("../json/bikes.json")[match[1]];
    console.log("the match is " + match[1]);
    if (match[1] > 3){
        window.location.pathname = "/bikes";
        return(
            <BikesPage />
        )
    }else{
    return (
        <div className={styles.container}>
        <Bike bike ={bike}/>
        </div>
    );
    }
}

export default BikePage;