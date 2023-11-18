import React from "react";
import styles from "./Bikes.module.css";

const BikeCard = ({ bike }) => {
  return (
    
    <div className={styles.card}>
      <a href={"/bikes/" + bike.id}>
        {/* Assuming that the first image in the array is the primary one */}
        <img src={"./images/"+bike.image[0]} alt={bike.make + bike.model}/>
        <p>{bike.make} {bike.model}</p>
        <p>{bike.year}</p>
        <p>{bike.description}</p>
      {/* Add more fields as needed */}
      </a>
    </div>
    
  );
};
export default BikeCard;