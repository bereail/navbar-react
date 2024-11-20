import React from 'react';
import cajonEspecial from '../../assets/cajonEspecial.png';
import Ultrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import Ultrabin500 from '../../assets/35.png';
import Ultrabin1000 from '../../assets/octobin2.png';
import styles from './NuestrosProductos.module.css';
import Slider from 'react-slick';  // Import Slider from react-slick
import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import EjemplosUso from '../../Components/EjemplosUso/EjemplosUso';
import VentajasLogisticas from './VentajasLogisticas/VentajasLogisticas';
import Productos from '../../Components/Productos/Productos';
import './nuestrosProductos.css'
const PRODUCTOS = [
  {
    id: 1,
    title: 'Ultrabin 1000',
    description: 'Solución innovadora para almacenamiento',
    img: Ultrabin1000,
    features: [
      { icon: faLayerGroup, description: 'Construido a partir de dos capas de cartón corrugado reforzado' },
      { icon: faWeightHanging, description: 'Resiste cargas pesadas de hasta 1000 kg' },
      { icon: faBoxesStacked, description: 'Su forma octagonal permite enviar 200 litros más por posición' },
    ],
  },
  {
    id: 2,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 3,
    title: 'Ultrabox 1200',
    description: 'Contenedor estándar de gran capacidad',
    img: Ultrabox1200,
    features: [
      { icon: faLayerGroup, description: 'Construcción de doble capa' },
      { icon: faWeightHanging, description: 'Resiste hasta 1200 kg' },
      { icon: faBoxesStacked, description: 'Permite apilar hasta 3 unidades por altura' },
    ],
  },
  {
    id: 4,
    title: 'Ultrabin 500',
    description: 'Diseño octogonal para optimizar espacio',
    img: Ultrabin500,
    features: [
      { icon: faLayerGroup, description: 'Construcción resistente' },
      { icon: faWeightHanging, description: 'Soporta hasta 500 kg' },
      { icon: faBoxesStacked, description: 'Mejor aprovechamiento del espacio en el transporte' },
    ],
  },
];

const settings = {
  infinite: true,  // Infinite loop
  speed: 500,  // Slide speed
  slidesToShow: 3,  // Show 3 products at a time
  slidesToScroll: 1,  // Scroll one product at a time
  responsive: [
    {
      breakpoint: 1024,  // For screens smaller than 1024px, show 2 slides
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,  // For screens smaller than 600px, show 1 slide
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const NuestrosProductos = () => {
  return (
    <section className='section-productos'>
      <h2 className='section-productos-title'>Nuestros Productos</h2>
      {/* <CarouselProductos productos={PRODUCTOS} /> */}
      <Productos productos={PRODUCTOS} />
      <EjemplosUso />
      <VentajasLogisticas />
    </section>
  );
};

export default NuestrosProductos;
