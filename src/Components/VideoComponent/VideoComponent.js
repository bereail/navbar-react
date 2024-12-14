import React from 'react';
import videoSrc from '../../assets/Video/Video.mp4'; // Ajusta la ruta según tu archivo
import styles from './VideoComponent.module.css';


const VideoComponent = () => {
    return (
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
    );
};

export default VideoComponent;