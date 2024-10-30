import Inicio from "./Screens/Inicio";
import React from "react";
import { useState } from "react";
import NavBar2 from "./Components/NavBar2";
import Nosotros from "./Screens/Nosotros";
import Contacto from "./Screens/Contacto";
import NuestrosProductos from "./Screens/NuestrosProductos";


function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div>   
      <nav>
        <button onClick={() => handleSectionChange('inicio')}>Inicio</button>
        <button onClick={() => handleSectionChange('nuestrosProductos')}>Nuestros Productos</button>
        <button onClick={() => handleSectionChange('sostenibilidad')}>Sostenibilidad</button>
        <button onClick={() => handleSectionChange('comercializacion')}>Comercializacion</button>
        <button onClick={() => handleSectionChange('nosotros')}>Nosotros</button>
        <button onClick={() => handleSectionChange('contacto')}>Contacto</button>
      </nav>
      {activeSection === 'inicio' && <Inicio />}
      {activeSection === 'contacto' && <NuestrosProductos />}
      {activeSection === 'nosotros' && <Nosotros />}
      {activeSection === 'contacto' && <Contacto />}
    </div>
  );
}

export default App;

/*      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />*/
