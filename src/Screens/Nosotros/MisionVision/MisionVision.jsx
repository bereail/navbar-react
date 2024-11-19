import React from 'react';
import useObserver from '../../../Hooks/useObserver';
import logo from '../../../assets/logo.png';
import styles from './MisionVision.module.css';

const MisionVision = () => {
    const [isMissionVisible, missionRef] = useObserver();
    const [isVisionVisible, visionRef] = useObserver();


  return (
    <section className="section">
    <div className="section-filosofia-container">
      <img src={logo} alt="Logo de la empresa" />
      <div className="content-filosofia-container">
        <div
          ref={missionRef}
          className={`content-filosofia ${isMissionVisible ? 'slide-left' : ''}`}
        >
          <h3 className={styles.title}>Misión</h3>
          <p className={styles.description}>
            Proveer soluciones extraordinarias en envases y embalajes, contribuyendo a reducir el impacto ecológico
            de las actividades de nuestros clientes. Optimización del uso de mercancías mediante materiales de bajo
            costo y respetuosos con el medio ambiente. Fomentar relaciones duraderas con nuestros clientes, basadas
            en un trato profesional y amable.
          </p>
        </div>

        <div
          ref={visionRef}
          className={`content-filosofia ${isVisionVisible ? 'slide-right' : ''}`}
        >
          <h3 className={styles.title}>Visión</h3>
          <p className={styles.description}>
            Ser líderes en el desarrollo de soluciones innovadoras en envases y embalajes, contribuyendo al
            crecimiento sostenible de nuestros clientes y promoviendo un entorno empresarial responsable con el medio
            ambiente.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default MisionVision;
