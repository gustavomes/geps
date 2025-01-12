
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth'; // Função para fazer login
import { setAuthToken } from '../services/api'; // Função para setar o token


import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Credenciais inválidas!');
    }
  };

  return (
<div class="containerLogin">
  <div class="forms-container">
    <div class="form-control signin-form">
      <form  onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <input  type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <button>Entrar</button>
      </form>
   {/*    <span>or signin with</span>
      <div class="socials">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-google-plus-g"></i>
        <i class="fab fa-linkedin-in"></i>
      </div>  */}
    </div>
  </div>
  <div class="intros-container">
    <div class="intro-control signin-intro">
      <div class="intro-control__inner">
        <h2>Seja Bem Vindo!</h2>
        <p>
         Bem vindo ao GEPS
        </p>
        <button id="signup-btn"> Não tem conta? Resgistre-se.</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login