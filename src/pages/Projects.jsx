import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return <main className="page-hero"><div className="wrap"><div className="kicker">Proyectos</div><h1>Proyectos</h1><p className="lead">La experiencia previa de Menvic incluye proyectos de diseño, documentación técnica, coordinación y ejecución de obra. Esta trayectoria permite abordar los proyectos actuales con una visión integral, combinando criterio arquitectónico, precisión técnica y conocimiento práctico del proceso constructivo.</p>{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></main>
}
