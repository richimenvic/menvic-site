import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <main className="page-hero"><div className="wrap"><h1>Proyecto no encontrado</h1></div></main>

  return (
    <main className="page-hero">
      <div className="wrap">
        <div className="kicker">Proyecto</div>
        <h1>{project.title}</h1>
        {project.detailImage && (
          <figure className="featured-project-media project-detail-media">
            <img className="media-img project-detail-media-img" src={project.detailImage} alt={`Imagen principal del proyecto ${project.title}`} loading="eager" />
          </figure>
        )}
        <p>{project.description}</p>
        <dl className="project-facts">
          {Object.entries({ Ubicación: project.location, Año: project.year, Estado: project.status, 'Fase actual': project.phase, Cliente: project.client, 'Proyecto para': project.projectFor, Rol: project.role, Tipología: project.type }).map(([k, v]) => v && <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        {project.galleryImages?.length ? (
          <section className="project-gallery section-min" aria-label={`Galería del proyecto ${project.title}`}>
            {project.galleryImages.map((imageSrc, index) => (
              <figure className="image-placeholder project-gallery-item" key={imageSrc}>
                <img
                  className="media-img project-gallery-img"
                  src={imageSrc}
                  alt={`Galería ${index + 1} del proyecto ${project.title}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </section>
        ) : null}
        {project.legalNote && <p className="legal-note">{project.legalNote}</p>}
      </div>
    </main>
  )
}
