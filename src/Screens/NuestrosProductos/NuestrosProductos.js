import React, { useState } from 'react';
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './NuestrosProductos.module.css';
import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';


const NuestrosProductos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleShow = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <section id="Nuestros Productos" className={styles.section}>
      <h2 className={styles.title}>Nuestros Productos</h2>
      
      <Carousel
        interval={5000}
        className={styles.productCarousel}
        prevIcon={<span className={styles.customPrevIcon}>&#9664;</span>}
        nextIcon={<span className={styles.customNextIcon}>&#9654;</span>}
        controls
        fade
      >
        {productos.map((producto) => (
          <Carousel.Item key={producto.id} onClick={() => handleShow(producto)}>
            <div className={`${styles.centeredProduct} ${styles.carouselItem}`}>
              <Card className={styles.productCard}>
                <Card.Img variant="top" src={producto.imgSrc} alt={producto.title} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>{producto.description}</Card.Text>
                  <ul>
                    {producto.advantages.map((advantage, index) => (
                      <li key={index}><FaCheckCircle className={styles.checkIcon} /> {advantage}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct ? selectedProduct.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Descripción:</strong> {selectedProduct ? selectedProduct.description : ''}</p>
          {selectedProduct && selectedProduct.advantages && (
            <div>
              <strong>Ventajas:</strong>
              <ul>
                {selectedProduct.advantages.map((advantage, index) => (
                  <li key={index}>✔️ {advantage}</li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Solicitar Cotización</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default NuestrosProductos;
