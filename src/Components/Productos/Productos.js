import React, { useState, useEffect } from 'react';
import Item from './Item/Item';
import './productos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card/Card';

const Productos = ({ productos = [] }) => {
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [producto, setProducto] = useState({});

    // Maneja la apertura y cierre del modal
    const handleModalToggle = (selectedProducto = {}) => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            setProducto(selectedProducto); 
        }
    };

    // Mueve los productos a la izquierda
    const moveLeft = (e) => {
        e.preventDefault();
        setVisibleProducts((prevState) => {
            const newProducts = [...prevState];
            const firstIndex = productos.indexOf(prevState[0]);
            newProducts.unshift(productos[(firstIndex - 1 + productos.length) % productos.length]);
            newProducts.pop();
            return newProducts;
        });
    };

    // Mueve los productos a la derecha
    const moveRight = (e) => {
        e.preventDefault();
        setVisibleProducts((prevState) => {
            const newProducts = [...prevState];
            const lastIndex = productos.indexOf(prevState[prevState.length - 1]);
            newProducts.push(productos[(lastIndex + 1) % productos.length]);
            newProducts.shift();
            return newProducts;
        });
    };

    // Detecta el tamaño de la pantalla y ajusta la cantidad visible de productos
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Ajusta los productos visibles según el tamaño de pantalla
    useEffect(() => {
        if (productos.length > 0) {
            if (isSmallScreen) {
                setVisibleProducts(productos.slice(0, 1));
            } else {
                setVisibleProducts(productos.slice(0, 3));
            }
        }
    }, [productos, isSmallScreen]);

    // Renderiza el componente
    return (
        <div className='productos-container'>
            {productos.length > 0 ? (
                <>
                    <div onClick={moveLeft} className='arrow-left'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>

                    {visibleProducts.map((producto) => (
                        <Item producto={producto} key={producto.id} handleModalToggle={handleModalToggle} />
                    ))}

                    <div onClick={moveRight} className='arrow-right'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>

                    {isModalOpen && <Card handleModalToggle={handleModalToggle} producto={producto} />}
                </>
            ) : (
                <p className='no-productos'>No hay productos disponibles en este momento.</p>
            )}
        </div>
    );
};

export default Productos;
