import React, { useEffect, useState } from 'react';
import styles from './BeneficiosEcologicos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRecycle, faTree, faTruck, faCloud } from '@fortawesome/free-solid-svg-icons';

const BeneficiosEcologicos = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Activar la animación cuando el componente se monta
  }, []);


  const details = [
    {
      icon: faLeaf,
      title: "ULTRACOR",
      description: "Diseña productos que equilibran las necesidades del cliente y el cuidado del medio ambiente.",
    },
    {
      icon: faRecycle,
      title: "Materiales Reciclables",
      description:
        "Nuestros contenedores están hechos de cartón corrugado 100% reciclable, con adhesivos de base acuosa y bolsas de polímeros reciclables.",
    },
    {
      icon: faTree,
      title: "Suministro Responsable",
      description:
        "Trabajamos con proveedores de pallets certificados que obtienen su madera de bosques sostenibles.",
    },
    {
      icon: faTruck,
      title: "Reducción de Movimiento",
      description: "Con ULTRABIN 1000, se requiere un 25% menos de viajes logísticos.",
    },
    {
      icon: faCloud,
      title: "Menor Huella de Carbono",
      description:
        "La reducción de viajes contribuye a disminuir la huella de carbono en un 25%.",
    },
  ];

  return (
    <div className={`${styles.largeCard} ${isLoaded ? styles.loaded : ''}`}>
      <div>
        <h2 className={styles.titleBeneficios}>Beneficios Ecológicos</h2>
        {details.map((detail, index) => (
          <p key={index} className={styles.description}>
            <FontAwesomeIcon icon={detail.icon} className={styles.detailIcon} />{" "}
            <strong>{detail.title}:</strong> {detail.description}
          </p>
        ))}

      </div>
    </div>
  );
}

export default BeneficiosEcologicos;
