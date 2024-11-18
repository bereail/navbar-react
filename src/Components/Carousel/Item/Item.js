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
        </div>
        <div class="card-back">

          <h5 class="card-title card-title-back">{producto.title}</h5>

          <ul className='item-features-container'>

            {producto.features.map((feature, index) =>
              <li key={index} className='item-features'>
                <FontAwesomeIcon icon={feature.icon} className='item-feature-icon' />
                {feature.description} </li>
            )}
          </ul>
          <div className='button-container'>
          <button className="btn-cotizar" onClick={() => alert('Solicitud de cotización enviada!')}>Solicitar Cotización</button>
          </div>
          

        </div>
      </div>
    </div>


  )
}

export default Item
