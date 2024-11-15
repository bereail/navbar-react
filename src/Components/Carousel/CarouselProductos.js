import React from 'react'
import Item from './Item/Item'
import './carouselProductos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import 'swiper/css';


const CarouselProductos = ({ productos }) => {

    return (
    /*     <div className='container'>
        {productos.map((producto) => (
            
                <Item key={producto.id} producto={producto} />
        
        ))}</div> */
        <div className="slider-container">
            <Swiper
            effect={'slide'} // Usamos 'slide' para el efecto normal de carrusel
            centeredSlides={true}  // Centra los slides
            loop={true}  // Habilita el loop para que se repita
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            slidesPerView={3}  // Muestra 3 tarjetas a la vez por defecto
            spaceBetween={20}  // Espacio entre las tarjetas
            modules={[Navigation]}  // Solo necesitas el módulo de navegación
            breakpoints={{
                1200: {
                    slidesPerView: 3,  // En pantallas grandes, 3 items
                },
                768: {
                    slidesPerView: 2,  // En pantallas medianas, 2 items
                },
                480: {
                    slidesPerView: 1,  // En pantallas pequeñas, 1 item
                }
            }}
        >
                {productos.map((producto) => (
                    <SwiperSlide key={producto.id}>
                        <Item producto={producto} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-controller">
                <div className="swiper-button-prev">
                    <ArrowLeft size={20} />
                </div>
                <div className="swiper-button-next">
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
    );
};

export default CarouselProductos;

