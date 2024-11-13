import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';
import './Slider.scss';

// Importación de los estilos de Swiper y el efecto "coverflow"
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Slider = () => {
  return (
    <div className='slider-container'>
      {/* Componente principal de Swiper */}
      <Swiper
        effect={'coverflow'} // Establece el efecto de transición a "coverflow"
        grabCursor={true} // Muestra el cursor de "manito" para indicar que es interactivo
        centeredSlides={true} // Centra los slides en el carrusel
        loop={true} // Habilita el bucle infinito para los slides
        slidesPerView={3} // Muestra 3 slides a la vez
        coverflowEffect={{
          rotate: 1, // Sin rotación
          stretch: -50, // Separación entre los slides
          depth: 250, // Profundidad del efecto 3D
          modifier: 3.5, // Intensidad del efecto
          slideShadows: false, // Desactiva las sombras en los slides
        }}
        navigation={{
          nextEl: '.swiper-button-next', // Selecciona el botón para avanzar
          prevEl: '.swiper-button-prev', // Selecciona el botón para retroceder
          clickable: true, // Hace los botones de navegación interactivos
        }}
        modules={[EffectCoverflow, Navigation]} // Activa los módulos de efecto y navegación
      >
        {/* Cada SwiperSlide representa un producto con imagen, nombre y descripción */}
        <SwiperSlide>
          <img src={cajoneEspecialesImg} alt="Cajónes Especiales" />
          <div className="product-info">
            <h4>Cajónes Especiales</h4>
            <p>Contenedor especial para productos delicados.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={contenedorEstandarUltrabox1200} alt="Contenedor Estándar" />
          <div className="product-info">
            <h4>Contenedor Estándar</h4>
            <p>Contenedor de gran capacidad y durabilidad.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={contenedorOctogonalUltrabin1000} alt="Contenedor Octogonal" />
          <div className="product-info">
            <h4>Contenedor Octogonal</h4>
            <p>Diseño octogonal para un uso óptimo del espacio.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={octobin2} alt="Octobin2" />
          <div className="product-info">
            <h4>Octobin2</h4>
            <p>Solución innovadora para almacenamiento.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Controles de navegación (botones de siguiente y anterior) */}
      <div className='slider-controller'>
        <div className='swiper-button-prev'>
          <ArrowLeft size={20} /> {/* Icono de flecha hacia la izquierda */}
        </div>
        <div className='swiper-button-next'>
          <ArrowRight size={20} /> {/* Icono de flecha hacia la derecha */}
        </div>
      </div>
    </div>
  );
};

export default Slider;