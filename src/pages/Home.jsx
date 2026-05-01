import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Menvic Arquitectura</div>
            <h1 className="home-hero-title">Diseño, gestión y construcción de proyectos.</h1>
            <p className="lead">Desarrollamos proyectos de arquitectura, documentación técnica, coordinación y apoyo en obra.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
              <Link className="cta-link cta-link--ghost" to="/proyectos">Ver trabajos</Link>
            </div>
          </div>
          <figure className="hero-image hero-image-photo">
            <img className="media-img" src="/img/projects/prodimsa-lateral-hero.webp" alt="Vista exterior de proyecto desarrollado por Menvic Arquitectura" loading="eager" />
          </figure>
        </div>
      </section>

      <section className="section section-featured" id="proyectos">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker home-kicker">Proyectos destacados</div>
            <div>
              <h2>Trabajos recientes</h2>
              <p className="section-copy">Cada proyecto incluye más imágenes, información técnica y alcance del trabajo.</p>
            </div>
          </div>
          <div className="home-project-grid">
            {homeFeaturedProjects.map((project) => (
              <article className="home-project-card" key={project.slug}>
                <Link to={`/proyectos/${project.slug}`} className="home-project-image" aria-label={`Ver proyecto completo ${project.title}`}>
                  <span className="home-project-badge" aria-hidden="true">+ fotos</span>
                  {project.cardImage
                    ? <img className="media-img home-project-media-img" src={project.cardImage} alt={`Imagen del proyecto ${project.title}`} loading="lazy" />
                    : <span className="home-project-fallback media-avicola" aria-hidden="true" />}
                </Link>
                <div className="home-project-content">
                  <h3>
                    <Link to={`/proyectos/${project.slug}`} className="home-project-title-link">{project.title}</Link>
                  </h3>
                  <p>{[project.type || project.category, project.location || 'Santa Cruz, Bolivia', project.year].filter(Boolean).join(' / ')}</p>
                  <Link to={`/proyectos/${project.slug}`} className="home-project-link">Ver proyecto completo</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="home-hero-actions">
            <Link className="cta-link" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker home-kicker">Servicios</div>
            <div>
              <h2>Servicios profesionales</h2>
              <p className="section-copy">Servicios claros para diseñar, documentar y construir con más orden.</p>
            </div>
          </div>
          <div className="home-services-grid home-services-grid--six">
            <article className="box home-service-card"><h3>Diseño arquitectónico</h3><p>Ideas, distribución y desarrollo del proyecto.</p></article>
            <article className="box home-service-card"><h3>Proyectos técnicos</h3><p>Planos, memorias y documentación para avanzar con seguridad.</p></article>
            <article className="box home-service-card"><h3>Construcción</h3><p>Apoyo en obra, coordinación y seguimiento del proceso.</p></article>
            <article className="box home-service-card"><h3>Gestión de proyectos</h3><p>Organización de tareas, tiempos, equipos y documentación.</p></article>
            <article className="box home-service-card"><h3>Reformas</h3><p>Propuestas claras para mejorar espacios existentes.</p></article>
            <article className="box home-service-card"><h3>Coordinación</h3><p>Revisión técnica y coordinación entre diseño, obra y documentación.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="wrap">
          <div className="home-cta-section">
            <div>
              <h2>¿Tiene un proyecto en mente?</h2>
              <p className="section-copy home-contact-copy">Cuéntenos qué necesita y le orientamos.</p>
            </div>
            <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
