import React, { useState, useEffect } from 'react';
import Granulados from '../../assets/Granulados.png';
import Liquidos from '../../assets/Liquidos.png';
import Congelados from '../../assets/Congelados.png';
import styles from './EjemplosUso.module.css';


const EjemplosUso = () => {
  const examples = [
    {
      id: 1,
      image: Granulados,
      title: "Sólido",
      description: "Uso ideal para productos sólidos como cereales o granos.",
      colorClass: styles.solidColor, // Color asociado a "Sólido"
    },
    {
      id: 2,
      image: Liquidos,
      title: "Líquido",
      description: "Diseñado para almacenar líquidos de forma segura y eficiente.",
      colorClass: styles.liquidColor, // Color asociado a "Líquido"
    },
    {
      id: 3,
      image: Congelados,
      title: "Congelado",
      description: "Perfecto para productos congelados que necesitan bajas temperaturas.",
      colorClass: styles.frozenColor, // Color asociado a "Congelado"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [examples.length]);

  const currentExample = examples[currentIndex];

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title}`}>
        Ejemplos de uso
      </h1>

      <div className={styles.containerUsos}>
        <img
          src={currentExample.image}
          alt={currentExample.title}
        />
        <div>
          <h4>{currentExample.title}</h4>
          <p>{currentExample.description}</p>
        </div>
      </div>

     {/*  <div className={styles.card}>
        <img
          src={currentExample.image}
          alt={currentExample.title}
          className={styles.cardImage}
        />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{currentExample.title}</h5>
          <p className={styles.cardText}>{currentExample.description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default EjemplosUso;

