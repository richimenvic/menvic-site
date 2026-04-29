import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Mendieta Studio · Arquitectura</div>
            <h1 className="home-hero-title">Diseñamos arquitectura contemporánea con precisión técnica y atención al detalle.</h1>
            <p className="lead">Proyectos residenciales, institucionales y documentación técnica de alta calidad.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/proyectos">Ver Proyectos</Link>
              <Link className="cta-link cta-link--ghost" to="/contacto">Contactar</Link>
            </div>
          </div>
          <figure className="hero-image hero-image-photo">
            <img className="media-img" src="/img/projects/prodimsa-lateral-hero.webp" alt="Vista exterior del Centro Social Corporativo PRODIMSA, proyecto de Mendieta Studio" loading="eager" />
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
                  <p>{[project.type || project.category, project.location || 'Córdoba, España', project.year].filter(Boolean).join(' / ')}</p>
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
            <article className="box home-service-card"><h3>Arquitectura</h3><p>Diseño y desarrollo integral de proyectos arquitectónicos.</p></article>
            <article className="box home-service-card"><h3>Documentación Técnica</h3><p>Producción de documentación ejecutiva precisa para construcción.</p></article>
            <article className="box home-service-card"><h3>Coordinación BIM</h3><p>Coordinación interdisciplinar y control técnico digital.</p></article>
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
            <p className="section-copy">Mendieta Studio desarrolla proyectos arquitectónicos con un enfoque en diseño, detalle técnico y coordinación integral del proceso constructivo.</p>
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
