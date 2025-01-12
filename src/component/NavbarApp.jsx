import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import style from './Navbar.module.css'

const NavbarApp = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/'); // Redireciona para a página inicial
    };
  
    const isAuthenticated = !!localStorage.getItem('token');
  
    if (location.pathname === '/login') {
      return null;
    }
  
    return (
      <nav className={style.container}>
        <ul>
          <li className={style.item}>
            <Link to="/"><h2>GEPS</h2></Link>
          </li>
          {isAuthenticated && (
            <>
              <li className={style.item}><Link to="/dashboard">Dashboard</Link></li>
              <li className={style.item}><Link to="/profile">Perfil</Link></li>
              <li className={style.item}><Link to="/settings">Settings</Link></li>
              <li className={style.item}><Link to="/teste">Teste</Link></li>
              <li className={style.item}><Link onClick={handleLogout}>Logout</Link></li>
            </>
          )}
        </ul>
      </nav>
    );
  };  

export default NavbarApp;
