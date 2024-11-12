import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import cajoneEspecialesImg from '../../assets/cajoneEspecialesImg.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Slide = () => {
  return (
    <div className='slider-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]} // Se mantiene el uso de módulos
      >
        <SwiperSlide>
          <img src={cajoneEspecialesImg} alt="Cajón Especiales" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contenedorEstandarUltrabox1200} alt="Contenedor Estándar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contenedorOctogonalUltrabin1000} alt="Contenedor Octogonal" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={octobin2} alt="Octobin2" />
        </SwiperSlide>
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

export default Slide;
