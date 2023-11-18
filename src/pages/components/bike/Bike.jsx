import React from "react";
import styles from "./Bike.module.css";
import ImageSlider from "./ImageSlider";

const Bike = ({ bike }) => {
    const baseURL = "/images/";
    const slides = bike.image.map(image => ({ url: `${baseURL}${image}`}));
    slides.forEach(slide => {
        slide.title = `${bike.make} ${bike.model}`;
    })
    console.log(slides.url);
    return (
        <div>
            <ImageSlider slides={slides}/>
        </div>
    )
};
export default Bike;
