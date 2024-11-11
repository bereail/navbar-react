import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import styles from './NuestrosProductos.module.css';
import Productos from '../../Components/Productos/Productos';
import Carrusel from '../../Components/Productos/Carrusel/Carrusel';

const NuestrosProductos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para manejar el modal
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
      <div className={styles.content}>
        <Productos onProductSelect={handleShow} />
        <Carrusel />
      </div>

      {/* Modal para más información */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct ? selectedProduct.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Descripción:</strong> {selectedProduct ? selectedProduct.description : ''}</p>
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
