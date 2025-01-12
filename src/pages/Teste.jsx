import React from 'react';
import style from './Teste.module.css';
import Menu from '../component/Menu';

const Teste = () => {
  return (
    <div className={style.container}>
      {/* Coluna Menor - Menu */}
      <div className={style.menu}>
        <Menu />
      </div>

      {/* Coluna Principal - Cards */}
      <div className={style.main}>
        <div className={style.header}>
          <h1>Oi Gustavo, welcome back!</h1>
          <p>My Courses</p>
        </div>
        <div className={style.cardGrid}>
          <div className={style.card1}>French</div>
          <div className={style.card2}>Italian</div>
          <div className={style.card3}>Portuguese</div>
          <div className={style.card4}>German</div>
        </div>
      </div>

      {/* Coluna Lateral - Cards Menores e Gráfico */}
      
      <div className={style.sidebar}>
      <div className={style.header}>
          <h1>Estatísticas</h1>
        </div>
        <div className={style.statistics}>
          <div className={style.statCard}>Courses Completed</div>
          <div className={style.statCard}>Total Points Gained</div>
          <div className={style.statCard}>Courses In Progress</div>
          <div className={style.statCard}>Tasks Finished</div>
        </div>
        <div className={style.chart}>
          {/* Substitua pelo componente de gráfico, se necessário */}
          <h2>Activity</h2>
          <p>Graph Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Teste;