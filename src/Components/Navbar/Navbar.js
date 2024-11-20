import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sostenibilidadSection = document.getElementById('Sostenibilidad');
      if (sostenibilidadSection) {
        const sectionTop = sostenibilidadSection.offsetTop;
        const sectionHeight = sostenibilidadSection.offsetHeight;

        setIsGreen(offset >= sectionTop && offset <= sectionTop + sectionHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMainPage = location.pathname === '/';

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-sm fixed-top ${scrolled ? styles.solid : styles.transparent} ${
        isGreen ? styles.green : ''
      }`}
    >
      <div className="container-fluid">
        <a className={styles['navbar-brand']} href="/">
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
            {/* Primero: Inicio */}
            <li className="nav-item">
              {isMainPage ? (
                <Link
                  className={`${styles['nav-link']} nav-link`}
                  to="Inicio"
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  INICIO
                </Link>
              ) : (
                <RouterLink
                  className={`${styles['nav-link']} nav-link`}
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  INICIO
                </RouterLink>
              )}
            </li>

            {/* Segundo: Nosotros */}
            <li className="nav-item">
              <RouterLink className={`${styles['nav-link']} nav-link`} to="/Nosotros">
                NOSOTROS
              </RouterLink>
            </li>

            {/* Tercero en adelante: Otras secciones */}
            {['Nuestros Productos', 'Sostenibilidad', 'Comercializacion', 'Contacto'].map((section) => (
              <li className="nav-item" key={section}>
                {isMainPage ? (
                  <Link
                    className={`${styles['nav-link']} nav-link`}
                    to={section}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                  >
                    {section.toUpperCase()}
                  </Link>
                ) : (
                  <RouterLink
                    className={`${styles['nav-link']} nav-link`}
                    to={`/#${section}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {section.toUpperCase()}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
