import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const getProtectedData = async () => {
  // Esta função simula o acesso a uma rota protegida com o token
  const response = await api.get('/users/9'); // Ou a rota desejada para pegar dados do usuário logado
  return response.data;
};