import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const orderedProjectSlugs = [
  'templo-la-paz',
  'templo-santa-cruz',
  'centro-social-corporativo-prodimsa',
  'iglesias-ijsud-producto-diseno',
  'avicola-sofia-planta-alimentos-5',
  'avicola-sofia-cocina-comedor-malla-las-pavas',
  'avicola-sofia-matadero-pollos',
  'avicola-sofia-frigorifico-cochabamba',
]

const uniqueProjectsBySlug = projects.filter(
  (project, index, source) => source.findIndex((item) => item.slug === project.slug) === index
)

const orderedProjects = [
  ...orderedProjectSlugs
    .map((slug) => uniqueProjectsBySlug.find((project) => project.slug === slug))
    .filter(Boolean),
  ...uniqueProjectsBySlug.filter((project) => !orderedProjectSlugs.includes(project.slug)),
]

export default function Projects() {
  return <main className="page-hero"><div className="wrap"><div className="kicker">Proyectos</div><h1>Proyectos</h1><p className="lead">La experiencia previa de Menvic incluye proyectos de diseño, documentación técnica, coordinación y ejecución de obra. Esta trayectoria permite abordar los proyectos actuales con una visión integral, combinando criterio arquitectónico, precisión técnica y conocimiento práctico del proceso constructivo.</p>{orderedProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></main>
}
