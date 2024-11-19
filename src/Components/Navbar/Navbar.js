import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';
import { Link as RouterLink } from 'react-router-dom'; // Para la navegación de rutas


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sostenibilidadSection = document.getElementById('Sostenibilidad');
      if (sostenibilidadSection) {
        const sectionTop = sostenibilidadSection.offsetTop; // Get the top position of the section
        const sectionHeight = sostenibilidadSection.offsetHeight; // Get the section's height

        // Check if the navbar is within the section's vertical bounds
        setIsGreen(offset >= sectionTop && offset <= (sectionTop + sectionHeight));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-sm fixed-top ${scrolled ? styles.solid : styles.transparent} ${
        isGreen ? styles.green : ''
      }`}
    >
      <div className="container-fluid">
        {/* Logo with transparent background */}
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
            {['Inicio', 'Nosotros', 'Nuestros Productos', 'Sostenibilidad', 'Comercializacion', 'Contacto'].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className={`${styles['nav-link']} nav-link`}
                  to={section}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;