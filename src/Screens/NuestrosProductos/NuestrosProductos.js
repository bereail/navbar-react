import React from 'react';
import styles from './NuestrosProductos.module.css';
import Productos from '../../Components/Productos/Productos'
import Carrusel from '../../Components/Productos/Carrusel/Carrusel';


const NuestrosProductos = () => {
  return (
    <section id="NuestrosProductos" className={styles.section}>
      <div className={styles.nuestrosProductosOverlay}>
     
        </div> 
      <div className={styles.nuestrosProductosContent}> 
        <Productos />
        <Carrusel />
      </div>
    </section>
  );
};

export default NuestrosProductos;