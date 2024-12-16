import React from 'react';
import cajonEspecial1 from '../../assets/CajonesEspeciales/CajonesEspeciales1.png';
import cajonEspecial2 from '../../assets/CajonesEspeciales/CajonesEspeciales2.png';
import cajonEspecial3 from '../../assets/CajonesEspeciales/CajonesEspeciales3.png';
import cajonEspecial4 from '../../assets/CajonesEspeciales/CajonesEspeciales4.png';
import cajonEspecial5 from '../../assets/CajonesEspeciales/CajonesEspeciales5.png';
import Ultrabin200 from '../../assets/Ultra/Ultrabin200.png';
import Ultrabulk1300 from '../../assets/Ultra/Ultrabulk1300.png';
import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import Productos from '../../Components/Productos/Productos';
import './nuestrosProductos.css'
import VideoComponent from '../../Components/VideoComponent/VideoComponent';



const PRODUCTOS = [
  {
    id: 1,
    title: 'Ultrabin 200',
    description: 'Solución innovadora para almacenamiento',
    img: Ultrabin200,
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
    img: cajonEspecial1,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 3,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial2,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 4,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial3,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 5,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial4,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 6,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial5,
    features: [
      { icon: faLayerGroup, description: 'Características específicas para productos delicados' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
  },
  {
    id: 7,
    title: 'Ultrabuk 1300',
    description: 'Contenedor estándar de gran capacidad',
    img: Ultrabulk1300,
    features: [
      { icon: faLayerGroup, description: 'Construcción de doble capa' },
      { icon: faWeightHanging, description: 'Resiste hasta 1200 kg' },
      { icon: faBoxesStacked, description: 'Permite apilar hasta 3 unidades por altura' },
    ],
  }

];

const NuestrosProductos = () => {
  return (
    <section className='section-productos'>
      
      <div className='productos'>
        <h2 className='section-productos-title'>NUESTROS PRODUCTOS</h2>
        <Productos productos={PRODUCTOS} />
      </div>
      <div className='video'>
        <VideoComponent />
      </div>

    </section>
  );
};

export default NuestrosProductos;
