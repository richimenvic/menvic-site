import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../accessibility-tool.css'
import '../internal-tools-home.css'

const SUPABASE_URL = 'https://ttnzobxsdeoazhqtiayw.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-UpgvMJTFdY4R7bRNUcVvg_1v2rqdXk'
const PROJECT_SLUG = 'edificio-auxiliar-la-paz'
const ACTORS = ['Ricardo', 'Javier']

async function rpc(functionName, body) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${functionName}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}))
    throw new Error(payload?.message || payload?.hint || 'No se pudo validar el acceso.')
  }

  return response.json().catch(() => null)
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 10V7.5a5 5 0 0 1 10 0V10M6 10h12a1 1 0 0 1 1 1v9H5v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4.5h8M12 4.5v4M7.5 9h9M9.5 9l-1.3 4.2M14.5 9l1.3 4.2M8.2 13.2l-2.7 5.3M15.8 13.2l2.7 5.3M9.5 13.2h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="3.4" r="1.4" fill="currentColor" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function InternalToolsHome() {
  const [actor, setActor] = useState('')
  const [pin, setPin] = useState('')
  const [selectedActor, setSelectedActor] = useState(() => localStorage.getItem('menvic-accessibility-actor') || 'Ricardo')
  const [enteredPin, setEnteredPin] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const login = useCallback(async (name, accessPin) => {
    setBusy(true)
    setError('')
    try {
      await rpc('menvic_accessibility_login_v1', {
        p_project_slug: PROJECT_SLUG,
        p_pin: accessPin,
      })
      setActor(name)
      setPin(accessPin)
      localStorage.setItem('menvic-accessibility-actor', name)
      sessionStorage.setItem('menvic-accessibility-pin', accessPin)
      sessionStorage.setItem('menvic-accessibility-session', '1')
    } catch (loginError) {
      setError(loginError.message)
      setActor('')
      setPin('')
      sessionStorage.removeItem('menvic-accessibility-pin')
      sessionStorage.removeItem('menvic-accessibility-session')
    } finally {
      setBusy(false)
    }
  }, [])

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]') || document.head.appendChild(document.createElement('meta'))
    robots.setAttribute('name', 'robots')
    const previous = robots.getAttribute('content')
    robots.setAttribute('content', 'noindex, nofollow')
    return () => {
      if (previous) robots.setAttribute('content', previous)
      else robots.removeAttribute('content')
    }
  }, [])

  useEffect(() => {
    const savedPin = sessionStorage.getItem('menvic-accessibility-pin')
    const savedActor = localStorage.getItem('menvic-accessibility-actor')
    if (sessionStorage.getItem('menvic-accessibility-session') === '1' && savedPin && savedActor) {
      login(savedActor, savedPin)
    }
  }, [login])

  const submitLogin = (event) => {
    event.preventDefault()
    if (!selectedActor || !enteredPin.trim()) return
    login(selectedActor, enteredPin.trim())
  }

  const logout = () => {
    sessionStorage.removeItem('menvic-accessibility-pin')
    sessionStorage.removeItem('menvic-accessibility-session')
    setActor('')
    setPin('')
    setEnteredPin('')
    setError('')
  }

  if (!actor || !pin) {
    return (
      <main className="access-login-shell tools-login-shell">
        <section className="access-login-card tools-login-card">
          <img src="/img/brand/menvic-logo.png" alt="Menvic Arquitectura" className="access-login-logo" />
          <h1>Herramientas internas</h1>
          <p>Acceso privado para utilidades de revisión y coordinación de MENVIC.</p>
          <form onSubmit={submitLogin}>
            <label>Revisando como</label>
            <div className="access-actor-choice">
              {ACTORS.map((name) => (
                <button key={name} type="button" className={selectedActor === name ? 'is-active' : ''} onClick={() => setSelectedActor(name)}>
                  {name}
                </button>
              ))}
            </div>
            <label htmlFor="tools-pin">Clave de acceso</label>
            <div className="access-pin-wrap">
              <span><LockIcon /></span>
              <input id="tools-pin" type="password" inputMode="numeric" autoComplete="one-time-code" value={enteredPin} onChange={(event) => setEnteredPin(event.target.value)} placeholder="••••" maxLength={12} autoFocus />
            </div>
            {error && <div className="access-login-error" role="alert">{error}</div>}
            <button className="access-primary-button" type="submit" disabled={busy || !enteredPin.trim()}>{busy ? 'Entrando…' : 'Entrar'}</button>
          </form>
          <small>Uso interno MENVIC</small>
        </section>
      </main>
    )
  }

  return (
    <main className="tools-home-page">
      <header className="tools-home-header">
        <img src="/img/brand/menvic-logo.png" alt="Menvic Arquitectura" className="tools-home-logo" />
        <div className="tools-session">
          <span>Sesión</span>
          <strong>{actor}</strong>
          <button type="button" onClick={logout}>Cerrar sesión</button>
        </div>
      </header>

      <section className="tools-home-content">
        <div className="tools-home-intro">
          <h1>Herramientas internas</h1>
          <p>Utilidades de MENVIC para revisar, coordinar y documentar proyectos de forma consistente.</p>
        </div>

        <div className="tools-card-grid">
          <Link className="tools-card" to="/tools/accesibilidad">
            <div className="tools-card-icon"><AccessibilityIcon /></div>
            <div className="tools-card-body">
              <span>Revit · QA/QC</span>
              <h2>Revisión de Accesibilidad</h2>
              <p>Checklist compartido de 71 puntos para revisar el Anexo VII en el Edificio Auxiliar – La Paz.</p>
              <div className="tools-card-meta">Ricardo + Javier · sincronizado en Supabase</div>
            </div>
            <div className="tools-card-action">Abrir <ArrowIcon /></div>
          </Link>
        </div>
      </section>

      <footer className="tools-home-footer">MENVIC · Herramientas internas</footer>
    </main>
  )
}
