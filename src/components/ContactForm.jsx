import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setStatus('Por favor, complete los campos requeridos correctamente.')
      setError(true)
      form.reportValidity()
      return
    }

    setLoading(true)
    setStatus('')
    setError(false)

    const formData = new FormData(form)
    formData.append('subject', 'Nueva consulta desde Mendieta Studio')

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const result = await response.json()
      if (result.success) {
        setStatus('Gracias por su mensaje. Nos pondremos en contacto con usted a la mayor brevedad posible.')
        form.reset()
      } else {
        setError(true)
        setStatus('No se pudo enviar su consulta. Inténtelo nuevamente en unos minutos.')
      }
    } catch {
      setError(true)
      setStatus('No se pudo enviar su consulta. Revise su conexión e inténtelo nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="access_key" value="9d064af6-bb40-4732-9a1f-519b6da716a6" />
      <input type="checkbox" name="botcheck" className="hidden-field" tabIndex="-1" autoComplete="off" />
      <div className="contact-form-grid">
        <div className="form-field"><label>Nombre completo</label><input name="name" required /></div>
        <div className="form-field"><label>Correo electrónico</label><input name="email" type="email" required /></div>
        <div className="form-field form-field--full"><label>Empresa / Organización <span>(opcional)</span></label><input name="company" /></div>
        <div className="form-field form-field--full"><label>Tipo de consulta</label><select name="inquiry_type" required defaultValue=""><option value="" disabled>Seleccione una opción</option><option>Arquitectura</option><option>Desarrollo de proyecto</option><option>Documentación técnica</option><option>Coordinación BIM</option><option>Consultoría técnica</option><option>Otro</option></select></div>
        <div className="form-field form-field--full"><label>Mensaje</label><textarea name="message" rows="6" required /></div>
      </div>
      <div className="contact-form-actions">
        <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar Consulta'}</button>
        {status && <p className={`form-status ${error ? 'error' : 'success'}`}>{status}</p>}
      </div>
    </form>
  )
}
