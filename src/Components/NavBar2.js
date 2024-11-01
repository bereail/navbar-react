// src/Components/NavBar2.js
import React from "react";
import logo from "../assets/logo.jpg";

const NavBar2 = ({ setCurrentScreen }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#Inicio" onClick={(e) => { e.preventDefault(); setCurrentScreen('Inicio'); }} className="navbar-brand">
          <img src={logo} alt="Logo" style={{ width: "120px", height: "70px" }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('Inicio')} className="nav-link active">INICIO</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('NuestrosProductos')} className="nav-link">NUESTROS PRODUCTOS</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('Sostenibilidad')} className="nav-link">SOSTENIBILIDAD</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('Comercializacion')} className="nav-link">COMERCIALIZACIÓN</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('Nosotros')} className="nav-link">NOSOTROS</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setCurrentScreen('Contacto')} className="nav-link">CONTACTO</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
