/*import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './Productos.module.css';
import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';

const Productos = ({ onProductSelect }) => {
  const productos = [
    {
      id: 1,
      imgSrc: cajoneEspecialesImg,
      title: 'Cajone Especiales',
      description: 'Contenedor diseñado para necesidades especiales.',
      advantages: [
        'Material resistente y duradero',
        'Fácil de limpiar y mantener',
        'Capacidad para distintos tipos de residuos'
      ],
    },
    {
      id: 2,
      imgSrc: contenedorEstandarUltrabox1200,
      title: 'Contenedor Estándar Ultrabox A1200',
      description: 'Contenedor de gran capacidad para almacenamiento de residuos.',
      advantages: [
        'Gran capacidad de almacenamiento',
        'Diseño compacto y eficiente',
        'Ideal para uso industrial'
      ],
    },
    {
      id: 3,
      imgSrc: contenedorOctogonalUltrabin1000,
      title: 'Contenedor Octogonal Ultrabin 1000',
      description: 'Contenedor octogonal de 1000L para reciclaje eficiente.',
      advantages: [
        'Diseño optimizado para reciclaje',
        'Estructura octogonal que facilita el apilamiento',
        'Fabricado con materiales reciclables'
      ],
    },
    {
      id: 4,
      imgSrc: octobin2,
      title: 'octobin2',
      description: 'Contenedor octogonal de 1000L para reciclaje eficiente.',
      advantages: [
        'Diseño optimizado para reciclaje',
        'Estructura octogonal que facilita el apilamiento',
        'Fabricado con materiales reciclables'
      ],
    },
  ];

  return (
    <div className={styles.mainCard}>
      {productos.map((producto, index) => (
        index % 2 === 0 && (
          <Card key={index} className={styles.outerCard}>
            <div className={styles.innerCards}>
              <Card className={styles.productCard} onClick={() => onProductSelect(productos[index])}>
                <Card.Img variant="top" src={productos[index].imgSrc} alt={productos[index].title} />
                <Card.Body>
                  <Card.Title>{productos[index].title}</Card.Title>
                  <Card.Text>{productos[index].description}</Card.Text>
                  <ul>
                    {productos[index].advantages.map((advantage, i) => (
                      <li key={i}><FaCheckCircle className={styles.checkIcon} /> {advantage}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
              {productos[index + 1] && (
                <Card className={styles.productCard} onClick={() => onProductSelect(productos[index + 1])}>
                  <Card.Img variant="top" src={productos[index + 1].imgSrc} alt={productos[index + 1].title} />
                  <Card.Body>
                    <Card.Title>{productos[index + 1].title}</Card.Title>
                    <Card.Text>{productos[index + 1].description}</Card.Text>
                    <ul>
                      {productos[index + 1].advantages.map((advantage, i) => (
                        <li key={i}><FaCheckCircle className={styles.checkIcon} /> {advantage}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Card>
        )
      ))}
    </div>
  );
};

export default Productos;
*/