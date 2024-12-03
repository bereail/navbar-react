import React, { useState, useEffect } from 'react';
import EjemplosUso from '../../Components/EjemplosUso/EjemplosUso';
import VentajasLogistica from '../../Components/VentajasLogisticas/VentajasLogistica';
import styles from '../Ultrabin1000/Ultrabin1000.module.css';
import Ultrabin1000Product from './Ultrabin1000Product/Ultrabin1000Product';


const Ultrabin1000 = () => {
    const [activeSection, setActiveSection] = useState("ultrabin");

    const renderContent = () => {
        switch (activeSection) {
            case "ultrabin":
                return <Ultrabin1000Product />;
            case "ejemplo":
                return <EjemplosUso />;
            case "ventajas":
                return <VentajasLogistica />;
            default:
                return null;
        }
    };

    return (
        <div className={`row ${styles.ultrabinContainer}`}>
            {/* Sidebar */}
            <div className="col-12 col-md-4">
                <div className={`navbar ${styles.navbar}`}>
                    <nav className="nav flex-column">
                        <a
                            className={`nav-link ${activeSection === "ultrabin" ? "active" : ""}`}
                            href="#ultrabin"
                            onClick={() => setActiveSection("ultrabin")}
                        >
                            Ultrabin 1000
                        </a>
                        <a
                            className={`nav-link ${activeSection === "ejemplo" ? "active" : ""}`}
                            href="#ejemplo"
                            onClick={() => setActiveSection("ejemplo")}
                        >
                            Ejemplo de Uso
                        </a>
                        <a
                            className={`nav-link ${activeSection === "ventajas" ? "active" : ""}`}
                            href="#ventajas"
                            onClick={() => setActiveSection("ventajas")}
                        >
                            Ventajas Logísticas
                        </a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-12 col-md-8">
                <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example3"
                    data-bs-smooth-scroll="true"
                    className={`${styles.content} ${styles.slider}`}
                    tabIndex="0"
                >
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Ultrabin1000;