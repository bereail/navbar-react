import React, { useState, useEffect } from 'react';
import Granulados from '../../assets/Granulados.png';
import Liquidos from '../../assets/Liquidos.png';
import Congelados from '../../assets/Congelados.png';
import './ejemplosUsos.css'

const examples = [
    {
      id: 1,
      image: Granulados,
      title: "Sólido",
      description: "Uso ideal para productos sólidos como cereales o granos.",
      color: 'color-solido'
    },
    {
      id: 2,
      image: Liquidos,
      title: "Líquido",
      description: "Diseñado para almacenar líquidos de forma segura y eficiente.",
      colorClass: 'color-liquido'
    },
    {
      id: 3,
      image: Congelados,
      title: "Congelado",
      description: "Perfecto para productos congelados que necesitan bajas temperaturas.",
      colorClass: 'color-congelado'
    },
  ];

const EjemplosUso = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [examples.length]);

  const currentExample = examples[currentIndex];

  return (
    <div className='container-usos'>
      <h1 className='container-usos-title' >
        Ejemplos de uso
      </h1>

      <div className={`card-usos ${currentExample.colorClass}`}>
       
        <div>
          <h4 className={`${currentExample.colorClass}`}>{currentExample.title}</h4>
          <p className='card-usos-description'>{currentExample.description}</p>
        </div> 
        <img
          className='card-usos-img'
          src={currentExample.image} 
          alt={currentExample.title}
        />
      </div>

    </div>
  );
};

export default EjemplosUso;

