import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // O el archivo global de estilos
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);