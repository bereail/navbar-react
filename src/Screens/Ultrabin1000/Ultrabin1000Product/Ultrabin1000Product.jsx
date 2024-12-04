import React from "react";
import styles from "./Ultrabin1000Product.module.css";
import Ultrabin1000 from "../../../assets/octobin2.png"; // Importación directa de la imagen

const Ultrabin1000Product = () => {
  return (
    <div className={styles.productContainer}>
      {/* Usar la imagen importada directamente */}
      <h1>OCTOBIN 1000</h1>
      <img src={Ultrabin1000} alt="Imagen del Ultrabin 1000" className={styles.productImage} />
    </div>
  );
};

export default Ultrabin1000Product;
