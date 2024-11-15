import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './item.css'

const Item = ({ producto }) => {
  return (
    <div class="card-container" >
      <div class="card" >
        <div class="card-front">
          <div className='img-container'>
            <img src={producto.img} class="card-img-top" alt={producto.title} />
          </div>


          <h5 class="card-title">{producto.title}</h5>
          <p class="card-description">{producto.description}</p>
          <div className="button-container">
            <button className="button" onClick={() => alert('Solicitud de cotización enviada!')}>
              Solicitar Cotización
            </button>
          </div>
        </div>
        <div class="card-back">
          <ul className='item-features-container'> 
            <h5 class="card-title  card-title-back">{producto.title}</h5>
            {producto.features.map((feature, index) =>
              <li key={index} className='item-features'>
                <FontAwesomeIcon icon={feature.icon} className='item-feature-icon' />
                {feature.description} </li>
            )}
          </ul>
        </div>
      </div>
    </div>


  )
}

export default Item
