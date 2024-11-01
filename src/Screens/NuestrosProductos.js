import React from 'react';
import styles from './NuestrosProductos.module.css';
import Productos from '../Components/Productos';
import ProductosCarrusel from '../Components/ProductosCarousel';

const NuestrosProductos = () => {
  return (
    <section id="NuestrosProductos" className={styles.nuestrosProductosSection}>
      <div className={styles.nuestrosProductosOverlay}></div> 
      <div className={styles.nuestrosProductosContent}> 
        <Productos />
        <ProductosCarrusel />
      </div>
    </section>
  );
};

export default NuestrosProductos;