import React from "react";
import logo from "../assets/logo.jpg";
import styles from "../Components/NavBar3.module.css"; // Importa el CSS

const NavBar3 = ({ setCurrentScreen }) => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}> {/* Aplica el estilo del CSS */}
      <div className="container-fluid">
        <a className={`${styles['navbar-brand']}`} href="#Inicio"> {/* Usar estilos del CSS */}
          <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link active`} href="#Inicio" onClick={() => setCurrentScreen('Inicio')}>INICIO</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#NuestrosProductos" onClick={() => setCurrentScreen('NuestrosProductos')}>NUESTROS PRODUCTOS</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#Sostenibilidad" onClick={() => setCurrentScreen('Sostenibilidad')}>SOSTENIBILIDAD</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#Comercializacion" onClick={() => setCurrentScreen('Comercializacion')}>COMERCIALIZACIÓN</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#Nosotros" onClick={() => setCurrentScreen('Nosotros')}>NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#Contacto" onClick={() => setCurrentScreen('Contacto')}>CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar3;
