import React, { useState, useEffect } from 'react';
import { getProtectedData } from '../services/auth';
import { setAuthToken } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/NavBar';

const Profile = () => {
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
        setError('Erro ao carregar os dados do perfil.');
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
    <div>
      <h2>Perfil</h2>
      <h3>{userData.first_name} {userData.last_name}</h3>
      <p>Email: {userData.email}</p>
    </div>
    </>
  );
};

export default Profile;
