import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './item.css'
import Carousel from '../../Carousel/Carousel';

const Item = ({ producto, handleModalToggle }) => {

  return (
    <div className="card-container" >
      <div className="card" >
        <div className="card-front">
          <div className='img-container'>
            {producto.images && producto.images.length !== 0 ?
              <Carousel images={producto.images} />
              :
              <img src={producto.img} className="card-img-top" alt={producto.title} />
            }

          </div>
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-description">{producto.description}</p>
        </div>
        <div className="card-back">

          <h5 className="card-title card-title-back">{producto.title}</h5>

          <ul className='item-features-container'>

            {producto.features.map((feature, index) =>
              <li key={index} className='item-features'>
                <FontAwesomeIcon icon={feature.icon} className='item-feature-icon' />
                {feature.description}
              </li>
            )}
          </ul>
          <div className='button-container'>
            <button className="btn-informacion" onClick={() => handleModalToggle(producto)}>Más información</button>
          </div>


        </div>
      </div>
    </div>


  )
}

export default Item
