import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Inicio from './Screens/Inicio/Inicio';
import Nosotros from './Screens/Nosotros/Nosotros';
import Contacto from './Screens/Contacto/Contacto';
import Sostenibilidad from './Screens/Sostenibilidad/Sostenibilidad';
import NuestrosProductos from './Screens/NuestrosProductos/NuestrosProductos'
import Comercializacion from './Screens/Comercializacion/Comercializacion';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ventajas from './Screens/Ventajas/Ventajas';


function App() {
  return (
    <div>
      <Navbar /> {/* Navbar siempre visible */}
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
      <Element name="Ventajas">
        <Ventajas />
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
