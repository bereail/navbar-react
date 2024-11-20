import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import styles from './Contacto.module.css';
import './contacto.css'
import FormularioContacto from '../../Components/FormularioContacto/FormularioContacto';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className='section-contacto' id="contacto">
      <div className='container-contacto '>
        <h1 className='title-contacto'>Contáctanos</h1>
        <div className='datos-contacto'>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> administracion@ultracor.com.ar</p>
          <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div className='container-contacto buttons-contacto'>
        <button className="btn btn-contactar" onClick={handleModalToggle}>
          Quiero que me contacten
        </button>
        <button className="btn-contacto" onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}>
  Contáctenos
</button>

      </div>

      {isModalOpen && (<FormularioContacto handleModalToggle={handleModalToggle}/>)}

    </section>
  );
};

export default Contacto;
