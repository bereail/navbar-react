import React from 'react';
import cajonEspecial from '../../assets/cajonEspecial.png';
import contenedorEstandarUltrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import contenedorOctogonalUltrabin1000 from '../../assets/contenedorOctogonalUltrabin1000.png';
import octobin2 from '../../assets/octobin2.png';

import styles from '../NuestrosProductos/NuestrosProductos.module.css';
import Ventajas from '../Ventajas/Ventajas';

import Slider from '../../Components/Slider/Slider';
import CarouselProductos from '../../Components/Carousel/CarouselProductos';

import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import EjemplosUso from './EjemplosUso/EjemplosUso';
import VentajasLogisticas from './VentajasLogisticas/VentajasLogisticas';

const PRODUCTOS = [
  {
    id: 1,
    title: 'Octabin',
    description: 'Solución innovadora para almacenamiento',
    img: octobin2,
    features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de múltiples capas de cartón corrugado de doble onda'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 1200 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Puede ser apilado hasta 3 en altura permitiendo un máximo aprovechamiento del espacio de carga'
    }]
  },
  {
    id: 2,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial,
    features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de múltiples capas de cartón corrugado de doble onda'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 1200 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Puede ser apilado hasta 3 en altura permitiendo un máximo aprovechamiento del espacio de carga'
    }]
  },
  {
    id: 3,
    title: 'Contenedor Estandar Ultrabox 1200',
    description: 'Contenedor de gran capacidad y durabilidad',
    img: contenedorEstandarUltrabox1200,
    features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de múltiples capas de cartón corrugado de doble onda'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 1200 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Puede ser apilado hasta 3 en altura permitiendo un máximo aprovechamiento del espacio de carga'
    }]
  },
  {
    id: 4,
    title: 'Contenedor Octogonal Ultrabin 1000',
    description: 'Diseño octogonal para un uso óptimo del espacio',
    img: contenedorOctogonalUltrabin1000,
     features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de múltiples capas de cartón corrugado de doble onda'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 1200 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Puede ser apilado hasta 3 en altura permitiendo un máximo aprovechamiento del espacio de carga'
    }]
  }
]

const NuestrosProductos = () => {
  return (
    <section className={styles.section}>
      <h2>Nuestros Productos</h2>
      <CarouselProductos productos={PRODUCTOS} />

      <div className={styles.row}>
        <div className={styles.column}>
          <EjemplosUso />
        </div>
        <div className={styles.column}>
          <VentajasLogisticas />
        </div>
      </div>
    </section>

  );
};

export default NuestrosProductos;
