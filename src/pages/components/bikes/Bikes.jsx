import React from "react";
import BikeCard from "./BikeCard";

const Bikes = () => {
    const display = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    }
    const bikes = require("../../../json/bikes.json");
    return (
        <div style={display}>
            {bikes.map((bike, i) => (
               <BikeCard key={i} bike={bike} />
            ))}
        </div>
    );
};

export default Bikes;