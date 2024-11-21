import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importa los íconos
import { faLeaf, faTruck, faRecycle } from '@fortawesome/free-solid-svg-icons';  // Íconos utilizados
import styles from './EcoCards.module.css';  // Archivo de estilos

const EcoCards = () => {
  return (
    <section className={styles.container}>
   <div className={styles.ecoContainer}>
      <div className={styles.smallCards}>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faLeaf} className={styles.icon} /> {/* Ícono de hoja */}
          <h3>Cuidado del Ambiente</h3>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faTruck} className={styles.icon} /> {/* Ícono de camión */}
          <h3>Optimización Logística</h3>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faRecycle} className={styles.icon} /> {/* Ícono de reciclaje */}
          <h3>Reciclabilidad</h3>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EcoCards;
