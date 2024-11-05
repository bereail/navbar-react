import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.jpg';
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
      <div className="container-fluid">
        <a className={`${styles['navbar-brand']}`} href="#Inicio">
          <img src={logo} alt="Logo" className={`${styles.logo}`}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="Inicio"
                smooth={true}
                duration={500}
              >
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="NuestrosProductos"
                smooth={true}
                duration={500}
              >
                NUESTROS PRODUCTOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="Sostenibilidad"
                smooth={true}
                duration={500}
              >
                SOSTENIBILIDAD
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="Comercializacion"
                smooth={true}
                duration={500}
              >
                COMERCIALIZACIÓN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="Nosotros"
                smooth={true}
                duration={500}
              >
                NOSOTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['nav-link']} nav-link`}
                to="Contacto"
                smooth={true}
                duration={500}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
