import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import arrows

function AccordionSection({ title = "Default Title", items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionSection}>
      <button onClick={toggle} className={styles.accordionHeader}>
        {title}
        <span className={styles.icon}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && items.length > 0 && ( // Check if items exist before mapping
        <ul className={styles.accordionContent}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccordionSection;