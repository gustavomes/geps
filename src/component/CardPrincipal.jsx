import React from 'react';
import styles from './CardPrincipal.module.css';

const CardPrincipal = ({ backgroundClass, progressClass }) => {
  return (
    <div className={styles.container}>
      {/* Fundo do card */}
      <div className={`${styles.cardBackground} ${backgroundClass}`} />
      
      {/* Título e subtítulo */}
      <div className={styles.title}>Minha Progressão</div>
      <div className={styles.subtitle}>30 etapas</div>

      {/* Círculo de progresso */}
      <div className={styles.progressCircle}>
        <div className={styles.progressText}>50%</div>
        <div className={`${styles.progressBorder} ${progressClass}`} />
        <div className={styles.progressInnerCircle} />
      </div>

      {/* Logo */}
      <img 
        src="https://www.jewelryshoppingguide.com/wp-content/uploads/2019/05/what-is-the-fleur-de-lis.png" 
        alt="Logo" 
        className={styles.logo} 
      />
    </div>
  );
};

export default CardPrincipal;
