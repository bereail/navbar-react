import React from 'react';
import styles from './Productos.module.css'; 
import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';

const Productos = ({ onProductSelect }) => {
  const productos = [
    {
      id: 1,
      imgSrc: cajoneEspecialesImg,
      title: 'Cajone Especiales',
      description: 'Contenedor diseñado para necesidades especiales.',
    },
    {
      id: 2,
      imgSrc: contenedorEstandarUltrabox1200,
      title: 'Contenedor Estándar Ultrabox A1200',
      description: 'Contenedor de gran capacidad para almacenamiento de residuos.',
    },
    {
      id: 3,
      imgSrc: contenedorOctogonalUltrabin1000,
      title: 'Contenedor Octogonal Ultrabin 1000',
      description: 'Contenedor octogonal de 1000L para reciclaje eficiente.',
    },
  ];

  return (
    <div className={styles.productosContainer}>
      <div className={`row g-4 ${styles.productsRow}`}>
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className={`card h-100 ${styles.card}`} onClick={() => onProductSelect(producto)}>
              <img src={producto.imgSrc} className="card-img-top h-100 w-100" alt={producto.title} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Última actualización hace 3 mins</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
