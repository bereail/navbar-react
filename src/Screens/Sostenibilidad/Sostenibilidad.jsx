import React from 'react';
import styles from './Sostenibilidad.module.css';
import EcoCards from '../../Components/EcoCards/EcoCards';
import BeneficiosEcologicos from '../../Components/BeneficiosEcologicos/BeneficiosEcologicos';
import VentajasSostenibilidad from '../../Components/VentajasSostenibilidad/VentajasSostenibilidad';

const Sostenibilidad = () => {
  return (
    <section className={styles.section} id="Sostenibilidad">
      <div className={styles.containerSostenibilidad}>
        <h1 className={styles.titleSostenibilidad}>Sostenibilidad</h1>
        <EcoCards />
        
        {/* Contenedor para las dos tarjetas juntas */}
        <div className={styles.containerEcoVentajas}>
          <BeneficiosEcologicos />
          <VentajasSostenibilidad />
        </div>
      </div>
    </section>
  );
};

export default Sostenibilidad;
