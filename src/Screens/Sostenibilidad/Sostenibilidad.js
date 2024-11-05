import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './Sostenibilidad.module.css';

const Sostenibilidad = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  return (
    <animated.section style={fadeIn} className={styles.section}>
      <h2 className={styles.title}>Diseño Sostenible</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <h3>ULTRACOR</h3>
          <p>
            ULTRACOR diseña productos que equilibran las necesidades del cliente y el cuidado del medio ambiente.
          </p>
        </div>
        <div className={styles.infoBox}>
          <h3>Materiales Reciclables</h3>
          <p>
            Nuestros contenedores están hechos de cartón corrugado 100% reciclable, con adhesivos de base acuosa y
            bolsas de polímeros reciclables.
          </p>
        </div>
        <div className={styles.infoBox}>
          <h3>Suministro Responsable</h3>
          <p>
            Trabajamos con proveedores de pallets certificados que obtienen su madera de bosques sostenibles.
          </p>
        </div>
        <div className={styles.infoBox}>
          <h3>Reducción de Movimientos</h3>
          <p>
            Con ULTRABIN 1000, se requiere un 25% menos de viajes logísticos.
          </p>
        </div>
        <div className={styles.infoBox}>
          <h3>Menor Huella de Carbono</h3>
          <p>
            La reducción de viajes contribuye a disminuir la huella de carbono en un 25%.
          </p>
        </div>
      </div>
    </animated.section>
  );
};

export default Sostenibilidad;
