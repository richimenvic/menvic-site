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
            <h1 className="home-hero-title">Arquitectura, técnica y gestión de proyectos en Santa Cruz, Bolivia.</h1>
            <p className="lead">Desarrollamos proyectos arquitectónicos con enfoque funcional, técnico y contemporáneo, acompañando cada etapa desde la idea inicial hasta la documentación y coordinación del proyecto.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/contacto">Contactar</Link>
              <Link className="cta-link cta-link--ghost" to="/servicios">Servicios</Link>
            </div>
          </div>
          <figure className="hero-image hero-image-photo">
            <img className="media-img" src="/img/projects/prodimsa-lateral-hero.webp" alt="Vista exterior del Centro Social Corporativo PRODIMSA, proyecto de Menvic Arquitectura" loading="eager" />
          </figure>
        </div>
      </section>

      <section className="section section-featured">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker home-kicker">Proyectos destacados</div>
          </div>
          <div className="home-project-grid">
            {homeFeaturedProjects.map((project) => (
              <article className="home-project-card" key={project.slug}>
                <Link to={`/proyectos/${project.slug}`} className="home-project-image" aria-label={`Ver proyecto ${project.title}`}>
                  {project.cardImage
                    ? <img className="media-img home-project-media-img" src={project.cardImage} alt={`Imagen del proyecto ${project.title}`} loading="lazy" />
                    : <span className="home-project-fallback media-avicola" aria-hidden="true" />}
                </Link>
                <div className="home-project-content">
                  <h3>{project.title}</h3>
                  <p>{[project.type || project.category, project.location || 'Santa Cruz, Bolivia', project.year].filter(Boolean).join(' / ')}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker home-kicker">Servicios</div>
          </div>
          <div className="home-services-grid">
            <article className="box home-service-card"><h3>Diseño arquitectónico</h3><p>Desarrollo de propuestas arquitectónicas funcionales, técnicas y contemporáneas.</p></article>
            <article className="box home-service-card"><h3>Documentación técnica</h3><p>Producción de documentación clara y precisa para el desarrollo y coordinación del proyecto.</p></article>
            <article className="box home-service-card"><h3>Gestión y coordinación</h3><p>Acompañamiento técnico en la coordinación del proyecto y apoyo al proceso constructivo.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap home-about-grid">
          <div>
            <div className="kicker home-kicker">Sobre el Estudio</div>
            <h2>Sobre el Estudio</h2>
          </div>
          <div>
            <p className="section-copy">Menvic Arquitectura es un estudio de arquitectura con sede en Santa Cruz, Bolivia, enfocado en diseño arquitectónico, desarrollo técnico, documentación, coordinación y gestión de proyectos.</p>
            <Link className="cta-link" to="/estudio">Conocer el Estudio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="home-cta-section">
            <div>
              <h2>Hablemos de su próximo proyecto</h2>
              <p className="section-copy home-contact-copy">Estamos disponibles para nuevos proyectos, colaboraciones y consultas profesionales.</p>
            </div>
            <Link className="cta-link" to="/contacto">Contactar</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
