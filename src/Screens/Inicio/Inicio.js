import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section className={styles.inicioSection}>
      <div className={styles.inicioOverlay}></div>
      <div className={styles.inicioContent}>
        <h1  className={styles.inicioTitle}>
          <span>Innovación Joven</span>
          <span>Trayectoria Firme</span>
        </h1>
        <p className={styles.inicioParagraph}>Explora nuestros productos y descubre más sobre nosotros</p>
        <div className={styles.inicioButtonsContainer}>
          <a href="#NuestrosProductos" className={styles.inicioButtonNaranja}>Ver Productos</a>
          <a href="Nosotros" className={styles.inicioButtonVerde}>Conocer más</a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;