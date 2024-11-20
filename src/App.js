// MainPage.js
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inicio from './Screens/Inicio/Inicio';
import Nosotros from './Screens/Nosotros/Nosotros';
import Contacto from './Screens/Contacto/Contacto';
import Sostenibilidad from './Screens/Sostenibilidad/Sostenibilidad';
import NuestrosProductos from './Screens/NuestrosProductos/NuestrosProductos';
import Comercializacion from './Screens/Comercializacion/Comercializacion';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Element name="Inicio" id="Inicio">
          <Inicio />
        </Element>
        <Element name="Nuestros Productos" id="NuestrosProductos">
          <NuestrosProductos />
        </Element>
        <Element name="Sostenibilidad" id="Sostenibilidad">
          <Sostenibilidad />
        </Element>
        <Element name="Comercializacion" id="Comercializacion">
          <Comercializacion />
        </Element>
        <Element name="Contacto" id="contacto">
          <Contacto />
        </Element>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/Nosotros"
            element={
              <>
                <Navbar />
                <Nosotros />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;