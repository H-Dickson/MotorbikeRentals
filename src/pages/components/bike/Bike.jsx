import React from "react";
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
            <br />
            <p>{bike.make} {bike.model}</p>
            <p>{bike.description}</p>
        </div>
    )
};
export default Bike;
