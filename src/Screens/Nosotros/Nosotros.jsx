import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './Nosotros.module.css';
import AccordionSection from './Acordion/AccordionSection';

function Nosotros() {
  return (
    <section id="Nosotros" className={styles.section}>
      <h2>Nosotros</h2>
      <div className="row">
        {/* Tarjeta 1: Quiénes somos */}
        <div className="col-md-6 mb-4">
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

        {/* Tarjeta 2: Información adicional */}
        <AccordionSection
          title="Misión y Visión" // Provide default title and items if missing props
          items={[
            "Ser líderes en soluciones sostenibles",
            "Reducir el impacto ambiental",
            "Proporcionar contenedores ecológicos",
            "Fomentar el reciclaje",
            // Add more items as needed
          ]}
        />
      </div>
    </section>
  );
}



export default Nosotros;