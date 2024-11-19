import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png';
import NosotrosEmpresa from '../../assets/NosotrosEmpresa.png';
import './nosotros.css';
import useObserver from '../../Hooks/useObserver';

function Nosotros() {
  const [isCardVisible, cardRef] = useObserver();
  const [isMissionVisible, missionRef] = useObserver();
  const [isVisionVisible, visionRef] = useObserver();
  const [isTitleVisible, setIsTitleVisible] = React.useState(false);

  React.useEffect(() => {
    // Hacer que el título se vuelva visible después de un tiempo
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 500); // El título aparece después de 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-nosotros">
      <h3
        className={`title-nosotros ${isTitleVisible ? 'animate' : ''}`}
      >
        ¿Quiénes Somos?
      </h3>

      <section
        className={`section descripcion-empresa ${isTitleVisible ? 'fadeIn' : ''}`}
      >
        <div
          ref={cardRef}
          className={`card-descripcion-empresa ${isCardVisible ? 'animate' : ''}`}
        >
          <p>
            <strong>ULTRACORR SAS</strong> es una empresa dedicada a la fabricación de envases especiales y
            soluciones de packaging sostenible, diseñadas para satisfacer las necesidades del mercado local e
            internacional.
          </p>
          <p>
            Nos distinguimos por nuestra calidad, eficiencia y precios competitivos, lo que nos posiciona como una opción
            preferente en la industria. Ofrecemos envases de cartón corrugado personalizados, adaptados a los desafíos
            específicos de cada cliente.
          </p>
          <p>
            Aunque somos una empresa joven, contamos con más de 20 años de experiencia en el sector, combinando innovación
            y conocimiento para brindar soluciones de excelencia, comprometidas con la sostenibilidad y la mejora continua.
          </p>
        </div>
        <button className="btn-contacto">Contáctenos</button>
      </section>

      <section className="section">
        <div className="section-filosofia-container">
          <img src={logo} alt="Logo de la empresa" />
          <div className="content-filosofia-container">
            <div
              ref={missionRef}
              className={`content-filosofia ${isMissionVisible ? 'slide-left' : ''}`}
            >
              <h3 className="title">Misión</h3>
              <p className="description">
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
              <h3 className="title">Visión</h3>
              <p className="description">
                Ser líderes en el desarrollo de soluciones innovadoras en envases y embalajes, contribuyendo al
                crecimiento sostenible de nuestros clientes y promoviendo un entorno empresarial responsable con el medio
                ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
