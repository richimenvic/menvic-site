import { useCallback, useEffect, useMemo, useState } from 'react'
import AccessibilityReviewDetail from '../components/AccessibilityReviewDetail'
import { allItems, sections } from '../accessibilityChecklistData'
import { printAccessibilityReport } from '../accessibilityReport'
import '../accessibility-tool.css'
import '../accessibility-evidence.css'

const SUPABASE_URL = 'https://ttnzobxsdeoazhqtiayw.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-UpgvMJTFdY4R7bRNUcVvg_1v2rqdXk'
const PROJECT_SLUG = 'edificio-auxiliar-la-paz'
const ACTORS = ['Ricardo', 'Javier']

function CheckIcon({ checked = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill={checked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" />
      {checked && <path d="m7.5 12.2 3 3.1 6.3-6.7" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 10.7v5.2M12 7.6h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SidebarToggleIcon({ collapsed }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={collapsed ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

async function rpc(name, payload) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let message = 'No se pudo conectar con la base de datos.'
    try {
      const body = await response.json()
      message = body?.message === 'invalid_access_code' ? 'Clave incorrecta.' : (body?.message || message)
    } catch {
      // Keep generic message.
    }
    throw new Error(message)
  }
  return response.json()
}

function defaultCheckState(id) {
  return {
    check_id: id,
    status: 'pending',
    responsible: '',
    note: '',
    completed_by: '',
    completed_at: null,
    updated_by: '',
    updated_at: null,
  }
}

function formatDate(value) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit',
  }).format(new Date(value))
}

function LoginPanel({ onLogin, busy, error }) {
  const [actor, setActor] = useState(localStorage.getItem('menvic-accessibility-actor') || 'Ricardo')
  const [pin, setPin] = useState('')

  const submit = (event) => {
    event.preventDefault()
    if (!pin.trim()) return
    onLogin(actor, pin.trim())
  }

  return (
    <main className="access-login-shell">
      <section className="access-login-card">
        <img src="/img/brand/menvic-logo.png" className="access-login-logo" alt="Menvic Arquitectura" />
        <h1>Revisión de Accesibilidad</h1>
        <p>Checklist interno · Ley Autónoma Nº 80-14 · Anexo VII</p>

        <form onSubmit={submit}>
          <label>¿Quién está revisando?</label>
          <div className="access-actor-choice" role="group" aria-label="Responsable de la sesión">
            {ACTORS.map((name) => (
              <button key={name} type="button" className={actor === name ? 'is-active' : ''} onClick={() => setActor(name)}>
                {name}
              </button>
            ))}
          </div>

          <label htmlFor="access-pin">Clave de acceso</label>
          <div className="access-pin-wrap">
            <span><LockIcon /></span>
            <input id="access-pin" type="password" inputMode="numeric" autoComplete="one-time-code" value={pin} onChange={(event) => setPin(event.target.value)} placeholder="••••" maxLength={12} autoFocus />
          </div>

          {error && <div className="access-login-error" role="alert">{error}</div>}
          <button className="access-primary-button" type="submit" disabled={busy || !pin.trim()}>{busy ? 'Entrando…' : 'Entrar'}</button>
        </form>
        <small>Proyecto: Edificio Auxiliar – La Paz</small>
      </section>
    </main>
  )
}

export default function AccessibilityChecklistV2() {
  const [actor, setActor] = useState('')
  const [pin, setPin] = useState('')
  const [projectName, setProjectName] = useState('Edificio Auxiliar – La Paz')
  const [checkState, setCheckState] = useState(() => Object.fromEntries(allItems.map((item) => [item.id, defaultCheckState(item.id)])))
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState('')
  const [busy, setBusy] = useState(false)
  const [savingId, setSavingId] = useState('')
  const [reportBusy, setReportBusy] = useState(false)
  const [error, setError] = useState('')
  const [syncMessage, setSyncMessage] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 1180px)').matches)

  const hydrateState = useCallback((rows) => {
    const next = Object.fromEntries(allItems.map((item) => [item.id, defaultCheckState(item.id)]))
    rows.forEach((row) => {
      if (next[row.check_id]) next[row.check_id] = { ...next[row.check_id], ...row }
    })
    setCheckState(next)
  }, [])

  const loadState = useCallback(async (sessionPin = pin) => {
    if (!sessionPin) return
    const rows = await rpc('menvic_accessibility_get_state_v1', {
      p_project_slug: PROJECT_SLUG,
      p_pin: sessionPin,
    })
    hydrateState(rows)
    setSyncMessage(`Sincronizado ${new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date())}`)
  }, [hydrateState, pin])

  const login = useCallback(async (selectedActor, enteredPin) => {
    setBusy(true)
    setError('')
    try {
      const result = await rpc('menvic_accessibility_login_v1', {
        p_project_slug: PROJECT_SLUG,
        p_pin: enteredPin,
      })
      setActor(selectedActor)
      setPin(enteredPin)
      setProjectName(result?.[0]?.project_name || 'Edificio Auxiliar – La Paz')
      localStorage.setItem('menvic-accessibility-actor', selectedActor)
      sessionStorage.setItem('menvic-accessibility-pin', enteredPin)
      sessionStorage.setItem('menvic-accessibility-session', '1')
      await loadState(enteredPin)
    } catch (loginError) {
      setError(loginError.message)
      sessionStorage.removeItem('menvic-accessibility-pin')
      sessionStorage.removeItem('menvic-accessibility-session')
    } finally {
      setBusy(false)
    }
  }, [loadState])

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

  useEffect(() => {
    if (!actor || !pin) return undefined
    const timer = window.setInterval(() => {
      loadState().catch(() => setSyncMessage('Sin conexión · se reintentará'))
    }, 15000)
    return () => window.clearInterval(timer)
  }, [actor, pin, loadState])

  useEffect(() => {
    const narrowViewport = window.matchMedia('(max-width: 1180px)')
    const onViewportChange = (event) => {
      if (event.matches) setSidebarCollapsed(true)
    }
    narrowViewport.addEventListener?.('change', onViewportChange)
    return () => narrowViewport.removeEventListener?.('change', onViewportChange)
  }, [])

  const updateCheck = async (id, patch) => {
    const current = checkState[id] || defaultCheckState(id)
    const next = { ...current, ...patch }
    setCheckState((state) => ({ ...state, [id]: next }))
    setSavingId(id)
    setError('')
    try {
      const result = await rpc('menvic_accessibility_update_check_v1', {
        p_project_slug: PROJECT_SLUG,
        p_pin: pin,
        p_check_id: id,
        p_status: next.status,
        p_responsible: next.responsible || null,
        p_note: next.note || '',
        p_actor: actor,
      })
      if (result?.[0]) setCheckState((state) => ({ ...state, [id]: { ...state[id], ...result[0] } }))
      setSyncMessage('Guardado')
      return true
    } catch (saveError) {
      setError(saveError.message)
      await loadState().catch(() => {})
      return false
    } finally {
      setSavingId('')
    }
  }

  const logout = () => {
    sessionStorage.removeItem('menvic-accessibility-pin')
    sessionStorage.removeItem('menvic-accessibility-session')
    setActor('')
    setPin('')
    setError('')
  }

  const reviewedCount = useMemo(() => allItems.filter((item) => checkState[item.id]?.status !== 'pending').length, [checkState])
  const doneCount = useMemo(() => allItems.filter((item) => checkState[item.id]?.status === 'done').length, [checkState])
  const pendingCount = allItems.length - reviewedCount
  const percent = Math.round((reviewedCount / allItems.length) * 100)

  const visibleItemIds = useMemo(() => new Set(allItems.filter((item) => {
    const status = checkState[item.id]?.status || 'pending'
    if (filter === 'pending') return status === 'pending'
    if (filter === 'reviewed') return status !== 'pending'
    if (filter === 'notes') return Boolean(checkState[item.id]?.note?.trim())
    return true
  }).map((item) => item.id)), [checkState, filter])

  const copyPending = async () => {
    const lines = allItems
      .filter((item) => checkState[item.id]?.status === 'pending')
      .map((item) => `☐ ${item.title}${checkState[item.id]?.responsible ? ` — ${checkState[item.id].responsible}` : ''}${checkState[item.id]?.note ? ` — ${checkState[item.id].note}` : ''}`)
    await navigator.clipboard.writeText(`PENDIENTES · ${projectName}\n\n${lines.join('\n')}`)
    setSyncMessage('Pendientes copiados')
  }

  const generateReport = async () => {
    setReportBusy(true)
    setError('')
    try {
      await printAccessibilityReport({ projectName, actor, sections, checkState, pin })
      setSyncMessage('Reporte preparado')
    } catch (reportError) {
      setError(reportError.message)
    } finally {
      setReportBusy(false)
    }
  }

  if (!actor || !pin) return <LoginPanel onLogin={login} busy={busy} error={error} />

  return (
    <main className={`access-tool-page ${sidebarCollapsed ? 'is-sidebar-collapsed' : ''}`}>
      <aside className="access-sidebar">
        <button
          type="button"
          className="access-sidebar-toggle"
          onClick={() => setSidebarCollapsed((current) => !current)}
          aria-label={sidebarCollapsed ? 'Mostrar panel lateral' : 'Ocultar panel lateral'}
          aria-expanded={!sidebarCollapsed}
        >
          <SidebarToggleIcon collapsed={sidebarCollapsed} />
        </button>
        <img src="/img/brand/menvic-logo.png" alt="Menvic Arquitectura" className="access-brand" />
        <div className="access-sidebar-title"><CheckIcon checked /> <span>Revisión de<br />Accesibilidad</span></div>
        <div className="access-sidebar-session">
          <span>Sesión</span>
          <strong>{actor}</strong>
          <button type="button" onClick={logout}>Cerrar sesión</button>
        </div>
      </aside>

      <section className="access-workspace">
        <header className="access-topbar">
          <div>
            <h1>Revisión de Accesibilidad</h1>
            <p>Ley Autónoma Nº 80-14 · Anexo VII · Barreras Arquitectónicas</p>
          </div>
          <div className="access-sync-state"><span className="access-sync-dot" /> {savingId ? 'Guardando…' : (syncMessage || 'Conectado')}</div>
        </header>

        <div className="access-summary-grid">
          <div className="access-summary-card">
            <span>Proyecto actual</span>
            <strong>{projectName}</strong>
          </div>
          <div className="access-summary-card access-progress-card">
            <div><span>Progreso general</span><strong>{reviewedCount} de {allItems.length}</strong></div>
            <b>{percent}%</b>
            <div className="access-progress"><i style={{ width: `${percent}%` }} /></div>
            <small>{doneCount} cumplen · {pendingCount} pendientes</small>
          </div>
          <div className="access-summary-card">
            <span>Revisando como</span>
            <strong>{actor}</strong>
            <small>Los cambios se comparten entre Ricardo y Javier.</small>
          </div>
        </div>

        <div className="access-toolbar">
          <div className="access-filters" role="group" aria-label="Filtros">
            {[
              ['all', 'Todos'],
              ['pending', 'Pendientes'],
              ['reviewed', 'Revisados'],
              ['notes', 'Con observación'],
            ].map(([value, label]) => (
              <button key={value} type="button" className={filter === value ? 'is-active' : ''} onClick={() => setFilter(value)}>{label}</button>
            ))}
          </div>
          <div className="access-toolbar-actions">
            <button className="access-report-button" type="button" onClick={generateReport} disabled={reportBusy}>
              {reportBusy ? 'Preparando…' : 'PDF / Imprimir reporte'}
            </button>
            <button className="access-copy-button" type="button" onClick={copyPending}>Copiar pendientes</button>
          </div>
        </div>

        {error && <div className="access-error-banner" role="alert">{error}</div>}

        <div className="access-list" aria-label="Checklist de accesibilidad">
          <div className="access-list-head">
            <span>Punto a revisar</span><span>Responsable</span><span>Estado</span><span>Último cambio</span>
          </div>

          {sections.map((section) => {
            const visibleItems = section.items.filter(([id]) => visibleItemIds.has(id))
            if (!visibleItems.length) return null
            return (
              <div className="access-section" key={section.id}>
                <h2>{section.title}</h2>
                {visibleItems.map(([id, title, detail, source]) => {
                  const state = checkState[id] || defaultCheckState(id)
                  const isDone = state.status === 'done'
                  const isNa = state.status === 'na'
                  const isExpanded = expanded === id
                  const hasNote = Boolean(state.note?.trim())
                  return (
                    <div className={`access-row-wrap ${isDone ? 'is-done' : ''} ${isNa ? 'is-na' : ''} ${hasNote ? 'has-note' : ''}`} key={id}>
                      <div className="access-row">
                        <button
                          type="button"
                          className="access-check-button"
                          aria-label={isDone ? `Marcar ${title} como pendiente` : `Marcar ${title} como cumple`}
                          onClick={() => updateCheck(id, {
                            status: isDone ? 'pending' : 'done',
                            responsible: !isDone && !state.responsible ? actor : state.responsible,
                          })}
                          disabled={savingId === id}
                        >
                          <CheckIcon checked={isDone} />
                        </button>

                        <div className="access-point">
                          <span>{title}</span>
                          <button className="access-info-button" type="button" onClick={() => setExpanded(isExpanded ? '' : id)} aria-label={`Ver detalle de ${title}`}><InfoIcon /></button>
                        </div>

                        <select value={state.responsible || ''} onChange={(event) => updateCheck(id, { responsible: event.target.value })} disabled={savingId === id} aria-label={`Responsable de ${title}`}>
                          <option value="">—</option>
                          {ACTORS.map((name) => <option key={name}>{name}</option>)}
                        </select>

                        <div className="access-status-cell">
                          <span className={`access-status ${state.status}`}>{isDone ? 'Cumple' : isNa ? 'No aplica' : 'Pendiente'}</span>
                          <button type="button" className="access-na-button" onClick={() => updateCheck(id, { status: isNa ? 'pending' : 'na' })}>{isNa ? 'Reactivar' : 'N/A'}</button>
                        </div>

                        <div className="access-date-cell">
                          <span>{formatDate(state.updated_at)}</span>
                          {state.updated_by && <small>{state.updated_by}</small>}
                        </div>
                      </div>

                      {isExpanded && (
                        <AccessibilityReviewDetail
                          id={id}
                          detail={detail}
                          source={source}
                          initialNote={state.note || ''}
                          pin={pin}
                          actor={actor}
                          onDraftNote={(note) => setCheckState((current) => ({ ...current, [id]: { ...current[id], note } }))}
                          onSaveNote={async (note) => {
                            const saved = await updateCheck(id, { note })
                            if (!saved) throw new Error('No se pudo guardar la observación.')
                          }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        <footer className="access-tool-footer">
          <span>Fuente de revisión: Ley Autónoma Nº 80-14 · Textos Ordenados · Anexo VII.</span>
          <span>Las notas del checklist no sustituyen la revisión profesional del proyecto.</span>
        </footer>
      </section>
    </main>
  )
}
