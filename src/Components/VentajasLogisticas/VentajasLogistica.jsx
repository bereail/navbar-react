import React from 'react';
import './ventajasLogistica.css'

const VentajasLogistica = () => {
  return (
    <div className='container-ventajas-logistica'>
      <h1 className='title-ventajas-logistica'>VENTAJAS LÓGISTICA</h1>
      <div className="content-ventajas-logistica"> 
    
        <div className="ventajas-logistica-description">
          <div>
            <p>
              <strong className='ultrabin-title-color'>ULTRABIN 1000</strong> permite obtener un mayor rendimiento de los costos de transporte en comparación con el uso de tambores de 200 litros, permitiendo en el mismo espacio de carga enviar 200 litros más de producto por posición.
            </p>
            <p>
              Logrando en un equipo de 48 posiciones un total de 9600 litros más de espacio aprovechado con producto en cada uno de sus envíos.
            </p>
          </div>
          <div>
            <p>
              <strong className='octobin-title-color'>OCTOBIN</strong> también ofrece beneficios logísticos similares, optimizando el espacio de carga y reduciendo los costos operativos.
            </p>
          </div>
        </div>
      </div>


    </div>

  );
};

export default VentajasLogistica;


/*CODIGO ORIGINAL import React from 'react';
import Octobin from '../../assets/Octobin.png';
import Tambor from '../../assets/Tambor.png';
import './ventajasLogistica.css'

const VentajasLogistica = () => {
  return (
    <div className='container-ventajas-logistica'>
      <h1 className='title-ventajas-logistica'>VENTAJAS LÓGISTICA</h1>
      <div className="content-ventajas-logistica">
 
        <div className="ventajas-logistica-img">
          <div className="ventajas-logistica-image-wrapper">
            <img src={Octobin} alt="Octobin" className="ventajas-logistica-img" />
            <p className="ventajas-logistica-img-title">1000 litros sobre una superficie de 1 m²</p>
          </div>
          <div className="ventajas-logistica-image-wrapper">
            <img src={Tambor} alt="Tambor" className="ventajas-logistica-img" />
            <p className="ventajas-logistica-img-title">800 litros sobre una superficie de 1 m²</p>
          </div>
        </div>

    
        <div className="ventajas-logistica-description">
          <div>
            <p>
              <strong className='ultrabin-title-color'>ULTRABIN 1000</strong> permite obtener un mayor rendimiento de los costos de transporte en comparación con el uso de tambores de 200 litros, permitiendo en el mismo espacio de carga enviar 200 litros más de producto por posición.
            </p>
            <p>
              Logrando en un equipo de 48 posiciones un total de 9600 litros más de espacio aprovechado con producto en cada uno de sus envíos.
            </p>
          </div>
          <div>
            <p>
              <strong className='octobin-title-color'>OCTOBIN</strong> también ofrece beneficios logísticos similares, optimizando el espacio de carga y reduciendo los costos operativos.
            </p>
          </div>
        </div>
      </div>


    </div>

  );
};

export default VentajasLogistica;
*/