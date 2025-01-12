import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importando Router
import './index.css';
import App from './App.jsx'; // Importando o componente App

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
      <App />
      </Router>
  </StrictMode>,
); 