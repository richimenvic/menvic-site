import { Link } from 'react-router-dom'

const studioBlocks = [
  {
    title: 'Enfoque',
    text: [
      'Entendemos la arquitectura como la síntesis entre concepto, técnica y ejecución.',
      'Cada proyecto se desarrolla con una aproximación rigurosa orientada a producir soluciones sobrias, precisas y duraderas, capaces de responder tanto a las necesidades funcionales como a la calidad espacial y constructiva de la obra.'
    ]
  },
  {
    title: 'Metodología',
    text: [
      'Nuestro proceso de trabajo integra diseño, documentación y coordinación técnica desde etapas tempranas del proyecto.',
      'Aplicamos metodologías BIM y sistemas avanzados de documentación para garantizar mayor control, precisión y coherencia durante todo el desarrollo arquitectónico.'
    ]
  },
  {
    title: 'Experiencia',
    text: [
      'Mendieta Studio participa en proyectos de distinta escala y complejidad, colaborando en entornos locales e internacionales.',
      'Nuestra experiencia abarca desarrollos residenciales, equipamientos institucionales, arquitectura corporativa y soporte técnico especializado para equipos externos.'
    ]
  },
  {
    title: 'Filosofía',
    text: [
      'Creemos que la calidad arquitectónica surge de la correcta integración entre diseño y ejecución.',
      'Por ello, cada decisión proyectual se evalúa no solo desde su valor formal, sino también desde su viabilidad técnica, eficiencia constructiva y permanencia en el tiempo.'
    ]
  }
]

export default function Studio() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap studio-intro">
          <div className="kicker">Estudio</div>
          <h1>Mendieta Studio</h1>
          <p className="lead studio-lead">
            Mendieta Studio es un estudio de arquitectura enfocado en el desarrollo de proyectos contemporáneos con especial atención al rigor técnico, la precisión documental y la coordinación integral del proceso constructivo.
          </p>
          <p className="lead studio-lead">
            Trabajamos en proyectos residenciales, institucionales y corporativos, abordando cada encargo desde una visión equilibrada entre diseño, funcionalidad y viabilidad constructiva.
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
