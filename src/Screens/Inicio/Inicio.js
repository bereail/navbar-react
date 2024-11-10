import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section className={styles.inicioSection}>
      <div className={styles.inicioOverlay}></div>
      <div className={styles.inicioContent}>
        <h1>
          <span>Innovación Joven</span>
          <span>Trayectoria Firme</span>
        </h1>
        <p className={styles.inicioParagraph}>Explora nuestros productos y descubre más sobre nosotros</p>
        <a href="#NuestrosProductos" className={styles.inicioButton}>Ver Productos</a>
      </div>
    </section>
  );
}



export default Inicio;
