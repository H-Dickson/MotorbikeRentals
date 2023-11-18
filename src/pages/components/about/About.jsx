import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.heading}>
                <h1>About Us</h1>
                <br/>
                <p>
                    

Welcome to [Your Motorbike Rental Service Name], your go-to destination for premium motorbike rentals in [Your Location].
</p>
<p>
<br/>
At [Your Motorbike Rental Service Name], we understand the thrill and freedom that comes with riding a motorcycle. Our mission is to provide enthusiasts like you with top-notch, well-maintained bikes, ensuring an unforgettable riding experience across [Your Location's] breathtaking landscapes and beyond.
Our fleet boasts a diverse range of motorcycles, from sleek cruisers to nimble sports bikes, catering to both seasoned riders and beginners eager to explore the open roads. 
</p>
<br/>
<p>Safety and quality are our utmost priorities; each bike undergoes rigorous maintenance to guarantee optimal performance and reliability.
What sets us apart is our commitment to personalized service. Our team consists of passionate riders who are not just here to rent you a bike but to share local riding insights, recommend scenic routes, and ensure you have a memorable adventure.
</p>
<br />
<p>
Whether you're planning a solo ride, a group tour, or a weekend getaway, [Your Motorbike Rental Service Name] is here to make it happen. Explore the freedom of the road, immerse yourself in the thrill of riding, and discover [Your Location] from a whole new perspective.

Thank you for choosing us to be a part of your motorcycling journey.
                </p>
            </div>
            <div className={styles.slider_container}></div>
        </div>
    );
}

export default About;