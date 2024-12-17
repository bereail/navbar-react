import React from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/Video/Video.mp4'; // Ajusta la ruta según tu archivo
import styles from './VideoComponent.module.css';

const VideoComponent = () => {
    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoSection}>
                <h3 className={styles.workingTitle}>
                    Descubre cómo trabajamos
                </h3>
                <div className={styles.card}>
                    <video 
                        className={styles.video}
                        src={videoSrc} 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                    />
                </div>
            </div>

            {/* Botón "Conoce Más" debajo del video */}
            <div className={styles.buttonVideoContainer}>
                <Link to="/nosotros">
                    <button className={styles.btnConoceMas}>Conoce Más sobre Nosotros</button>
                </Link>
            </div>
        </div>
    );
};

export default VideoComponent;
