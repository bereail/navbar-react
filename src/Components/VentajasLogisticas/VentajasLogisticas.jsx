import React from 'react';
import styles from './VentajasLogisticas.module.css';
import Octobin from '../../assets/Octobin.png';
import Tambor from '../../assets/Tambor.png';

const VentajasLogisticas = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ventajas Logísticas</h2>

      <div className={styles.section}>
        <p className={styles.text}>
          ULTRABIN 1000 permite obtener un mayor rendimiento de los costos de transporte en comparación con el uso de tambores de 200 litros,
          permitiendo en el mismo espacio de carga enviar 200 litros más de producto por posición. 
        </p>
        <p className={styles.text}>
          Logrando en un equipo de 48 posiciones un total de 9600 litros más de espacio aprovechado con producto en cada uno de sus envíos.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>OCTOBIN</h3>
        <p className={styles.text}>
          OCTOBIN también ofrece beneficios logísticos similares, optimizando el espacio de carga y reduciendo los costos operativos.
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={Octobin} alt="Octobin" className={styles.image} />
            <p className={styles.imageText}>1000 litros sobre una superficie de 1 m²</p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={Tambor} alt="Tambor" className={styles.image} />
            <p className={styles.imageText}>800 litros sobre una superficie de 1 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentajasLogisticas;
