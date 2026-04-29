import { Link } from 'react-router-dom'

const studioBlocks = [
  {
    title: 'Enfoque',
    text: [
      'Entendemos la arquitectura como la integración entre concepto, técnica y gestión.',
      'Cada proyecto se desarrolla con una aproximación clara y rigurosa, orientada a producir soluciones funcionales, contemporáneas y viables desde el punto de vista constructivo.'
    ]
  },
  {
    title: 'Metodología',
    text: [
      'Nuestro proceso de trabajo integra diseño, desarrollo técnico, documentación y coordinación desde etapas tempranas del proyecto.',
      'Acompañamos la evolución del proyecto para mantener coherencia entre la idea arquitectónica, la información técnica y las necesidades de ejecución.'
    ]
  },
  {
    title: 'Experiencia',
    text: [
      'Menvic Arquitectura participa en proyectos de distinta escala y complejidad, con base en Santa Cruz, Bolivia.',
      'Nuestra experiencia abarca diseño arquitectónico, documentación técnica, coordinación de proyectos, gestión y apoyo al proceso constructivo.'
    ]
  },
  {
    title: 'Filosofía',
    text: [
      'Creemos que la calidad arquitectónica surge de la correcta relación entre diseño, técnica y ejecución.',
      'Por ello, cada decisión proyectual se evalúa desde su valor funcional, su precisión técnica y su capacidad para aportar soluciones claras y duraderas.'
    ]
  }
]

export default function Studio() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap studio-intro">
          <div className="kicker">Estudio</div>
          <h1>Menvic Arquitectura</h1>
          <p className="lead studio-lead">
            Menvic Arquitectura es un estudio de arquitectura con sede en Santa Cruz, Bolivia, enfocado en el desarrollo de proyectos con atención al diseño, la documentación técnica, la coordinación y la gestión del proceso proyectual.
          </p>
          <p className="lead studio-lead">
            Trabajamos cada encargo desde una visión equilibrada entre funcionalidad, criterio técnico y calidad arquitectónica, acompañando las distintas etapas del proyecto.
          </p>
        </div>
      </main>

      <section className="section section-compact studio-section">
        <div className="wrap studio-editorial">
          {studioBlocks.map((block) => (
            <article key={block.title} className="box studio-block">
              <h2>{block.title}</h2>
              {block.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}

          <article className="box studio-cta">
            <h2>¿Tiene un proyecto en mente?</h2>
            <p>Estaremos encantados de estudiar su propuesta.</p>
            <Link className="cta-link" to="/contacto">Contactar</Link>
          </article>
        </div>
      </section>
    </>
  )
}
