import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inicio from './Screens/Inicio/Inicio';
import Nosotros from './Screens/Nosotros/Nosotros';
import Contacto from './Screens/Contacto/Contacto';
import Sostenibilidad from './Screens/Sostenibilidad/Sostenibilidad';
import NuestrosProductos from './Screens/NuestrosProductos/NuestrosProductos';
import Comercializacion from './Screens/Comercializacion/Comercializacion';
import Ventajas from './Screens/Ventajas/Ventajas';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider/Slider';
function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Router>
      <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} /> 
          </Routes>
      <main style={{ flex: 1 }}>
        <Element name="Inicio">
          <Inicio />
        </Element>
        <Element name="Nosotros">
          <Nosotros />
        </Element>
        <Element name="Nuestros Productos">
          <NuestrosProductos />
        </Element>
        <Element name="Sostenibilidad">
          <Sostenibilidad />
        </Element>
        <Element name="Comercializacion">
          <Comercializacion />
        </Element>
        <Element name="Contacto">
          <Contacto />
        </Element>
      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;