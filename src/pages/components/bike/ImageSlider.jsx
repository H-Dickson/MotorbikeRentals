import React, { useState, useEffect, useCallback } from "react";
import styles from "./Bike.module.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  margin: "0 auto",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 1s ease-in-out",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState("50vh");
  const [iconColor, setIconColor] = useState("black");
  const [iconSize, setIconSize] = useState("55px");
  const [opacity, setOpacity] = useState(1);

  const updateSliderHeight = useCallback(() => {
    if (window.innerWidth < 800) {
      setSliderHeight("30vh");
      setIconColor("#ccc");
      setIconSize("40px");
    } else {
      setSliderHeight("50vh");
      setIconColor("black");
      setIconSize("55px");
    }
  }, []);

  useEffect(() => {
    updateSliderHeight();

    const handleResize = () => {
      updateSliderHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateSliderHeight]);

  const handleTransition = useCallback((nextIndex) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setOpacity(1);
    }, 650);
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  }, [currentIndex, slides.length, handleTransition]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  }, [currentIndex, slides.length, handleTransition]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, goToNext]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  const rightArrowStyles = {
   position: "absolute",
   top: "50%",
   transform: "translate(0, -50%)",
   right: "0px",
   fontSize: iconSize,
   color: iconColor,
   zIndex: 1,
   cursor: "pointer",
   backgroundcolor: "rgba(0,0,0,0)",
 };
 
 const leftArrowStyles = {
   position: "absolute",
   top: "50%",
   transform: "translate(0, -50%)",
   left: "0px",
   fontSize: iconSize,
   color: iconColor,
   zIndex: 1,
   cursor: "pointer",
 };

  const slideStylesWidthBackground = {
    ...slideStyles,
    height: sliderHeight,
    maxWidth: "1000px",
    backgroundImage: `url(${slides[currentIndex].url})`,
    opacity: opacity,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div className={styles.backgroundImg} style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;