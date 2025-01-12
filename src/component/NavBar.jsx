import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import style from './Navbar.module.css'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação
  const location = useLocation(); // Para obter o caminho atual
  const navigate = useNavigate();
  
  useEffect(() => {
    // Verificação do token no localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Atualiza o estado com base no token
  }, [location]); // Adiciona 'location' como dependência para atualizar o estado quando a rota mudar

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token de autenticação
    setIsAuthenticated(false); // Atualiza o estado de autenticação
    navigate('/'); // Redireciona para a página de login
  };

  // Verifica se estamos na página de login para não renderizar a Navbar
  if (location.pathname === '/login') {
    return null; // Não exibe a Navbar na página de login
  }

  return (
   
    <nav className={style.container}>
      
      <ul>
        <li className={style.item}>
          <Link to="/"><h2>GEPS</h2></Link>
        </li>
        <li className={style.item}>
          <Link to="/dashboard">Dashboard</Link>
        </li >
        <li className={style.item}>
          <Link to="/profile">Perfil</Link>
        </li>
        <li className={style.item}>
          <Link to="/settings">Setings</Link>
        </li>
       
        {isAuthenticated && (  // Exibe o botão de logout apenas se o usuário estiver autenticado
          <li className={style.item}>
          {isAuthenticated && (
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
          )}
        </li>
        )}
        
  
      </ul>
    </nav>

  );
};

export default Navbar;
