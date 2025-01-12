import React, { useState, useEffect } from 'react';
import { getProtectedData } from '../services/auth';
import { setAuthToken } from '../services/api';
import { useNavigate } from 'react-router-dom';

import style from './Teste.module.css';
import Menu from '../component/Menu';
import CardPrincipal from '../component/cardPrincipal';
import Navbar from '../component/NavBar';


const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/'); // Se não houver token, redireciona para o login
      return;
    }

    setAuthToken(token);

    const fetchUserData = async () => {
      try {
        const data = await getProtectedData();
        setUserData(data.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <Navbar />
    <div className={style.container}>
    {/* Coluna Menor - Menu */}
    <div className={style.menu}>
      
      <Menu />
    </div>

    {/* Coluna Principal - Cards */}
    <div className={style.main}>
      <div className={style.header}>
        <p>Oi,</p><h3>{userData.first_name}, </h3> <p>Seja Bem vindo!</p>
       
      </div>
      <div className={style.title}>
          <p>My Course</p>
        </div>      
      
      <div className={style.cardGrid}>
        
        <div className={style.card1}> <CardPrincipal /></div>
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
  </>
  );
};

export default Dashboard;


{/* <div>
      <h2>Dashboard</h2>
      <h3>Informações do Usuário</h3>
      <img src={userData.avatar} alt="Avatar" style={{ width: 50, borderRadius: '50%' }} />
      <p><strong>Nome:</strong> {userData.first_name} {userData.last_name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div> */}