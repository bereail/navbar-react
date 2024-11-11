/*import React, { useState } from 'react';
import styles from './Cotizacion.module.css'; // Import the CSS module

// Componente Cotizacion
const Cotizacion = () => {
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos al backend para cotización
    console.log('Solicitud de cotización enviada:', formData);
    alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo.');
  };

  return (
    <div className={styles.cotizacion}> {}
      <h1>Solicitud de Cotización</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="product">Producto:</label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.submitButton}>Enviar Solicitud</button>
      </form>
    </div>
  );
};

export default Cotizacion;
*/