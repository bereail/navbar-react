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

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
           
            <Route
              path="/"
              element={
                <div>
                  <section id='Inicio'>
                    <Inicio />
                  </section>
                  <section id="NuestrosProductos">
                    <NuestrosProductos />
                  </section>
                  <section id="Sostenibilidad">
                    <Sostenibilidad />
                  </section>
                  <section id="Comercializacion">
                    <Comercializacion />
                  </section>
                  <section id="Contacto">
                    <Contacto />
                  </section>
                </div>
              }
            />

            {/* Página Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

