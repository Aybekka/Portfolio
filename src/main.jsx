// I import global styles here so they apply to the entire app from the very start
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

// StrictMode helps me catch potential bugs during development — it double-renders in dev only
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
