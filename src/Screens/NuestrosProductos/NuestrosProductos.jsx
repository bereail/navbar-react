import React from 'react';
import cajonEspecial from '../../assets/cajonEspecial.png';
import Ultrabox1200 from '../../assets/contenedorEstandarUltraboxA1200.png';
import Ultrabin500 from '../../assets/35.png';
import Ultrabin1000 from '../../assets/octobin2.png';
import styles from '../NuestrosProductos/NuestrosProductos.module.css';
import CarouselProductos from '../../Components/Carousel/CarouselProductos';
import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import EjemplosUso from '../../Components/EjemplosUso/EjemplosUso';
import VentajasLogisticas from '../../Components/VentajasLogisticas/VentajasLogisticas';


const PRODUCTOS = [
  {
    id: 1,
    title: 'Ultrabin 1000',
    description: 'Solución innovadora para almacenamiento',
    img: Ultrabin1000,
    features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de dos capas de cartón corrugado reforzado'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 1000 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Su forma octagonal permite enviar 200 litros más por posición en comparación con tambores de 200 litros'
    }]
  },
  {
    id: 2,
    title: 'Cajones Especiales',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial,
    features: [{
      icon: faLayerGroup,
      description: 'Caracteristica'
    },
    {
      icon: faWeightHanging,
      description: 'Caracteristica'
    },
    {
      icon: faBoxesStacked,
      description: 'Caracteristica'
    }]
  },
  {
    id: 3,
    title: 'Ultrabox 1200',
    description: 'Contenedor estandar de gran capacidad y durabilidad',
    img: Ultrabox1200,
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
    title: 'Ultrabin 500',
    description: 'Diseño octogonal para un uso óptimo del espacio',
    img: Ultrabin500,
    features: [{
      icon: faLayerGroup,
      description: 'Construido a partir de dos capas de cartón corrugado reforzado'
    },
    {
      icon: faWeightHanging,
      description: 'Resiste cargas pesadas de hasta 500 kg'
    },
    {
      icon: faBoxesStacked,
      description: 'Su forma octogonal optimiza el espacio de transporte en comparacion con un diseño cilíndrico'
    }]
  }
]

const NuestrosProductos = () => {
  return (
    <section className={styles.section}>
      <h2>Nuestros Productos</h2>
      <CarouselProductos productos={PRODUCTOS} />

      <div className={styles.column}>
        <EjemplosUso />
        {/* <VentajasLogisticas /> */}
      </div>
    </section>

  );
};

export default NuestrosProductos;
