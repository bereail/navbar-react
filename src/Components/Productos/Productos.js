import React from 'react';
import styles from './Productos.module.css'; 
import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png'


const Productos = () => {
    return (
        <div className={styles.productosContainer}>
         
            <div className={`row g-4 ${styles.productsRow}`}>
                {/* Tarjeta 1 */}
                <div className="col-md-4">
                    <div className={`card h-100 ${styles.card}`}>
                        <img src={cajoneEspecialesImg} className="card-img-top h-100 w-100" alt="Cajone Especiales" />
                        <div className="card-body">
                            <h5 className="card-title">Cajone Especiales</h5>
                            <p className="card-text">Descripción breve del producto.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Última actualización hace 3 mins</small>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="col-md-4">
                    <div className={`card h-100 ${styles.card}`}>
                        <img src={contenedorEstandarUltrabox1200} className="card-img-top h-100 w-100" alt="Contenedor Estándar Ultrabox A1200" />
                        <div className="card-body">
                            <h5 className="card-title">Contenedor Estándar Ultrabox A1200</h5>
                            <p className="card-text">Descripción breve del producto.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Última actualización hace 5 mins</small>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="col-md-4">
                    <div className={`card h-100 ${styles.card}`}>
                        <img src={contenedorOctogonalUltrabin1000} className="card-img-top h-100 w-100" alt="Contenedor Octogonal Ultrabin 1000" />
                        <div className="card-body">
                            <h5 className="card-title">Contenedor Octogonal Ultrabin 1000</h5>
                            <p className="card-text">Descripción breve del producto.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Última actualización hace 10 mins
                                
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;