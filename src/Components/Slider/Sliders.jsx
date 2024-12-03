import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import './Slider.css'; // Definiremos los estilos de flip aquí
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Slider = ({ productos }) => {
  const [flippedSlide, setFlippedSlide] = useState(null); // Controla qué slide está volteado

  const handleFlip = (id) => {
    setFlippedSlide((prev) => (prev === id ? null : id)); // Voltea si no es el mismo slide o regresa al estado original
  };

  return (
    <div className='slider-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 1,
          stretch: -50,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id}>
            <div
              className={`flip-card ${flippedSlide === producto.id ? 'flipped' : ''}`}
              onClick={() => handleFlip(producto.id)}
            >
              <div className='flip-card-inner'>
                {/* Lado frontal */}
                <div className='flip-card-front'>
                  <img src={producto.img} alt={producto.title} />
                  <div className='product-info'>
                    <h4>{producto.title}</h4>
                    <h5>{producto.description}</h5>
                  </div>
                </div>
                {/* Lado trasero */}
                <div className='flip-card-back'>
                  <h5>Características</h5>
                  <ul>
                    {producto.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='slider-controller'>
        <div className='swiper-button-prev'>
          <ArrowLeft size={20} />
        </div>
        <div className='swiper-button-next'>
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
