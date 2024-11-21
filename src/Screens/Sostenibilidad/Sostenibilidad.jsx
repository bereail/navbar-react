import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import styles from './Sostenibilidad.module.css';
import EcoCards from './EcoCards/EcoCards';
import BeneficiosEcologicos from './BeneficiosEcologicos/BeneficiosEcologicos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importa los íconos de FontAwesome
import { faLeaf, faRecycle, faTree, faTruck, faCloud } from '@fortawesome/free-solid-svg-icons';  // Importa íconos específicos


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
    <section className={styles.section} id="Sostenibilidad">
      <div className={styles.containerSostenibilidad}>
            <h1 className={styles.titleSostenibilidad}
            >SOSTENIBILIDAD</h1>

          <EcoCards />
          <BeneficiosEcologicos />
        </div>
    </section>
  );
};

export default Sostenibilidad;
