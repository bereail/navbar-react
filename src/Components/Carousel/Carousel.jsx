import React, { useState, useEffect } from "react";
import './Carousel.css'

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="carousel-container">
            {images.map((image, index) => (
                <div className="carousel-images" >
                    {index === currentImageIndex && (
                        <img key={image.id} className='card-img-top' src={image.img} alt="Imagen del carrusel" />
                    )}
                </div>
            ))}
        </div>)
};


export default Carousel;
