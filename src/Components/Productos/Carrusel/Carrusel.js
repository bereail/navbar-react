/*import React from 'react';
import { Carousel } from 'react-bootstrap';
import cajoneEspecialesImg from '../../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../../assets/contenedorOctogonalUltrabin1000.png';
import styles from './Carrusel.module.css'; 

const Carrusel = () => {
  const productos = [
    {
      id: 1,
      imgSrc: cajoneEspecialesImg,
      title: 'Cajone Especiales',
      description: 'Descripción del producto 1.',
    },
    {
      id: 2,
      imgSrc: contenedorEstandarUltrabox1200,
      title: 'Contenedor Estándar Ultrabox A1200',
      description: 'Descripción del producto 2.',
    },
    {
      id: 3,
      imgSrc: contenedorOctogonalUltrabin1000,
      title: 'Contenedor Octogonal Ultrabin 1000',
      description: 'Descripción del producto 3.',
    },
  ];

  return (
    <Carousel interval={3000} pause="hover">
      {productos.map((producto) => (
        <Carousel.Item key={producto.id} className={styles.carouselItem}>
          <img className="d-block w-100" src={producto.imgSrc} alt={producto.title} />
          <Carousel.Caption className={styles.carouselCaption}>
            <h5>{producto.title}</h5>
            <p>{producto.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
*/