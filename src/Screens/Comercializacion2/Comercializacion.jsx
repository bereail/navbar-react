import styles from "./Comercializacion.module.css";

const Comercializacion = () => {
  return (
    <section className={styles.sectionComercializacion}>
  <h2 className={styles.title}>Comercialización</h2>
      <div className={styles.cardComercializacion}>
      
        <p className={styles.description}>
          ULTRABIN 1000 se ofrece en diversas modalidades según las necesidades
          del cliente y el producto a contener. El conjunto completo incluye:
        </p>
        <ul className={styles.opcionesList}>
          <li className={styles.option}>• Cerco</li>
          <li className={styles.option}>• Tapa</li>
          <li className={styles.option}>• Fondo</li>
          <li className={styles.option}>
            • Pallet (opcional, disponible en madera tratada)
          </li>
          <li className={styles.option}>• Bolsa con válvulas de carga y descarga</li>
          <ul className={styles.subList}>
            <li className={styles.subOption}>
              • Registro Nacional de Establecimientos (RNE) para envases en contacto con alimentos
            </li>
            <li className={styles.subOption}>
              • Apto para contacto con alimentos según la resolución GMC 32/10 – 15/10
            </li>
            <li className={styles.subOption}>
              • Autorización de uso en establecimientos habilitados por SENASA (Certificado E-2910)
            </li>
          </ul>
          <li className={styles.option}>• Protector exterior (opcional)</li>
          <li className={styles.option}>
            • Juego de esquineros (opcional, necesario para estiba)
          </li>
        </ul>
        <p className={styles.descriptionItalic}>
          Este sistema modular permite una personalización acorde a las
          necesidades específicas de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default Comercializacion;
