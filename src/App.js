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

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> {/* Navbar siempre visible */}

      {/* Contenedor principal ajustado para expandirse */}
      <main style={{ flex: 1 }}>
        <Element name="Inicio">
          <Inicio />
        </Element>
        <Element name="NuestrosProductos">
          <NuestrosProductos />
        </Element>
        <Element name="Nosotros">
          <Nosotros />
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
       
        <Element name="Contacto">
          <Contacto />
        </Element>
      </main>

    </div>
  );
}

export default App;
