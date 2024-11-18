import React from 'react';
//
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './Nosotros.module.css';
import AccordionSection from '../../Components/Acordion/AccordionSection';
import logo from '../../assets/logo.jpg';
//
import './nosotros.css'
import useObserver from '../../Hooks/useObserver';


function Nosotros() {
  const [isCardVisible, cardRef] = useObserver();
  const [isMissionVisible, missionRef] = useObserver();
  const [isVisionVisible, visionRef] = useObserver();

  return (
    <div className="container-nosotros">
      <h1 className="title-nosotros">Nosotros</h1>

      <section className="section descripcion-empresa">
        <div
          ref={cardRef}
          className={`card-descripcion-empresa ${isCardVisible ? 'animate' : ''}`}
        >
          <h3>¿Quiénes Somos?</h3>
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
        <button className='btn-contacto'>Contáctenos</button>
      </section>

      <section className="section">
        <div className="section-filosofia-container">
            <img src={logo} alt="Imagen de la empresa" />
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

/*     <section id="Nosotros" className={styles.section}>
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quiénes Somos</h5>
              <p className="card-text">
                ULTRACOR SAS es una Empresa dedicada a la fabricación de
                Envases especiales y a dar soluciones de packaging sostenible.
              </p>
              <p className="card-text">
                Nuestros productos y servicios están dirigidos tanto al mercado
                local como al internacional, buscando satisfacer las demandas
                de un público diverso y exigente.
              </p>
              <Button variant="success">Contáctenos</Button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
         
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
          </div>

          <div className="card">
            <div className="card-body">
              <AccordionSection
                title="Misión" 
                items={[  
                  "Proveer soluciones extraordinarias en envases y embalajes, contribuyendo a reducir el impacto ecológico de las actividades de nuestros clientes.",
                  "Optimización del uso de mercancías mediante materiales de bajo costo y respetuosos con el medio ambiente.",
                  "Fomentar relaciones duraderas con nuestros clientes, basadas en un trato profesional y amable."
                ]}
              />

              <AccordionSection
                title="Visión"
                items={[  
                  "Fabricar productos de alta calidad, centrados en la innovación, eficiencia y el cuidado del medio ambiente.",
                  "Liderar el camino hacia un futuro sostenible y responsable en la industria de envases y embalajes.",
                  "Ser reconocidos por nuestra calidad, innovación y responsabilidad en el mercado."
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section> */