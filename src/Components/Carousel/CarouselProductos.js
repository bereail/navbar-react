import React from 'react'
import Item from './Item/Item'
import './carouselProductos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const CarouselProductos = ({ productos }) => {

    return (
    /*     <div className='container'>
        {productos.map((producto) => (
            
                <Item key={producto.id} producto={producto} />
        
        ))}</div> */
        <div className="slider-container">
            <Swiper
            effect={'slide'} 
            centeredSlides={true}  
            loop={true} 
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            slidesPerView={3}  
            spaceBetween={20} 
            modules={[Navigation]}  
            breakpoints={{
                1200: {
                    slidesPerView: 3, 
                },
                768: {
                    slidesPerView: 2,  
                },
                480: {
                    slidesPerView: 1, 
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
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <div className="swiper-button-next">
                <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>

        </div>
    );
};

export default CarouselProductos;

