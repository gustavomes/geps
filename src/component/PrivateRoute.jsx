import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redireciona para a página de login
  }

  return element; // Retorna o componente da rota protegida
};

export default PrivateRoute;
