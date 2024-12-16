import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faClose, faPlus, faPlusCircle, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const Card = ({ handleModalToggle, producto }) => {
  return (
    <div className='card-info-background'>
      <div className="card-info" >
        
        <div className='card-info-btn'>
          <FontAwesomeIcon icon={faClose} className='close' onClick={handleModalToggle} />
        </div>

        <h2 className='card-info-title'>{producto.title}</h2>
        <div className='card-info-subtitle-container'>
           <FontAwesomeIcon icon={faCircleUp} className='card-info-icon' />
        <strong className='card-info-subtitle'>Ventajas </strong>
        </div>
       
        <p>{producto.ventajas}</p>
        <div className='card-info-subtitle-container'>
        <FontAwesomeIcon icon={faTruckFast} className='card-info-icon' />
        <strong className='card-info-subtitle'>Logística </strong>
        </div>
        <p>{producto.logistica}</p>

      </div>
    </div>
  )
}

export default Card
