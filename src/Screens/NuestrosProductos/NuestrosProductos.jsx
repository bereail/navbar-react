import React from 'react';
import { Link } from 'react-router-dom';
import cajonEspecial1 from '../../assets/CajonesEspeciales/CajonesEspeciales1.png';
import cajonEspecial2 from '../../assets/CajonesEspeciales/CajonesEspeciales2.png';
import cajonEspecial3 from '../../assets/CajonesEspeciales/CajonesEspeciales3.png';
import cajonEspecial4 from '../../assets/CajonesEspeciales/CajonesEspeciales4.png';
import cajonEspecial5 from '../../assets/CajonesEspeciales/CajonesEspeciales5.png';
import Ultrabin200 from '../../assets/Ultra/Ultrabin200.png';
import Ultrabin1000 from '../../assets/Ultra/Ultrabin1000.png';
import Ultrabulk1300 from '../../assets/Ultra/Ultrabulk1300.png';
import { faLayerGroup, faWeightHanging, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import Productos from '../../Components/Productos/Productos';
import './nuestrosProductos.css'
import VideoComponent from '../../Components/VideoComponent/VideoComponent';



const PRODUCTOS = [
  {
    id: 1,
    title: 'ULTRABIN 200',
    description: 'Contenedor de capacidad estándar, ideal para menor peso y volumen',
    img: Ultrabin200,
    features: [
      { icon: faLayerGroup, description: 'Construcción sin costuras, hasta 8 capas de corrugado' },
      { icon: faWeightHanging, description: 'Soporta hasta 800 kg' },
      { icon: faBoxesStacked, description: 'Apilable hasta 2 unidades de altura' },
    ],
    ventajas: `El ULTRABIN 200 está fabricado con una manga de corrugado de 6 a 8 capas continuas, asegurando un empaque 
    resistente y sin costuras. Su diseño sin juntas ni remaches proporciona un interior liso, aumentando la resistencia 
    al apilamiento. Hecho con fibra 100% renovable, es una opción más ligera y sostenible para empaques al granel de líquidos.`,
    logistica: `Perfecto para líquidos no peligrosos, el ULTRABIN 200 es resistente, fácil de manejar, ahorra espacio y es 
    desechable. Facilita el transporte y almacenamiento de líquidos y sólidos de menor volumen y peso, de manera económica y eficiente.`,
  },
  {
    id: 2,
    title: 'CAJONES ESPECIALES',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial1,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
  },
  
  {
    id: 3,
    title: 'CAJONES ESPECIALES',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial2,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón de 2 capas, lo que les otorga una gran resistencia y durabilidad. Son perfectos para el transporte de productos delicados, pesados y en envíos de exportación, ofreciendo una solución segura y eficaz para empresas que necesitan calidad en sus empaques.`,
    logistica: `Estos cajones especiales ofrecen una excelente opción para el transporte de productos delicados. Su capacidad de apilamiento y resistencia a las cargas moderadas hace que sean una opción práctica y económica para envíos internacionales, optimizando tanto el espacio como la seguridad de los productos durante el transporte.`,
  },
  
  {
    id: 4,
    title: 'CAJONES ESPECIALES',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial3,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
    ventajas: `El cartón de 2 capas de los Cajones Especiales ofrece una alta resistencia, lo que garantiza la seguridad de los productos durante su transporte. Son especialmente útiles para el transporte de mercancías pesadas o delicadas y para exportación, proporcionando un empaque eficiente y confiable.`,
    logistica: `El diseño apilable y resistente de estos cajones facilita su manejo en el transporte y optimiza el uso del espacio en contenedores. Ideal para exportación y transporte de productos delicados, garantizando que los envíos lleguen en perfectas condiciones a su destino final.`,
  },
  
  {
    id: 5,
    title: 'CAJONES ESPECIALES',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial4,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón de 2 capas, lo que asegura resistencia y protección para productos delicados. Son ideales para el transporte de mercancías pesadas y para exportación, ofreciendo una solución eficiente y de alta calidad para el embalaje.`,
    logistica: `Gracias a su estructura robusta y apilable, estos cajones facilitan el transporte y almacenamiento. Son perfectos para envíos internacionales, asegurando que los productos lleguen de forma segura y optimizando el uso del espacio en los contenedores.`,
  },
  
  {
    id: 6,
    title: 'CAJONES ESPECIALES',
    description: 'Contenedor especial para productos delicados',
    img: cajonEspecial5,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
    ],
    ventajas: `Los Cajones Especiales están hechos de cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y proporcionar una excelente protección para productos delicados. Son ideales para exportación y transporte de mercancías pesadas, brindando una solución confiable para su embalaje.`,
    logistica: `Diseñados para facilitar el transporte y almacenamiento, estos cajones apilables son perfectos para exportación y para el envío de productos delicados. Su resistencia y facilidad de manejo aseguran que los productos lleguen de forma segura, ahorrando espacio y costos en el proceso logístico.`,
  },  
  {
    id: 7,
    title: 'ULTRABULK 1300',
    description: 'Contenedor estándar de gran capacidad',
    img: Ultrabulk1300,
    features: [
      { icon: faLayerGroup, description: 'Construcción sin costuras, hasta 10 capas de corrugado' },
      { icon: faWeightHanging, description: 'Soporta hasta 1200 kg' },
      { icon: faBoxesStacked, description: 'Apilable hasta 3 unidades de altura' },
    ],
    ventajas: `El ULTRABULK 1300 está fabricado con una manga de corrugado de 6 a 10 capas continuas, lo que garantiza 
    un empaque resistente y sin costuras. Su diseño sin juntas ni remaches ofrece un interior liso y mejora la resistencia 
    al apilamiento. Hecho con fibra 100% renovable, es una opción sostenible para empaques al granel de líquidos.`,
    logistica: `Ideal para líquidos no peligrosos, el ULTRABULK 1300 es resistente, fácil de usar, ahorra espacio y es 
    desechable, lo que facilita el transporte y almacenamiento tanto de líquidos como sólidos de manera económica y eficiente.`,
  },
  {
    id: 8,
    title: 'ULTRABIN 1000',
    description: 'Contenedor estándar de gran capacidad',
    img: Ultrabin1000,
    features: [
      { icon: faLayerGroup, description: 'Construcción sin costuras, hasta 10 capas de corrugado' },
      { icon: faWeightHanging, description: 'Soporta hasta 1200 kg' },
      { icon: faBoxesStacked, description: 'Apilable hasta 3 unidades de altura' },
    ],
    ventajas: `El ULTRABIN 1000 está fabricado con una manga de corrugado de 6 a 10 capas continuas, lo que garantiza 
      un empaque resistente y sin costuras. Su diseño sin juntas ni remaches ofrece un interior liso y mejora la resistencia 
      al apilamiento. Hecho con fibra 100% renovable, es una opción sostenible para empaques al granel de líquidos.`,
    logistica: `Ideal para líquidos no peligrosos, el ULTRABULK 1300 es resistente, fácil de usar, ahorra espacio y es 
      desechable, lo que facilita el transporte y almacenamiento tanto de líquidos como sólidos de manera económica y eficiente.`,
  }
  
];

const NuestrosProductos = () => {
  return (
    <section className='section-productos'>
      
      <div className='productos'>
        <h2 className='section-productos-title'>Nuestros Productos</h2>
        <Productos productos={PRODUCTOS} />
      </div>

        {/* Botón "Conoce Más" */}
        <div className='button-container'>
        <Link to="/nosotros">
          <button className='btn-conoce-mas'>Conoce Más sobre Nosotros</button>
        </Link>
      </div>

      <div className='video'>
        <VideoComponent />
      </div>

    </section>
  );
};

export default NuestrosProductos;
