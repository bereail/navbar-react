import React, { useState } from 'react';
import Navbar3 from './Navbar3';
import Footer from './Footer';
import Inicio from '../Screens/Inicio';
import Nosotros from '../Screens/Nosotros';
import Contacto from '../Screens/Contacto';
import Sostenibilidad from '../Screens/Sostenibilidad';
import NuestrosProductos from '../Screens/NuestrosProductos';
import Comercializacion from '../Screens/Comercializacion';

function Home() {
  const [currentScreen, setCurrentScreen] = useState('Inicio');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Inicio':
        return <Inicio />;
      case 'NuestrosProductos':
        return <NuestrosProductos />;
      case 'Sostenibilidad':
        return <Sostenibilidad />;
      case 'Comercializacion':
        return <Comercializacion />;
      case 'Nosotros':
        return <Nosotros />;
      case 'Contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div>
      <Navbar3 setCurrentScreen={setCurrentScreen} style={{ zIndex: 3, position: 'relative' }} /> {/* Añade zIndex */}
      <main>
        {renderScreen()}
      </main>
    </div>
  );
}

export default Home;
