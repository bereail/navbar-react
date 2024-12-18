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
import { faLayerGroup, faWeightHanging, faBoxesStacked, faLightbulb } from '@fortawesome/free-solid-svg-icons';
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
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `El ULTRABIN 200 está fabricado con una manga de corrugado de 6 a 8 capas continuas, asegurando un empaque 
      resistente y sin costuras. Su diseño sin juntas ni remaches proporciona un interior liso, aumentando la resistencia 
      al apilamiento. Hecho con fibra 100% renovable, es una opción más ligera y sostenible para empaques al granel de líquidos.`,
    logistica: `Perfecto para líquidos no peligrosos, el ULTRABIN 200 es resistente, fácil de manejar, ahorra espacio y es 
      desechable. Facilita el transporte y almacenamiento de líquidos y sólidos de menor volumen y peso, de manera económica y eficiente.`,
  },  

  {
    id: 2,
    title: 'ULTRABULK 1300',
    description: 'Contenedor estándar de gran capacidad',
    img: Ultrabulk1300,
    features: [
      { icon: faLayerGroup, description: 'Construcción sin costuras, hasta 10 capas de corrugado' },
      { icon: faWeightHanging, description: 'Soporta hasta 1200 kg' },
      { icon: faBoxesStacked, description: 'Apilable hasta 3 unidades de altura' },
    ],
    ventajas: `El ULTRABULK 1300 está fabricado con una manga de corrugado de 6 a 10 capas continuas que crea un empaque 
      sin costura. La construcción del ULTRABULK 1300 no tiene juntas, remaches ni costuras, solo un interior liso y sin costuras. 
      La formación de las esquinas produce una extraordinaria resistencia al apilamiento. Hecho con fibra 100% renovable, 
      ofrece una opción sostenible para empaques al granel de líquidos.`,
    logistica: `Los contenedores ULTRABULK 1300 son ideales para transportar y almacenar líquidos no peligrosos. Son resistentes, 
      fáciles de usar, ahorran espacio y son desechables, lo que facilita el envío y almacenamiento de líquidos y sólidos de manera 
      simple y económica. Su diseño permite una nueva perspectiva en el manejo de productos al granel, tanto líquidos como sólidos.`,
  },  
  {
    id: 3,
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
    logistica: `El ULTRABIN 1000 permite obtener un mayor rendimiento de los costos de transporte en comparación con el uso 
      de tambores de 200 litros, ya que en el mismo espacio de carga permite enviar 200 litros más de producto por posición. 
      En un equipo de 48 posiciones, se puede aprovechar un total de 9600 litros más de espacio con producto en cada uno de los envíos.`
  },
  {
    id: 4,
    title: 'CAJONES ESPECIALES',
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial1,
    images: [{ id: 1, img: cajonEspecial1 }, { id: 2, img: cajonEspecial2 }, { id: 3, img: cajonEspecial3 }, { id: 4, img: cajonEspecial4 }, { id: 5, img: cajonEspecial5 }],
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
  },
]

/* const PRODUCTOS = [
  {
    id: 1,
    title: 'ULTRABIN 200',
    description: 'Contenedor de capacidad estándar, ideal para menor peso y volumen',
    img: Ultrabin200,
    features: [
      { icon: faLayerGroup, description: 'Construcción sin costuras, hasta 8 capas de corrugado' },
      { icon: faWeightHanging, description: 'Soporta hasta 800 kg' },
      { icon: faBoxesStacked, description: 'Apilable hasta 2 unidades de altura' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
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
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial1,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
  },
  
  {
    id: 3,
    title: 'CAJONES ESPECIALES',
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial2,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
  },  
  {
    id: 4,
    title: 'CAJONES ESPECIALES',
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial3,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
   },
  {
    id: 5,
    title: 'CAJONES ESPECIALES',
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial4,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
   }, 
  {
    id: 6,
    title: 'CAJONES ESPECIALES',
    description: 'Ofrecemos soluciones de alta calidad en envases de cartón corrugado, diseñados para los desafíos del packaging de su Empresa.',
    img: cajonEspecial5,
    features: [
      { icon: faLayerGroup, description: 'Fabricado en cartón de 2 capas resistente' },
      { icon: faWeightHanging, description: 'Resiste cargas moderadas, ideal para exportación' },
      { icon: faBoxesStacked, description: 'Apilable para facilitar el transporte' },
      { icon: faLightbulb, description: 'Soluciones individuales para desafíos en el packaging de su Empresa' },
    ],
    ventajas: `Los Cajones Especiales están fabricados con cartón resistente de 2 capas, lo que les permite soportar cargas moderadas y ser adecuados para el transporte de productos delicados. Su construcción robusta los hace ideales para el envío de productos pesados y exportación, ofreciendo una solución confiable y de alta calidad.`,
    logistica: `Estos cajones son ideales para el almacenamiento y transporte de productos delicados y pesados. Su diseño apilable facilita el manejo y optimiza el espacio durante el transporte, asegurando que los productos lleguen de manera segura y económica, tanto en rutas locales como internacionales.`,
  }
  ,  
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
    ventajas: `El ULTRABULK 1300 está fabricado con una manga de corrugado de 6 a 10 capas continuas que crea un empaque 
      sin costura. La construcción del ULTRABULK 1300 no tiene juntas, remaches ni costuras, solo un interior liso y sin costuras. 
      La formación de las esquinas produce una extraordinaria resistencia al apilamiento. Hecho con fibra 100% renovable, 
      ofrece una opción sostenible para empaques al granel de líquidos.`,
    logistica: `Los contenedores ULTRABULK 1300 son ideales para transportar y almacenar líquidos no peligrosos. Son resistentes, 
      fáciles de usar, ahorran espacio y son desechables, lo que facilita el envío y almacenamiento de líquidos y sólidos de manera 
      simple y económica. Su diseño permite una nueva perspectiva en el manejo de productos al granel, tanto líquidos como sólidos.`,
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
    logistica: `El ULTRABIN 1000 permite obtener un mayor rendimiento de los costos de transporte en comparación con el uso 
      de tambores de 200 litros, ya que en el mismo espacio de carga permite enviar 200 litros más de producto por posición. 
      En un equipo de 48 posiciones, se puede aprovechar un total de 9600 litros más de espacio con producto en cada uno de los envíos.`
  }
  
]; */

const NuestrosProductos = () => {
  return (
    <section className='section-productos'>
      
      <div className='productos'>
        <h2 className='section-productos-title'>Nuestros Productos</h2>
        <Productos productos={PRODUCTOS} />
      </div>



        {/* Contenedor del video */}
        <div className='video'>
          <VideoComponent />
        </div>
        
    </section>
  );
};
export default NuestrosProductos;