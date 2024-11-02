import React, { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ images }) {
    const [position, setPosition] = useState(0);
    const angle = 360 / images.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `rotate(${position * angle}deg)` }}>
                {images.map((image, index) => (
                    <div
                        className="carousel-item"
                        key={index}
                        style={{ transform: `rotate(${index * angle}deg) translate(150px)` }}
                    >
                        <img src={image.src} alt={image.alt} className="carousel-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
