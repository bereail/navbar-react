import React, { useEffect, useState } from 'react';
import styles from './BeneficiosEcologicos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRecycle, faTree, faTruck, faCloud } from '@fortawesome/free-solid-svg-icons';

const BeneficiosEcologicos = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const details = [
    { icon: faLeaf, title: "ULTRACOR", description: "Diseña productos que equilibran el cliente y el medio ambiente." },
    { icon: faRecycle, title: "Materiales Reciclables", description: "Nuestros contenedores están hechos de cartón 100% reciclable." },
    { icon: faTree, title: "Suministro Responsable", description: "Proveedores de madera certificada y sostenible." },
    { icon: faTruck, title: "Reducción de Movimiento", description: "Con ULTRABIN 1000, se requieren menos viajes logísticos." },
    { icon: faCloud, title: "Menor Huella de Carbono", description: "Menos viajes = 25% menos de emisiones de CO₂." },
  ];

  return (
    <div className={`${styles.cardEcoVentajas} ${isLoaded ? styles.loaded : ''}`}>
      <h2 className={styles.titleCard}>Beneficios Ecológicos</h2>
      {details.map((detail, index) => (
        <p key={index} className={styles.descriptionCard}>
          <FontAwesomeIcon icon={detail.icon} className={styles.iconCard} />{" "}
          <strong>{detail.title}:</strong> {detail.description}
        </p>
      ))}
    </div>
  );
};

export default BeneficiosEcologicos;
