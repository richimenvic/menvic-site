const serviceItems = [
  {
    title: 'Arquitectura',
    description:
      'Diseño y desarrollo de proyectos arquitectónicos desde fases conceptuales hasta documentación ejecutiva.'
  },
  {
    title: 'Documentación técnica',
    description: 'Producción de documentación constructiva precisa, coordinada y orientada a obra.'
  },
  {
    title: 'Coordinación BIM',
    description:
      'Gestión y coordinación interdisciplinar de modelos digitales para control técnico y reducción de interferencias.'
  },
  {
    title: 'Consultoría técnica',
    description:
      'Asesoramiento especializado en documentación, revisión técnica, optimización de proyectos y soporte a equipos externos.'
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
            Servicios profesionales orientados al desarrollo integral de proyectos arquitectónicos y soporte
            técnico especializado.
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
