import React, { useState } from 'react';
import Item from '../Carousel/Item/Item'
import './productos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FormularioContacto from '../FormularioContacto/FormularioContacto';

const Productos = ({ productos }) => {

    const [visibleProducts, setVisibleProducts] = useState(productos.slice(0, 3)); // Empieza con los primeros 3 productos
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => setIsModalOpen(!isModalOpen);

    const moveLeft = (e) => {
        e.preventDefault();
        setVisibleProducts(prevState => {
            const newProducts = [...prevState];
            newProducts.unshift(productos[(productos.indexOf(prevState[0]) - 1 + productos.length) % productos.length]);
            newProducts.pop();
            return newProducts;
        });
    };

    const moveRight = (e) => {
        e.preventDefault();
        setVisibleProducts(prevState => {
            const newProducts = [...prevState];
            newProducts.push(productos[(productos.indexOf(prevState[2]) + 1) % productos.length]);
            newProducts.shift();
            return newProducts;
        });
    };

    return (
        <div className='productos-container'>
            <div onClick={moveLeft} className='arrow-left'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>


            {visibleProducts.map((producto) => (
                <Item producto={producto} key={producto.id} handleModalToggle={handleModalToggle}/>
            ))}

            <div onClick={moveRight} className='arrow-right' >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

            {isModalOpen && (<FormularioContacto handleModalToggle={handleModalToggle}/>)}

        </div>
    );
}

export default Productos;

