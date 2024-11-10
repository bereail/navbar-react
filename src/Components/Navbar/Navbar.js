import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.jpg';
import styles from './NavBar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);  // El fondo se vuelve sólido si el scroll es mayor a 50px
      } else {
        setScrolled(false); // El fondo es transparente al principio
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<nav
  className={`${styles.navbar} navbar navbar-expand-lg fixed-top ${scrolled ? styles.solid : styles.transparent}`}
>
  <div className="container-fluid">
    <a className={styles['navbar-brand']} href="#Inicio">
      <img src={logo} alt="Logo" className={styles.logo} />
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
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            className={`${styles['nav-link']} nav-link`}
            to="Inicio"
            smooth={true}
            duration={500}
            activeClass="active"
          >
            INICIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`${styles['nav-link']} nav-link`}
            to="Nosotros"
            smooth={true}
            duration={500}
            activeClass="active"
          >
            NOSOTROS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`${styles['nav-link']} nav-link`}
            to="NuestrosProductos"
            smooth={true}
            duration={500}
            activeClass="active"
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
            activeClass="active"
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
            activeClass="active"
          >
            COMERCIALIZACIÓN
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`${styles['nav-link']} nav-link`}
            to="Ventajas"
            smooth={true}
            duration={500}
            activeClass="active"
          >
            VENTAJAS
          </Link>
        </li>
      
        <li className="nav-item">
          <Link
            className={`${styles['nav-link']} nav-link`}
            to="Contacto"
            smooth={true}
            duration={500}
            activeClass="active"
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
