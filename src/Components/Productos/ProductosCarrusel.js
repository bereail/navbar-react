/*import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './ProductosCarrusel.module.css';
import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';

const ProductosCarrusel = ({ onProductSelect }) => {
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
  ];

  return (
    <Carousel
      interval={3000}
      className={styles.productCarousel}
      prevIcon={<span className={styles.customPrevIcon}>&#9664;</span>}
      nextIcon={<span className={styles.customNextIcon}>&#9654;</span>}
    >
      {productos.map((producto, index) => (
        <Carousel.Item key={index} className={styles.carouselItem}>
          <div className={`${styles.productCard} ${index === 1 ? styles.centerCard : ''}`}>
            <img
              src={producto.imgSrc}
              alt={producto.title}
              onClick={() => onProductSelect(producto)}
              className={`${styles.carouselImage} ${index === 1 ? styles.centerImage : styles.sideImage}`}
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductosCarrusel;
*/