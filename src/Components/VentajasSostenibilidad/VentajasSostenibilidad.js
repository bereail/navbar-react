import React from 'react';
import styles from './VentajasSostenibilidad.module.css';

const VentajasSostenibilidad = () => {
  return (
    <div className={styles.cardEcoVentajas}>
      <h2 className={styles.titleCard}>Ventajas del Cartón</h2>
      <ul className={styles.descriptionCard}>
        <li>Menor impacto medioambiental.</li>
        <li>100% reciclable y biodegradable.</li>
        <li>Minimiza la generación de residuos.</li>
        <li>El cartón reciclado mantiene su resistencia.</li>
        <li>Reciclar cartón ahorra energía en la producción de otros materiales.</li>
      </ul>
    </div>
  );
};

export default VentajasSostenibilidad;
