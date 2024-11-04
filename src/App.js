import React from 'react';
import Navbar3 from './Components/Navbar3';
import Footer from './Components/Footer';
import Inicio from './Screens/Inicio';
import Nosotros from './Screens/Nosotros';
import Contacto from './Screens/Contacto';
import Sostenibilidad from './Screens/Sostenibilidad';
import NuestrosProductos from './Screens/NuestrosProductos';
import Comercializacion from './Screens/Comercializacion';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar3 /> {/* Navbar siempre visible */}
      <Element name="Inicio">
        <Inicio />
      </Element>
      <Element name="NuestrosProductos">
        <NuestrosProductos />
      </Element>
      <Element name="Sostenibilidad">
        <Sostenibilidad />
      </Element>
      <Element name="Comercializacion">
        <Comercializacion />
      </Element>
      <Element name="Nosotros">
        <Nosotros />
      </Element>
      <Element name="Contacto">
        <Contacto />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
