import React from 'react';
import styles from './Sostenibilidad.module.css';
import EcoCards from '../../Components/EcoCards/EcoCards';
import BeneficiosEcologicos from '../../Components/BeneficiosEcologicos/BeneficiosEcologicos';


const Sostenibilidad = () => {
  return (
    <section className={styles.section} id="Sostenibilidad">
      <div className={styles.containerSostenibilidad}>
        <h1 className={styles.titleSostenibilidad}>Sostenibilidad</h1>
        <EcoCards />
        <BeneficiosEcologicos />
      </div>
    </section>
  );
};

export default Sostenibilidad;
