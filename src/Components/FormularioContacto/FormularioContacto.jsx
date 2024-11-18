import React from 'react'
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
