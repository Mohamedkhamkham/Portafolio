import React from "react";
import "./MyCarousel.css";

function MyCarousel({ images }) {
    return (
        <div className="carousel-circle">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="carousel-item-circle"
                    style={{ transform: `rotate(${index * (360 / images.length)}deg)` }}
                >
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
}

export default MyCarousel;
