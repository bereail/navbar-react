import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faTruck, faRecycle } from '@fortawesome/free-solid-svg-icons';
import styles from './EcoCards.module.css';

const EcoCards = () => {
  const ecoCards = [
    {
      icon: faLeaf,
      title: "Cuidado del Ambiente",
    },
    {
      icon: faTruck,
      title: "Optimización Logística",
    },
    {
      icon: faRecycle,
      title: "Reciclabilidad",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.ecoContainer}>
        <div className={styles.smallCards}>
          {ecoCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <FontAwesomeIcon icon={card.icon} className={styles.icon} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoCards;
