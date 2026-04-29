import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="site-shell">
      <section className="hero">
        <p className="eyebrow">Menvic</p>
        <h1>Arquitectura, desarrollo técnico y gestión de proyectos.</h1>
        <p className="lead">
          Sitio web en preparación. Estamos adaptando esta plataforma como base independiente para Menvic.
        </p>
        <div className="actions">
          <a href="mailto:contacto@menvic.com" className="button primary">Contactar</a>
          <a href="https://menvic.com" className="button secondary">menvic.com</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
