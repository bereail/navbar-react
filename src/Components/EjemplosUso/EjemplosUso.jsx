import React from 'react';
import './ejemplosUsos.css';

const EjemplosUso = () => {
    return (
        <div className="description-ultrabin">
            <p>
                ULTRABIN 1000 es nuestro contenedor de 1000 litros de capacidad construido a partir de 
                dos capas de doble pared de cartón corrugado reforzado con forma de prisma octogonal regular.
            </p>
            <p>
                ULTRABIN 1000, al igual que ULTRABIN 500, es un contenedor muy utilizado en los sectores 
                de la industria alimenticia, petroquímica, metalúrgica y agro, ya que, es muy recomendado 
                para el transporte de sustancias líquidas, en polvo, granulados, semillas y productos 
                congelados entre los usos más frecuentes.
            </p>
        </div>
    );
};

export default EjemplosUso;



/*import React, { useState, useEffect } from 'react';
import Granulados from '../../assets/Granulados.png';
import Liquidos from '../../assets/Liquidos.png';
import Congelados from '../../assets/Congelados.png';
import './ejemplosUsos.css'

const examples = [
    {
      id: 1,
      image: Granulados,
      title: "SÓLIDO",
      description: "Uso ideal para productos sólidos como cereales o granos.",
      color: 'color-solido'
    },
    {
      id: 2,
      image: Liquidos,
      title: "LÍQUIDO",
      description: "Diseñado para almacenar líquidos de forma segura y eficiente.",
      colorClass: 'color-liquido'
    },
    {
      id: 3,
      image: Congelados,
      title: "CONGELADO",
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

      <div className={`card-usos ${currentExample.colorClass}`}>
       
        <div>
          <h4 className={`card-usos-title ${currentExample.colorClass}`}>{currentExample.title}</h4>
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

*/