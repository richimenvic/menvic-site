import { useCallback, useEffect, useMemo, useState } from 'react'
import '../accessibility-tool.css'

const SUPABASE_URL = 'https://ttnzobxsdeoazhqtiayw.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-UpgvMJTFdY4R7bRNUcVvg_1v2rqdXk'
const PROJECT_SLUG = 'edificio-auxiliar-la-paz'
const ACTORS = ['Ricardo', 'Javier']

const sections = [
  {
    id: 'access',
    title: 'Acceso y circulación',
    items: [
      ['access-01', 'Ruta accesible y transitable hasta el ingreso', 'Comprobar continuidad del recorrido accesible desde el exterior y ausencia de obstáculos.', 'Anexo VII · pp. 3 y 10'],
      ['access-02', 'Ingreso con rampa cuando exista desnivel', 'El acceso al edificio debe disponer de rampa cuando sea necesaria para salvar desniveles.', 'Anexo VII · p. 3'],
      ['access-03', 'Pasillos generales ≥ 1.20 m', 'Verificar un ancho mínimo de 1.20 m para pasillos.', 'Anexo VII · p. 3'],
      ['access-04', 'Giro de hasta 90°: ancho ≥ 1.00 m', 'En giros de hasta 90° comprobar un ancho mínimo de 1.00 m.', 'Anexo VII · p. 3'],
      ['access-05', 'Giro mayor de 90°: ancho ≥ 1.20 m', 'En giros mayores de 90° comprobar un ancho mínimo de 1.20 m.', 'Anexo VII · p. 3'],
      ['access-06', 'Cruce frecuente de dos sillas: ancho ≥ 1.50 m', 'Cuando exista circulación frecuente de dos sillas de ruedas, verificar 1.50 m de ancho mínimo.', 'Anexo VII · p. 3'],
      ['access-07', 'Área accesible de espera ≥ 1.20 × 1.20 m', 'En espacios de estar y salas de espera, reservar y señalizar un área mínima de 1.20 × 1.20 m.', 'Anexo VII · p. 3'],
    ],
  },
  {
    id: 'ramps',
    title: 'Rampas',
    items: [
      ['ramp-01', 'Ancho mínimo de rampa ≥ 0.90 m', 'Comprobar 0.90 m de ancho mínimo.', 'Anexo VII · p. 3'],
      ['ramp-02', 'Descansos ≥ 1.20 m', 'Verificar descansos con dimensión mínima de 1.20 m.', 'Anexo VII · p. 3'],
      ['ramp-03', 'Inicio y final con espacio de giro Ø 1.20 m', 'Al inicio y al final de la rampa debe poder inscribirse un círculo mínimo de 1.20 m de diámetro.', 'Anexo VII · p. 3'],
      ['ramp-04', 'Pendiente ≤ 6% para tramos de 10 a 15 m', 'Aplicar la pendiente máxima indicada para tramos rectos entre descansos.', 'Anexo VII · p. 3'],
      ['ramp-05', 'Pendiente ≤ 8% para tramos de 3 a 10 m', 'Aplicar la pendiente máxima indicada para tramos rectos entre descansos.', 'Anexo VII · p. 3'],
      ['ramp-06', 'Pendiente ≤ 10% para tramos de 1.50 a 3 m', 'Aplicar la pendiente máxima indicada para tramos rectos entre descansos.', 'Anexo VII · p. 3'],
      ['ramp-07', 'Pendiente ≤ 12% para tramos de hasta 1.50 m', 'Aplicar la pendiente máxima indicada para tramos rectos entre descansos.', 'Anexo VII · p. 3'],
      ['ramp-08', 'Doble circulación con pasamanos central', 'Cuando exista doble circulación, verificar pasamanos intermedio central.', 'Anexo VII · p. 3'],
    ],
  },
  {
    id: 'stairs',
    title: 'Escaleras y pasamanos',
    items: [
      ['stairs-01', 'Huella con borde o arista redondeada', 'Revisar la geometría del borde de cada peldaño.', 'Anexo VII · p. 3'],
      ['stairs-02', 'Encuentro huella–contrahuella a 90°', 'Evitar resaltes o discontinuidades entre huella y contrahuella.', 'Anexo VII · pp. 3 y 21'],
      ['stairs-03', 'Huella ≥ 28 cm', 'El ejemplo gráfico indica que la dimensión de la huella no debe ser menor a 28 cm.', 'Anexo VII · p. 21 · ejemplo gráfico'],
      ['stairs-04', 'Máximo 18 peldaños consecutivos', 'Comprobar el máximo mostrado en el esquema gráfico.', 'Anexo VII · p. 21 · ejemplo gráfico'],
      ['stairs-05', 'Pasamanos a 0.90 m y continuos', 'Los pasamanos en rampas y escaleras deben ser continuos en todo el recorrido, incluido el descanso.', 'Anexo VII · pp. 3 y 20'],
      ['stairs-06', 'Agarre circular aprox. Ø 3–5 cm', 'Verificar sección circular de agarre, fijación firme y extremos curvados.', 'Anexo VII · pp. 3 y 21'],
      ['stairs-07', 'Separación del pasamanos a obstáculos ≥ 4 cm', 'Dejar separación suficiente respecto a muro u obstáculos.', 'Anexo VII · p. 21'],
      ['stairs-08', 'Pavimento señalizador al inicio y final', 'Verificar la franja señalizadora mostrada en el esquema de escalera.', 'Anexo VII · p. 21 · ejemplo gráfico'],
    ],
  },
  {
    id: 'doors',
    title: 'Puertas y ventanas',
    items: [
      ['doors-01', 'Puertas con ancho libre ≥ 0.80 m', 'Verificar el ancho mínimo indicado para puertas.', 'Anexo VII · p. 4'],
      ['doors-02', 'Puerta alternativa si existe puerta giratoria', 'Las puertas giratorias no se consideran aptas para personas con discapacidad; debe existir alternativa de entrada.', 'Anexo VII · p. 4'],
      ['doors-03', 'Puertas correderas con rodamiento adecuado', 'Comprobar un mecanismo de desplazamiento apropiado.', 'Anexo VII · p. 4'],
      ['doors-04', 'Manillas no circulares', 'Revisar que las agarraderas/manillas puedan accionarse con facilidad.', 'Anexo VII · pp. 4 y 22'],
      ['doors-05', 'Antepecho de ventana ≤ 0.85 m cuando corresponda', 'Revisar antepechos y visibilidad para usuario en silla de ruedas.', 'Anexo VII · pp. 4 y 22'],
      ['doors-06', 'Puertas de emergencia señalizadas', 'Toda puerta de emergencia debe estar debidamente señalizada.', 'Anexo VII · p. 5'],
    ],
  },
  {
    id: 'elevator',
    title: 'Ascensor — si existe',
    items: [
      ['elevator-01', 'Cabina libre mínima 0.90 × 1.20 m', 'Comprobar las dimensiones mínimas interiores de la cabina.', 'Anexo VII · p. 4'],
      ['elevator-02', 'Altura interior mínima 2.10 m', 'Verificar la altura libre mínima de cabina.', 'Anexo VII · p. 4'],
      ['elevator-03', 'Tablero interior entre 0.90 y 1.20 m', 'Comprobar la altura de los controles interiores.', 'Anexo VII · p. 4'],
      ['elevator-04', 'Botonera exterior entre 0.90 y 1.20 m', 'Comprobar la altura del botón de llamada exterior.', 'Anexo VII · p. 4'],
      ['elevator-05', 'Botones en alto relieve y equivalente en Braille', 'Revisar identificación táctil de pulsadores interiores y exteriores.', 'Anexo VII · p. 4'],
      ['elevator-06', 'Piso de cabina antideslizante', 'Verificar material de piso antideslizante.', 'Anexo VII · p. 4'],
    ],
  },
  {
    id: 'bathrooms',
    title: 'Área higiénica sanitaria',
    items: [
      ['bath-01', 'Puerta abatible o corredera ≥ 0.80 m', 'Verificar ancho mínimo y facilidad de acceso al recinto.', 'Anexo VII · p. 4'],
      ['bath-02', 'Espacio de maniobra y transferencia suficiente', 'Comparar la distribución con los esquemas de referencia para usuario en silla de ruedas.', 'Anexo VII · pp. 23 y 25 · ejemplos gráficos'],
      ['bath-03', 'Asiento de inodoro entre 0.40 y 0.45 m', 'Comprobar altura del asiento terminado.', 'Anexo VII · p. 4'],
      ['bath-04', 'Barras de apoyo a ambos lados del inodoro', 'Debe existir apoyo lateral a ambos lados.', 'Anexo VII · p. 4'],
      ['bath-05', 'Al menos una barra lateral abatible', 'Verificar barra abatible según disposición del inodoro.', 'Anexo VII · p. 4'],
      ['bath-06', 'Barras Ø 3.5–5 cm y separadas 5 cm del muro', 'Comprobar sección, separación y fijación firme.', 'Anexo VII · pp. 4 y 23'],
      ['bath-07', 'Lavamanos sin pedestal a 0.80 m', 'Permitir aproximación frontal u oblicua de silla de ruedas.', 'Anexo VII · pp. 4 y 24'],
      ['bath-08', 'Grifería de palanca o monomando', 'Evitar griferías de difícil agarre o giro.', 'Anexo VII · pp. 4 y 24'],
      ['bath-09', 'Borde inferior de espejo a 0.90 m', 'Verificar altura accesible del espejo.', 'Anexo VII · pp. 4 y 24'],
      ['bath-10', 'Accesorios entre 0.70 y 1.20 m', 'Comprobar dispensadores y accesorios de uso habitual.', 'Anexo VII · p. 4'],
      ['bath-11', 'Urinario adulto a 0.60 m — si existe', 'El Anexo indica 0.40 m para niños y 0.60 m para adultos.', 'Anexo VII · pp. 4 y 24'],
      ['bath-12', 'Piso homogéneo y antideslizante en seco y mojado', 'Verificar acabado continuo y seguro.', 'Anexo VII · pp. 4 y 13'],
      ['bath-13', 'Iluminación automática vinculada al cierre de puerta', 'Comprobar el sistema de encendido y apagado indicado.', 'Anexo VII · p. 4'],
    ],
  },
  {
    id: 'services',
    title: 'Servicios, evacuación y emergencia',
    items: [
      ['service-01', 'Pulsadores, interruptores, timbres y alarmas entre 0.90 y 1.00 m', 'Incluye botoneras, zumbadores, porteros electrónicos y elementos análogos.', 'Anexo VII · p. 5'],
      ['service-02', 'Ducto de basura ≤ 1.00 m — si existe', 'El acceso al ducto debe quedar al ras del muro y dentro de la altura máxima indicada.', 'Anexo VII · p. 5'],
      ['service-03', 'Detección de incendio perceptible por personas con discapacidad', 'Revisar que equipos e instalaciones permitan la percepción de la alarma.', 'Anexo VII · p. 5'],
      ['service-04', 'Adaptaciones y servicios de accesibilidad señalizados', 'Toda adecuación o servicio accesible debe estar debidamente señalizado.', 'Anexo VII · p. 5'],
    ],
  },
  {
    id: 'dining',
    title: 'Comedor — si existe',
    items: [
      ['dining-01', 'Al menos una mesa accesible para silla de ruedas', 'En lugares de consumo de alimentos debe existir una mesa cuya superficie permita el acercamiento de una silla de ruedas.', 'Anexo VII · p. 5'],
    ],
  },
  {
    id: 'outside',
    title: 'Recorridos exteriores',
    items: [
      ['outside-01', 'Franja libre peatonal sin obstáculos', 'Mantener libre de obstáculos, salientes y mobiliario urbano la franja de circulación.', 'Anexo VII · pp. 10 y 27'],
      ['outside-02', 'Pavimento firme, homogéneo y antideslizante', 'Verificar continuidad y seguridad de las superficies exteriores.', 'Anexo VII · p. 10'],
      ['outside-03', 'Rejillas y tapas al mismo nivel del piso', 'Deben quedar ancladas y niveladas, incluso en rampas o superficies inclinadas.', 'Anexo VII · p. 10'],
      ['outside-04', 'Paso peatonal con rampa ≤ 8% y ancho ≥ 1.20 m', 'Comprobar pendiente y ancho de cruce accesible.', 'Anexo VII · pp. 10 y 27'],
      ['outside-05', 'Tiras táctiles para orientar y advertir', 'Utilizar pavimento táctil para indicar recorridos, obstáculos y cambios de nivel.', 'Anexo VII · pp. 10 y 13'],
      ['outside-06', 'Mobiliario urbano fuera del recorrido peatonal', 'El mobiliario no debe constituir impedimento para el peatón.', 'Anexo VII · p. 10'],
    ],
  },
  {
    id: 'parking',
    title: 'Parqueos accesibles — si existen',
    items: [
      ['parking-01', 'Reserva permanente para vehículos de personas con discapacidad', 'El Anexo exige disponer de una reserva permanente.', 'Anexo VII · p. 10'],
      ['parking-02', 'Pavimento nivelado, firme y antideslizante', 'Comprobar las condiciones del área de estacionamiento accesible.', 'Anexo VII · p. 10'],
      ['parking-03', 'Señalización horizontal y vertical', 'Verificar señalización completa de la plaza accesible.', 'Anexo VII · pp. 10 y 29'],
      ['parking-04', 'Plaza perpendicular/oblicua: 3.50 × 5.00 m', 'Comprobar ancho y largo indicados.', 'Anexo VII · p. 10'],
      ['parking-05', 'Plaza paralela: 3.50 × 6.50 m', 'Comprobar ancho y largo indicados.', 'Anexo VII · p. 10'],
    ],
  },
  {
    id: 'signals',
    title: 'Texturas, contraste y señalización',
    items: [
      ['signals-01', 'Contraste visual en puertas, pasamanos, escaleras, baños, salidas y desniveles', 'Usar colores de contraste para destacar elementos relevantes del recorrido.', 'Anexo VII · p. 13'],
      ['signals-02', 'Pisos sin relieve, estables y antideslizantes', 'Revisar comportamiento tanto en seco como en mojado.', 'Anexo VII · p. 13'],
      ['signals-03', 'Franjas señalizadoras en obstáculos, cambios de sentido, escaleras, rampas y desniveles', 'Comprobar señalización táctil/visual del pavimento.', 'Anexo VII · p. 13'],
      ['signals-04', 'Señales orientadoras, direccionales y funcionales donde correspondan', 'Revisar ubicación lógica, visible y comprensible de la información.', 'Anexo VII · p. 15'],
      ['signals-05', 'Señalización táctil entre 0.70 y 1.20 m', 'Las señales táctiles deben presentar relieve contrastado y no lacerante.', 'Anexo VII · p. 15'],
      ['signals-06', 'Tamaño de señal según A = L² / 2000', 'Aplicar la fórmula indicada para distancias de lectura menores de 50 m.', 'Anexo VII · p. 15'],
      ['signals-07', 'Símbolos internacionales de accesibilidad correctamente utilizados', 'Revisar simbología de silla de ruedas, sordera/hipoacusia y deficiencia visual cuando corresponda.', 'Anexo VII · pp. 15–16'],
    ],
  },
]

