import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="page-hero">
      <div className="wrap">
        <div className="kicker">Contacto</div>
        <h1>Hablemos de su próximo proyecto</h1>
        <p className="section-copy">Estamos disponibles para nuevas oportunidades, colaboraciones y encargos arquitectónicos.</p>
        <div className="box contact-form-box">
          <p><strong>Menvic Arquitectura</strong></p>
          <p>Condominio Génesis 33, 7mo Anillo, Carretera al Norte, Santa Cruz, Bolivia</p>
          <p>Tel. / WhatsApp: 75019441</p>
          <p>menvic.com</p>
          <p><a className="cta-link" href="https://wa.me/59175019441" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a></p>
        </div>
        <div className="box contact-form-box"><ContactForm /></div>
      </div>
    </main>
  )
}
