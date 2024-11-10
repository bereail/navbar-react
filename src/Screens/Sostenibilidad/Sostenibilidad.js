import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import styles from './Sostenibilidad.module.css';

const Sostenibilidad = () => {
  const items = [
    { title: 'ULTRACOR', text: 'ULTRACOR diseña productos que equilibran las necesidades del cliente y el cuidado del medio ambiente.' },
    { title: 'Materiales Reciclables', text: 'Nuestros contenedores están hechos de cartón corrugado 100% reciclable, con adhesivos de base acuosa y bolsas de polímeros reciclables.' },
    { title: 'Suministro Responsable', text: 'Trabajamos con proveedores de pallets certificados que obtienen su madera de bosques sostenibles.' },
    { title: 'Reducción de Movimientos', text: 'Con ULTRABIN 1000, se requiere un 25% menos de viajes logísticos.' },
    { title: 'Menor Huella de Carbono', text: 'La reducción de viajes contribuye a disminuir la huella de carbono en un 25%.' },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <h2 className={styles.title}>Diseño Sostenible</h2>
      <div className={styles.infoContainer}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style} className={styles.infoBox}>
            <h3>{items[index].title}</h3>
            <p>{items[index].text}</p>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Sostenibilidad;
