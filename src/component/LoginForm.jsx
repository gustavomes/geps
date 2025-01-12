import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth'; // Função para fazer login
import { setAuthToken } from '../services/api'; // Função para setar o token

const LoginForm = () => {
  const [email, setEmail] = useState([]); // Email de exemplo
  const [password, setPassword] = useState([]); // Senha de exemplo


  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password); // Login com as credenciais
      console.log('Login bem-sucedido:', data);
      localStorage.setItem('token', data.token); // Armazena o token
      setAuthToken(data.token); // Configura o token na API
      navigate('/dashboard'); // Redireciona para o Dashboard
      console.log(data.token)
    } catch (err) {
      console.error('Erro no login:', err.response?.data || err.message);
      setError('Credenciais inválidas!');
    }

    
  };[] ;

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
    </div>
  );
};

export default LoginForm;