import React from 'react';
import cajonEspecial from '../../assets/cajonEspecial.png';
import Ultrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import Ultrabin500 from '../../assets/35.png';
import Octobin1000 from '../../assets/octobin2.png';
import producto from '../../assets/product.png';
import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import EjemplosUso from '../../Components/EjemplosUso/EjemplosUso';
import Productos from '../../Components/Productos/Productos';
import Ultrabin1000 from '../Ultrabin1000/Ultrabin1000';
import './nuestrosProductos.css'
import VentajasLogistica from '../../Components/VentajasLogisticas/VentajasLogistica';


const PRODUCTOS = [
  {
    id: 1,
    title: 'Ultrabin 1000',
    description: 'Solución innovadora para almacenamiento',
    img: Octobin1000,
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
    {
    id: 5,
    title: 'TITULO',
    description: 'Descripcion',
    img: producto,
    features: [
      { icon: faLayerGroup, description: 'Construcción resistente' },
      { icon: faWeightHanging, description: 'Soporta hasta 500 kg' },
      { icon: faBoxesStacked, description: 'Mejor aprovechamiento del espacio en el transporte' },
    ],
  },
];

const NuestrosProductos = () => {
  return (
    <section className='section-productos'>
      <h2 className='section-productos-title'>NUESTROS PRODUCTOS</h2>
      <Productos productos={PRODUCTOS} />
      <Ultrabin1000 />
    </section>
  );
};

export default NuestrosProductos;
