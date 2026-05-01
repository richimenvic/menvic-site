import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const imageStyle = project.cardImage
    ? { backgroundImage: `url(${project.cardImage})` }
    : undefined

  return (
    <article className="featured-project">
      <Link
        className="featured-project-media project-card-image"
        to={`/proyectos/${project.slug}`}
        aria-label={`Ver proyecto ${project.title}`}
        style={{
          ...imageStyle,
          display: 'block',
          width: '100%',
          minHeight: 'clamp(240px, 62vw, 560px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span className="project-card-badge" aria-hidden="true">+ fotos</span>
        {project.cardImage
          ? (
            <img
              className="media-img featured-project-media-img"
              src={project.cardImage}
              alt={`Imagen principal del proyecto ${project.title}`}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                minHeight: 'clamp(240px, 62vw, 560px)',
                objectFit: 'cover',
              }}
            />
          )
          : null}
      </Link>
      <div className="featured-project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <dl className="project-facts">
          {project.location && <div><dt>Ubicación</dt><dd>{project.location}</dd></div>}
          <div><dt>Año</dt><dd>{project.year}</dd></div>
          {project.type && <div><dt>Tipología</dt><dd>{project.type}</dd></div>}
          {project.status && <div><dt>Estado</dt><dd>{project.status}</dd></div>}
          {project.phase && <div><dt>Fase actual</dt><dd>{project.phase}</dd></div>}
          {project.client && <div><dt>Cliente</dt><dd>{project.client}</dd></div>}
          {project.projectFor && <div><dt>Proyecto para</dt><dd>{project.projectFor}</dd></div>}
          <div><dt>Rol</dt><dd>{project.role}</dd></div>
        </dl>
        <Link className="text-link" to={`/proyectos/${project.slug}`}>Ver proyecto completo</Link>
      </div>
    </article>
  )
}
