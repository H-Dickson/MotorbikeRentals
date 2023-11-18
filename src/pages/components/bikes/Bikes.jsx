import React from "react";
import BikeCard from "./BikeCard";

const Bikes = () => {
    const bikes = require("../../../json/bikes.json");
    return (
        <div>
            {bikes.map((bike, i) => (
               <BikeCard key={i} bike={bike} />
            ))}
        </div>
    );
};

export default Bikes;