// src/screens/Inicio.js
import React from 'react';
import styles from './Inicio.module.css'; // Asegúrate de que la ruta sea correcta

function Inicio() {
  return (
    <section className={styles.inicioSection}> {/* Cambiado de name a className */}
      <div className={styles.inicioOverlay}></div> {/* Cambiado a styles.inicioOverlay */}
      <div className={styles.inicioContent}> {/* Cambiado a styles.inicioContent */}
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Explora nuestros productos y descubre más sobre nosotros.</p>
        <a href="#NuestrosProductos" className={styles.inicioButton}>Ver Productos</a>
      </div>
    </section>
  );
}

export default Inicio;
