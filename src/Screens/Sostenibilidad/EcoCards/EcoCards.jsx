import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRecycle, faTree, faTruck, faCloud } from '@fortawesome/free-solid-svg-icons';
import styles from './EcoCards.module.css';

const EcoCards = () => {
  return (
    <section className={styles.container}>
      {/* Contenedor de las tarjetas pequeñas */}
      <div className={styles.smallCards}>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faLeaf} className={styles.icon} />
          <h3>Cuidado del Ambiente</h3>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faTruck} className={styles.icon} />
          <h3>Optimización Logística</h3>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faRecycle} className={styles.icon} />
          <h3>Reciclabilidad</h3>
        </div>
      </div>

    
    </section>
  );
};

export default EcoCards;
