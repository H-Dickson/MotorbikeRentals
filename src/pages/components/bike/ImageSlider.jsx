import { useState, useEffect} from "react";
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


const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "0px",
  fontSize: "55px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
  backgroundcolor: "rgba(0,0,0,0)",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "0px",
  fontSize: "55px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
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
   const [sliderHeight, setSliderHeight] = useState("50vh"); // Initial height
   const [opacity, setOpacity] = useState(1);
 
   const updateSliderHeight = () => {
     if (window.innerWidth < 800) {
       setSliderHeight("30vh");
     } else {
       setSliderHeight("50vh");
     }
   };
 
   useEffect(() => {
     updateSliderHeight(); // Set initial height on component mount
 
     const handleResize = () => {
       updateSliderHeight(); // Update height on window resize
     };
 
     window.addEventListener("resize", handleResize);
 
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   const handleTransition = (nextIndex) => {
      setOpacity(0); // Fade out the image
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setOpacity(1); // Fade in the next image
      }, 650); // Wait for the transition duration
    };
  
    const goToPrevious = () => {
      const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      handleTransition(newIndex);
    };
  
    const goToNext = () => {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      handleTransition(newIndex);
    };
  
    useEffect(() => {
      const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex, slides.length]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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