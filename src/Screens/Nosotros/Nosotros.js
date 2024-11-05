// src/screens/Nosotros.js
import React from 'react';
import styles from './Nosotros.module.css';

function Nosotros() {
  return (
    <section className={styles.section}>
      <h2>Nosotros</h2>
      <p>
        ULTRACOR SAS es una empresa especializada en la fabricación de envases especiales y en la creación de soluciones de packaging sostenible. Nuestros productos y servicios están diseñados para atender tanto al mercado local como al internacional, siempre con el objetivo de satisfacer las necesidades de un público diverso y exigente, y con un firme compromiso hacia la excelencia y la mejora continua.
      </p>
      <p>
        Nos distinguimos por ofrecer alta calidad, eficiencia, y precios competitivos, factores que nos posicionan como una opción preferente en el mercado. Proporcionamos soluciones de diseño y desarrollo de envases de cartón corrugado, adaptadas a las necesidades específicas de cada cliente y a los desafíos únicos de packaging que enfrenta su empresa.
      </p>
      
      <div className={styles.sectionContent}>
        <h3 className={styles.subheading}>Misión</h3>
        <p>
          Nuestra misión es proporcionar soluciones extraordinarias en envases y embalajes, contribuyendo a reducir el impacto ecológico de las actividades de nuestros clientes. Nos enfocamos en hacer más eficiente el uso de las mercancías, optimizando el almacenamiento y el transporte mediante el uso de materiales de bajo costo y respetuosos con el medio ambiente.
        </p>
        <p>
          Fomentamos relaciones a largo plazo con nuestros clientes, por lo que consideramos fundamental mantener un trato profesional y amable en cada interacción.
        </p>
      </div>
      
      <div className={styles.sectionContent}>
        <h3 className={styles.subheading}>Visión</h3>
        <p>
          Nuestra visión es fabricar productos excelentes, centrados en la innovación, la eficiencia y el cuidado del medio ambiente. Estamos comprometidos en liderar el camino hacia un futuro más sostenible y responsable en la industria de envases y embalajes.
        </p>
      </div>
      
      <div className={styles.sectionContent}>
        <h3 className={styles.subheading}>Futuro</h3>
        <p>
          En Ultracor, aspiramos a ser reconocidos en el mercado por nuestra calidad y responsabilidad. Nuestro objetivo es obtener la certificación ISO 9001:2015 y establecer al menos cinco productos estandarizados que tengan una buena rotación. Queremos construir un equipo de trabajo comprometido y orgulloso de formar parte de una empresa que se destaque en la industria.
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
