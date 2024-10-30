import React from "react";
import logo from "../assets/logo.jpg"

const NavBar2 = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ width: "120px", height: "70px" }} /> 
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="inicio">INICIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="nuestrosProductos">NUESTROS PRODUCTOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sostenibilidad">SOSTENIBILIDAD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="comercializacion">COMERCIALIZACIÓN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="nosotros">NOSTROS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contacto">CONTACTO</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar2;
