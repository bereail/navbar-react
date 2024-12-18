import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './formularioContacto.css';

const FormularioContacto = ({ handleModalToggle }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pk4qfqx', 'template_dls7phe', form.current, 'kxyvlF5YpE5OwJa5D')
      .then(
        () => {
          setStatusMessage('Mensaje enviado correctamente.');
        },
        (error) => {
          console.error('Error:', error.text);
          setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
        }
      );
  };

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="contactModalLabel"
      aria-hidden="false"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">Formulario de Contacto</h5>
            <span className="close" onClick={handleModalToggle}>
              &#x2716;
            </span>
          </div>
          <div className="modal-body">
            <form ref={form} className="form" onSubmit={sendEmail}>
              <label>Nombre:</label>
              <input type="text" name="user_name" className="form-control" required />
              <label>Email:</label>
              <input type="email" name="user_email" className="form-control" required />
              <label>Mensaje:</label>
              <textarea name="message" className="form-control" required></textarea>
              <button type="submit" className="btn-enviar">Enviar</button>
            </form>
            {statusMessage && (
              <div className={`status-message ${statusMessage.includes('correctamente') ? 'success' : 'error'}`}>
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;

/*import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons'
import './formularioContacto.css'

const FormularioContacto = ({handleModalToggle}) => {
  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="false" style={{ display: 'block' }}>
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="contactModalLabel">Formulario de Contacto</h5>
          <FontAwesomeIcon icon={faClose} className='close' onClick={handleModalToggle}/>
        </div>
        <div className="modal-body">
          <form className="form">
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
            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormularioContacto
*/