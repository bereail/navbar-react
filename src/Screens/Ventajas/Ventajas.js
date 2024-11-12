// Ventajas.jsx
import React, { useState, useEffect } from 'react';
import './Ventajas.module.css';

const Ventajas = ({ items = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Verificamos si items tiene contenido para establecer el intervalo de cambios de imagen
    if (items.length > 0) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);

      return () => clearInterval(slideInterval);
    }
  }, [items, interval]);

  // Si items está vacío o no tiene elementos, mostramos un mensaje
  if (items.length === 0) {
    return <p>No hay ventajas disponibles.</p>;
  }

  return (
    <div className="ventajas">
      <div
        className="ventajas-slide"
        style={{ backgroundImage: `url(${items[currentIndex].image})` }}
      >
        <div className="ventajas-text">
          <h2>{items[currentIndex].title}</h2>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>
      <div className="ventajas-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Ventajas;
