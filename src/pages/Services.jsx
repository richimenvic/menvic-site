const serviceItems = [
  {
    title: 'Diseño arquitectónico',
    description:
      'Desarrollo de propuestas arquitectónicas desde fases conceptuales, con enfoque funcional, técnico y contemporáneo.'
  },
  {
    title: 'Anteproyectos y proyectos',
    description:
      'Definición y desarrollo de proyectos arquitectónicos, integrando criterios de diseño, programa, viabilidad y coordinación.'
  },
  {
    title: 'Documentación técnica',
    description: 'Producción de documentación clara, precisa y coordinada para el desarrollo del proyecto y su proceso constructivo.'
  },
  {
    title: 'Gestión y coordinación de proyectos',
    description:
      'Acompañamiento técnico en la organización, revisión y coordinación de la información del proyecto.'
  },
  {
    title: 'Supervisión y apoyo constructivo',
    description:
      'Apoyo al proceso constructivo mediante revisión técnica, seguimiento de información y coordinación con los equipos involucrados.'
  },
  {
    title: 'Coordinación BIM',
    description:
      'Coordinación digital de información del proyecto cuando el alcance y las necesidades técnicas lo requieren.'
  }
]

export default function Services() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h1>Servicios profesionales</h1>
          <p className="lead">
            Servicios orientados al diseño arquitectónico, desarrollo técnico, documentación, gestión y coordinación de proyectos.
          </p>
        </div>
      </main>

      <section className="section section-compact">
        <div className="wrap">
          <div className="services-grid" role="list">
            {serviceItems.map((service) => (
              <article className="box service-box" key={service.title} role="listitem">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
