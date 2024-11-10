import React from 'react';
import styles from './NuestrosProductos.module.css';
import Productos from '../../Components/Productos/Productos'
import Carrusel from '../../Components/Productos/Carrusel/Carrusel';


const NuestrosProductos = () => {
  return (
    <section id="Nuestros Productos" className={styles.section}>
        <h2 className={styles.title}>Nuestros Productos</h2>
      <div className={styles.content}>
        <Productos />
        <Carrusel />
      </div>
    </section>
  );
};

export default NuestrosProductos;