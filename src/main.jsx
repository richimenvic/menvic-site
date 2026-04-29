import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  {
    title: 'Diseño arquitectónico',
    description:
      'Conceptualizamos espacios residenciales y comerciales con criterios funcionales, formales y urbanos adaptados al contexto local.',
  },
  {
    title: 'Anteproyectos y proyectos',
    description:
      'Desarrollamos propuestas desde la etapa preliminar hasta el proyecto arquitectónico integral, con definición clara de alcances y tiempos.',
  },
  {
    title: 'Documentación técnica',
    description:
      'Elaboramos planos, detalles, memorias y documentación técnica precisa para licencias, presupuesto y ejecución de obra.',
  },
  {
    title: 'Gestión y coordinación de proyectos',
    description:
      'Coordinamos equipos y especialidades para mantener consistencia técnica, trazabilidad de decisiones y cumplimiento de objetivos del cliente.',
  },
  {
    title: 'Supervisión y apoyo constructivo',
    description:
      'Brindamos acompañamiento técnico durante la construcción para resolver interferencias, validar avances y asegurar calidad arquitectónica.',
  },
  {
    title: 'Coordinación BIM',
    description:
      'Incorporamos herramientas BIM cuando el proyecto lo requiere para mejorar la coordinación técnica y reducir contingencias en obra.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="inicio">
        <p className="eyebrow">Menvic Arquitectura · Santa Cruz, Bolivia</p>
        <h1>Arquitectura, técnica y gestión de proyectos en Santa Cruz, Bolivia.</h1>
        <p className="lead">
          Desarrollamos proyectos arquitectónicos con enfoque funcional, técnico y contemporáneo,
          acompañando cada etapa desde la idea inicial hasta la documentación y coordinación del
          proyecto.
        </p>
        <div className="actions">
          <a href="#contacto" className="button primary">Contactar</a>
          <a href="#servicios" className="button secondary">Servicios</a>
        </div>
      </header>

      <section className="section" id="nosotros">
        <h2>Sobre nosotros</h2>
        <p>
          Menvic Arquitectura es un estudio de arquitectura con base en Santa Cruz, Bolivia. Trabajamos
          en diseño arquitectónico, desarrollo técnico y documentación de proyectos, integrando una
          coordinación profesional que permite ejecutar cada etapa con claridad y criterio.
        </p>
        <p>
          Nuestro enfoque combina diseño contemporáneo, precisión técnica y gestión de proyectos para
          transformar ideas en soluciones construibles, eficientes y coherentes con los objetivos de
          cada cliente.
        </p>
      </section>

      <section className="section" id="servicios">
        <h2>Servicios</h2>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacto">
        <h2>Contacto</h2>
        <div className="contact-card">
          <p><strong>Menvic Arquitectura</strong></p>
          <p>Condominio Génesis 33, 7mo Anillo, Carretera al Norte, Santa Cruz, Bolivia</p>
          <p>Tel. / WhatsApp: 75019441</p>
          <p>menvic.com</p>
          <a className="button primary" href="https://wa.me/59175019441" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <p>© Menvic Arquitectura · Santa Cruz, Bolivia · menvic.com · Tel. / WhatsApp: 75019441</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
