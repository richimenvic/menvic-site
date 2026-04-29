import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return <main className="page-hero"><div className="wrap"><div className="kicker">Proyectos</div><h1>Proyectos</h1>{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></main>
}
