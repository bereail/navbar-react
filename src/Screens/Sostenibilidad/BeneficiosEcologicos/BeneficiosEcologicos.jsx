import React from 'react'
import styles from './BeneficiosEcologicos.module.css';  // Importa el archivo de estilos para el componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importa los íconos de FontAwesome
import { faLeaf, faRecycle, faTree, faTruck, faCloud } from '@fortawesome/free-solid-svg-icons';  // Importa íconos específicos

// Componente funcional que muestra los beneficios ecológicos
const BeneficiosEcologicos = () => {
  return (
    <div>
        {/* Contenedor de la tarjeta detallada */}
        <div className={styles.largeCard}>
        <h2>Beneficios Ecologicos</h2> {/* Título de la tarjeta */}
        <p>
          <FontAwesomeIcon icon={faLeaf} className={styles.detailIcon} />{' ' /* Ícono de hoja */}
          <strong>ULTRACOR:</strong> Diseña productos que equilibran las necesidades del cliente y el cuidado del medio ambiente.
        </p>
        <p>
          <FontAwesomeIcon icon={faRecycle} className={styles.detailIcon} />{' ' /* Ícono de reciclaje */}
          <strong>Materiales Reciclables:</strong> Nuestros contenedores están hechos de cartón corrugado 100% reciclable, con adhesivos de base acuosa y bolsas de polímeros reciclables.
        </p>
        <p>
          <FontAwesomeIcon icon={faTree} className={styles.detailIcon} />{' ' /* Ícono de árbol */}
          <strong>Suministro Responsable:</strong> Trabajamos con proveedores de pallets certificados que obtienen su madera de bosques sostenibles.
        </p>
        <p>
          <FontAwesomeIcon icon={faTruck} className={styles.detailIcon} />{' ' /* Ícono de camión */}
          <strong>Reducción de Movimiento:</strong> Con ULTRABIN 1000, se requiere un 25% menos de viajes logísticos.
        </p>
        <p>
          <FontAwesomeIcon icon={faCloud} className={styles.detailIcon} />{' ' /* Ícono de nube */}
          <strong>Menor Huella de Carbono:</strong> La reducción de viajes contribuye a disminuir la huella de carbono en un 25%.
        </p>
      </div>
    </div>
  )
}

export default BeneficiosEcologicos;
