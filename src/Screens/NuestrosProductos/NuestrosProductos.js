import React from 'react';
import cajonEspecial from '../../assets/cajonEspecial.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';

import styles from '../NuestrosProductos/NuestrosProductos.module.css';
import Ventajas from '../Ventajas/Ventajas';

import Slider from '../../Components/Slider/Slider';


const PRODUCTOS = [
  {
    id: 1,
    title: 'Octabin',
    description: 'Solución innovadora para almacenamiento',
    img: octobin2,
    features: ['Característica A', 'Característica B', 'Característica C']
  },
  {
    id: 2,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial,
    features: ['Característica A', 'Característica B', 'Característica C']
  },
  {
    id: 3,
    title: 'Contenedor Estandar Ultrabox 1200',
    description: 'Contenedor de gran capacidad y durabilidad',
    img: contenedorEstandarUltrabox1200,
    features: ['Característica A', 'Característica B', 'Característica C']
  },
  {
    id: 4,
    title: 'Contenedor Octogonal Ultrabin 1000',
    description: 'Diseño octogonal para un uso óptimo del espacio',
    img: contenedorOctogonalUltrabin1000,
    features: ['Característica A', 'Característica B', 'Característica C']
  }
]

const NuestrosProductos = () => {
  return (
    <section className={styles.section}>
      <h2>Nuestros Productos</h2>
      <Slider productos={PRODUCTOS} />
      <div className={styles.buttonContainer}>
        <button className={styles.buttonCotizacion} onClick={() => alert('Solicitud de cotización enviada!')}>
          Solicitar Cotización
        </button>
      </div>
      <div>
        <Ventajas />
      </div>
    </section>

  );
};

export default NuestrosProductos;

/* const [showModal, setShowModal] = useState(false);
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
  );*/