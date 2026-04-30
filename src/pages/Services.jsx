const serviceItems = [
  {
    title: 'Diseño arquitectónico',
    description:
      'Desarrollo de propuestas arquitectónicas funcionales, técnicas y contemporáneas, adaptadas a las necesidades de cada proyecto.'
  },
  {
    title: 'Anteproyectos y proyectos',
    description:
      'Definición y desarrollo de proyectos arquitectónicos, integrando criterios de diseño, programa, viabilidad y coordinación.'
  },
  {
    title: 'Documentación técnica',
    description:
      'Producción de planos, documentación y expedientes claros y precisos para el desarrollo, coordinación y tramitación del proyecto.'
  },
  {
    title: 'Gestión y coordinación',
    description:
      'Acompañamiento técnico durante el desarrollo del proyecto, coordinación con especialidades, apoyo en licencias y seguimiento del proceso constructivo, respaldado por experiencia previa en ejecución, supervisión y gestión integral de obra.'
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
