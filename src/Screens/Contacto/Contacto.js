import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contáctanos</h1>

        <div className={styles.contactInfo}>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> contacto@empresa.com</p>
          <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className="btn btn-primary" onClick={handleModalToggle}>
          Quiero que me contacten
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => window.location.href = '/cotizacion'}
        >
          Solicitar Cotización
        </button>
      </div>
      
      {/* Modal usando Bootstrap */}
      {isModalOpen && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="false" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">Formulario de Contacto</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalToggle}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="contactForm">
                  <label>Nombre:</label>
                  <input type="text" required className="form-control" />
                  <label>Apellido:</label>
                  <input type="text" required className="form-control" />
                  <label>Empresa:</label>
                  <input type="text" required className="form-control" />
                  <label>Whatsapp:</label>
                  <input type="text" required className="form-control" />
                  <label>Asunto:</label>
                  <input type="text" required className="form-control" />
                  <label>Consulta:</label>
                  <textarea required className="form-control"></textarea>
                  <button type="submit" className="btn btn-success mt-3">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacto;
