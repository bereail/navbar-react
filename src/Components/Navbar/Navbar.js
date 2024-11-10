import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.jpg'; // Make sure the logo file is transparent
import styles from './NavBar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sostenibilidadSection = document.getElementById('Sostenibilidad');
      if (sostenibilidadSection) {
        const sectionTop = sostenibilidadSection.offsetTop;
        const sectionBottom = sectionTop + sostenibilidadSection.offsetHeight;

        if (offset >= sectionTop && offset <= sectionBottom) {
          setIsGreen(true);
        } else {
          setIsGreen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg fixed-top ${scrolled ? styles.solid : styles.transparent} ${isGreen ? styles.green : ''}`}
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
            {['Inicio', 'Nuestros Productos', 'Nosotros', 'Sostenibilidad', 'Comercializacion', 'Ventajas', 'Contacto'].map((section) => (
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
