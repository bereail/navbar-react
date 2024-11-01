import React, { useState } from "react";
import NavBar2 from "./Components/NavBar2";
import Inicio from "./Screens/Inicio";
import Nosotros from "./Screens/Nosotros";
import Contacto from "./Screens/Contacto";
import NuestrosProductos from "./Screens/NuestrosProductos";
import Sostenibilidad from "./Screens/Sostenibilidad";
import Comercializacion from "./Screens/Comercializacion";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <NuestrosProductos />
      <Sostenibilidad />
      <Comercializacion />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
/*function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div>   
      <NavBar2 onSectionChange={handleSectionChange} />
      {activeSection === 'inicio' && <Inicio />}
      {activeSection === 'nuestrosProductos' && <NuestrosProductos />}
      {activeSection === 'sostenibilidad' && <Sostenibilidad />}
      {activeSection === 'comercializacion' && <Comercializacion />}
      {activeSection === 'nosotros' && <Nosotros />}
      {activeSection === 'contacto' && <Contacto />}
    </div>
  );
}*/