const allItems = sections.flatMap((section) => section.items.map(([id, title, detail, source]) => ({
  id,
  sectionId: section.id,
  sectionTitle: section.title,
  title,
  detail,
  source,
})))

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
      // Keep the generic message.
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

export default function AccessibilityChecklist() {
  const [actor, setActor] = useState('')
  const [pin, setPin] = useState('')
  const [projectName, setProjectName] = useState('Edificio Auxiliar – La Paz')
  const [checkState, setCheckState] = useState(() => Object.fromEntries(allItems.map((item) => [item.id, defaultCheckState(item.id)])))
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState('')
  const [busy, setBusy] = useState(false)
  const [savingId, setSavingId] = useState('')
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
    } catch (saveError) {
      setError(saveError.message)
      await loadState().catch(() => {})
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
          <button className="access-copy-button" type="button" onClick={copyPending}>Copiar pendientes</button>
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
                  return (
                    <div className={`access-row-wrap ${isDone ? 'is-done' : ''} ${isNa ? 'is-na' : ''}`} key={id}>
                      <div className="access-row">
                        <button
                          type="button"
                          className="access-check-button"
                          aria-label={isDone ? `Marcar ${title} como pendiente` : `Marcar ${title} como cumple`}
                          onClick={() => updateCheck(id, { status: isDone ? 'pending' : 'done' })}
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
                        <div className="access-detail-row">
                          <div>
                            <strong>Criterio</strong>
                            <p>{detail}</p>
                            <small>{source}</small>
                          </div>
                          <label>
                            <span>Observación / diferencia encontrada</span>
                            <textarea
                              value={state.note || ''}
                              placeholder="Ej.: Pasillo existente 1.12 m; corregir muro W-23."
                              onChange={(event) => setCheckState((current) => ({ ...current, [id]: { ...current[id], note: event.target.value } }))}
                              onBlur={() => updateCheck(id, { note: checkState[id]?.note || '' })}
                              rows="3"
                            />
                          </label>
                        </div>
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
