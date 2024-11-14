import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './Nosotros.module.css';
import AccordionSection from './Acordion/AccordionSection';
import logo from '../../assets/logo.jpg'; // Asegúrate de importar el logo correctamente

function Nosotros() {
  return (
    <section id="Nosotros" className={styles.section}>
      <div className="row">
        {/* Sección de Nosotros - Columna más grande */}
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

        {/* Columna de Misión y Visión */}
        <div className="col-md-4 mb-4">
          {/* Logo arriba de Misión y Visión */}
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
          </div>

          <div className="card">
            <div className="card-body">
              <AccordionSection
                title="Misión"  // Título de la sección de la misión
                items={[  // Lista de ítems que describen la misión
                  "Proveer soluciones extraordinarias en envases y embalajes, contribuyendo a reducir el impacto ecológico de las actividades de nuestros clientes.",
                  "Optimización del uso de mercancías mediante materiales de bajo costo y respetuosos con el medio ambiente.",
                  "Fomentar relaciones duraderas con nuestros clientes, basadas en un trato profesional y amable."
                ]}
              />

              <AccordionSection
                title="Visión"  // Título de la sección de la visión
                items={[  // Lista de ítems que describen la visión
                  "Fabricar productos de alta calidad, centrados en la innovación, eficiencia y el cuidado del medio ambiente.",
                  "Liderar el camino hacia un futuro sostenible y responsable en la industria de envases y embalajes.",
                  "Ser reconocidos por nuestra calidad, innovación y responsabilidad en el mercado."
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
