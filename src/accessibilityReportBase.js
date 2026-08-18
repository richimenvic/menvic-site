import { listAllEvidence } from './accessibilityEvidence'

const sectionEnglish = {
  access: 'Access and circulation',
  ramps: 'Ramps',
  stairs: 'Stairs and handrails',
  doors: 'Doors and windows',
  elevator: 'Elevator — if provided',
  bathrooms: 'Accessible sanitary facilities',
  services: 'Services, evacuation and emergency',
  dining: 'Dining area — if provided',
  outside: 'Exterior accessible routes',
  parking: 'Accessible parking — if provided',
  signals: 'Textures, contrast and signage',
}

const english = {
  'access-01': ['Accessible and unobstructed route to the entrance', 'Verify a continuous accessible route from the exterior and the absence of obstacles.'],
  'access-02': ['Ramp at entrance where a level change exists', 'Provide a ramp at the building entrance whenever required to overcome a level difference.'],
  'access-03': ['General corridors ≥ 1.20 m', 'Verify a minimum corridor width of 1.20 m.'],
  'access-04': ['Turn up to 90°: width ≥ 1.00 m', 'For turns up to 90°, verify a minimum width of 1.00 m.'],
  'access-05': ['Turn greater than 90°: width ≥ 1.20 m', 'For turns greater than 90°, verify a minimum width of 1.20 m.'],
  'access-06': ['Frequent passing of two wheelchairs: width ≥ 1.50 m', 'Where two wheelchairs frequently pass each other, verify a minimum width of 1.50 m.'],
  'access-07': ['Accessible waiting area ≥ 1.20 × 1.20 m', 'In waiting and seating areas, reserve and identify an accessible space at least 1.20 × 1.20 m.'],
  'ramp-01': ['Minimum ramp width ≥ 0.90 m', 'Verify a minimum clear ramp width of 0.90 m.'],
  'ramp-02': ['Landings ≥ 1.20 m', 'Verify landings with a minimum dimension of 1.20 m.'],
  'ramp-03': ['Start and end with Ø 1.20 m turning space', 'At the beginning and end of the ramp, provide space for a minimum 1.20 m diameter circle.'],
  'ramp-04': ['Slope ≤ 6% for 10 to 15 m runs', 'Apply the indicated maximum slope for straight runs between landings.'],
  'ramp-05': ['Slope ≤ 8% for 3 to 10 m runs', 'Apply the indicated maximum slope for straight runs between landings.'],
  'ramp-06': ['Slope ≤ 10% for 1.50 to 3 m runs', 'Apply the indicated maximum slope for straight runs between landings.'],
  'ramp-07': ['Slope ≤ 12% for runs up to 1.50 m', 'Apply the indicated maximum slope for straight runs between landings.'],
  'ramp-08': ['Two-way ramp with central handrail', 'Where two-way circulation is provided, verify an intermediate central handrail.'],
  'stairs-01': ['Tread with rounded edge or nosing', 'Review the geometry of the edge of each stair tread.'],
  'stairs-02': ['Tread-to-riser junction at 90°', 'Avoid projections or discontinuities between tread and riser.'],
  'stairs-03': ['Tread depth ≥ 28 cm', 'The graphic example indicates that tread depth should not be less than 28 cm.'],
  'stairs-04': ['Maximum 18 consecutive steps', 'Verify the maximum number shown in the graphic example.'],
  'stairs-05': ['Continuous handrails at 0.90 m', 'Handrails on ramps and stairs must remain continuous along the full route, including landings.'],
  'stairs-06': ['Circular grip approx. Ø 3–5 cm', 'Verify a circular gripping section, firm anchorage, and curved ends.'],
  'stairs-07': ['Handrail clearance from obstacles ≥ 4 cm', 'Provide sufficient clearance from the wall or other obstacles.'],
  'stairs-08': ['Warning surface at start and end', 'Verify the warning strip shown in the stair graphic.'],
  'doors-01': ['Doors with clear width ≥ 0.80 m', 'Verify the indicated minimum clear door width.'],
  'doors-02': ['Alternative door where a revolving door exists', 'Revolving doors are not considered suitable for persons with disabilities; an accessible alternative entrance must be provided.'],
  'doors-03': ['Sliding doors with suitable rolling mechanism', 'Verify an appropriate and easy-to-operate sliding mechanism.'],
  'doors-04': ['Non-round door handles', 'Verify that handles can be operated easily and do not require difficult grasping or twisting.'],
  'doors-05': ['Window sill ≤ 0.85 m where applicable', 'Review sill heights and visibility for a wheelchair user.'],
  'doors-06': ['Emergency doors clearly identified', 'All emergency doors must be properly identified with signage.'],
  'elevator-01': ['Minimum clear cab 0.90 × 1.20 m', 'Verify the minimum clear internal dimensions of the elevator cab.'],
  'elevator-02': ['Minimum interior height 2.10 m', 'Verify the minimum clear interior height of the cab.'],
  'elevator-03': ['Interior control panel between 0.90 and 1.20 m', 'Verify the mounting height of interior controls.'],
  'elevator-04': ['Exterior call buttons between 0.90 and 1.20 m', 'Verify the mounting height of exterior call controls.'],
  'elevator-05': ['Raised controls with Braille equivalent', 'Verify tactile identification of interior and exterior controls.'],
  'elevator-06': ['Slip-resistant elevator floor', 'Verify a slip-resistant cab floor finish.'],
  'bath-01': ['Swing or sliding door ≥ 0.80 m', 'Verify minimum clear width and easy access to the room.'],
  'bath-02': ['Adequate maneuvering and transfer space', 'Compare the layout with the reference diagrams for wheelchair users.'],
  'bath-03': ['Toilet seat between 0.40 and 0.45 m', 'Verify the finished toilet seat height.'],
  'bath-04': ['Grab bars on both sides of the toilet', 'Provide lateral support on both sides of the toilet.'],
  'bath-05': ['At least one folding side grab bar', 'Verify a folding side grab bar according to the toilet arrangement.'],
  'bath-06': ['Grab bars Ø 3.5–5 cm and 5 cm from wall', 'Verify bar diameter, wall clearance, and firm anchorage.'],
  'bath-07': ['Pedestal-free lavatory at 0.80 m', 'Allow frontal or oblique wheelchair approach.'],
  'bath-08': ['Lever or single-control faucet', 'Avoid faucets that require difficult grasping or twisting.'],
  'bath-09': ['Bottom edge of mirror at 0.90 m', 'Verify an accessible mirror mounting height.'],
  'bath-10': ['Accessories between 0.70 and 1.20 m', 'Verify dispensers and frequently used accessories are within accessible reach.'],
  'bath-11': ['Adult urinal at 0.60 m — if provided', 'The Annex indicates 0.40 m for children and 0.60 m for adults.'],
  'bath-12': ['Uniform slip-resistant floor, dry and wet', 'Verify a continuous and safe floor finish under dry and wet conditions.'],
  'bath-13': ['Automatic lighting linked to door closing', 'Verify the automatic on/off system indicated by the Annex.'],
  'service-01': ['Push buttons, switches, bells and alarms between 0.90 and 1.00 m', 'Includes control buttons, buzzers, intercoms and similar devices.'],
  'service-02': ['Trash chute ≤ 1.00 m — if provided', 'The access opening must be flush with the wall and within the stated maximum height.'],
  'service-03': ['Fire detection perceptible to persons with disabilities', 'Verify that fire detection and alarm systems can be perceived by persons with disabilities.'],
  'service-04': ['Accessibility adaptations and services identified', 'All accessible adaptations or services must be properly identified with signage.'],
  'dining-01': ['At least one wheelchair-accessible table', 'Food service areas must provide at least one table that allows wheelchair approach.'],
  'outside-01': ['Pedestrian clear zone free of obstacles', 'Keep the accessible pedestrian circulation zone free of obstacles, projections and street furniture.'],
  'outside-02': ['Firm, uniform and slip-resistant paving', 'Verify continuity and safe performance of exterior walking surfaces.'],
  'outside-03': ['Grates and covers flush with paving', 'Grates and access covers must be anchored and flush, including on ramps and sloped surfaces.'],
  'outside-04': ['Pedestrian crossing ramp ≤ 8% and width ≥ 1.20 m', 'Verify the maximum slope and minimum width of the accessible crossing.'],
  'outside-05': ['Tactile strips for guidance and warning', 'Use tactile paving to indicate routes, obstacles and level changes.'],
  'outside-06': ['Street furniture outside pedestrian route', 'Street furniture must not obstruct pedestrian circulation.'],
  'parking-01': ['Permanent accessible parking reservation', 'The Annex requires permanently reserved parking for vehicles transporting persons with disabilities.'],
  'parking-02': ['Level, firm and slip-resistant parking surface', 'Verify the surface conditions of the accessible parking area.'],
  'parking-03': ['Horizontal and vertical signage', 'Verify complete accessible parking signage.'],
  'parking-04': ['Perpendicular/angled space: 3.50 × 5.00 m', 'Verify the indicated width and length.'],
  'parking-05': ['Parallel space: 3.50 × 6.50 m', 'Verify the indicated width and length.'],
  'signals-01': ['Visual contrast at doors, handrails, stairs, toilets, exits and level changes', 'Use contrasting colors to highlight important elements along the accessible route.'],
  'signals-02': ['Stable, slip-resistant floors without obstructive relief', 'Review performance under both dry and wet conditions.'],
  'signals-03': ['Warning strips at obstacles, direction changes, stairs, ramps and level changes', 'Verify tactile and visual floor warning surfaces.'],
  'signals-04': ['Orientation, directional and functional signs where required', 'Review logical, visible and understandable placement of information.'],
  'signals-05': ['Tactile signage between 0.70 and 1.20 m', 'Tactile signs should have contrasting, non-sharp raised information.'],
  'signals-06': ['Sign size according to A = L² / 2000', 'Apply the indicated formula for viewing distances below 50 m.'],
  'signals-07': ['International accessibility symbols correctly used', 'Verify the wheelchair, hearing loss and visual impairment symbols where applicable.'],
}

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function statusLabels(status) {
  if (status === 'done') return ['Cumple', 'Complies', 'done']
  if (status === 'na') return ['No aplica', 'N/A', 'na']
  return ['Pendiente', 'Pending', 'pending']
}

function reportDate(value) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date(value))
}

function groupEvidence(rows) {
  return rows.reduce((result, row) => {
    if (!result[row.check_id]) result[row.check_id] = []
    result[row.check_id].push(row)
    return result
  }, {})
}

function buildImages(images = []) {
  if (!images.length) return ''
  return `<div class="evidence">${images.map((image) => `
    <figure>
      <img src="${esc(image.url)}" alt="Evidence" />
      <figcaption>${esc(image.uploaded_by || '')} · ${esc(reportDate(image.created_at))}</figcaption>
    </figure>`).join('')}</div>`
}

export async function printAccessibilityReport({ projectName, actor, sections, checkState, pin }) {
  const reportWindow = window.open('', '_blank')
  if (!reportWindow) throw new Error('El navegador bloqueó la ventana del reporte.')

  reportWindow.document.write('<!doctype html><html><head><title>Preparando reporte…</title></head><body style="font-family:Arial,sans-serif;padding:32px">Preparando reporte bilingüe…</body></html>')
  reportWindow.document.close()

  let evidenceRows = []
  try {
    evidenceRows = await listAllEvidence({ pin, actor })
  } catch {
    // The report can still be generated without images.
  }
  const evidenceByCheck = groupEvidence(evidenceRows)

  const allItems = sections.flatMap((section) => section.items.map(([id, title, detail, source]) => ({ id, title, detail, source, sectionId: section.id })))
  const reviewed = allItems.filter((item) => (checkState[item.id]?.status || 'pending') !== 'pending').length
  const done = allItems.filter((item) => checkState[item.id]?.status === 'done').length
  const na = allItems.filter((item) => checkState[item.id]?.status === 'na').length
  const pending = allItems.length - reviewed
  const generated = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())

  const sectionsHtml = sections.map((section) => {
    const rows = section.items.map(([id, title, detail, source]) => {
      const state = checkState[id] || {}
      const [statusEs, statusEn, statusClass] = statusLabels(state.status)
      const [titleEn, detailEn] = english[id] || [title, detail]
      const note = state.note?.trim()
      return `<article class="item ${statusClass}">
        <div class="item-head">
          <div>
            <h3>${esc(title)}</h3>
            <h4>${esc(titleEn)}</h4>
          </div>
          <div class="status ${statusClass}">${esc(statusEs)}<small>${esc(statusEn)}</small></div>
        </div>
        <div class="criteria-grid">
          <div><b>Criterio</b><p>${esc(detail)}</p></div>
          <div><b>Criterion</b><p>${esc(detailEn)}</p></div>
        </div>
        <div class="source"><b>FUENTE / SOURCE:</b> ${esc(source)}</div>
        <div class="meta">
          <span><b>Responsable / Reviewer:</b> ${esc(state.responsible || '—')}</span>
          <span><b>Último cambio / Last update:</b> ${esc(reportDate(state.updated_at))}${state.updated_by ? ` · ${esc(state.updated_by)}` : ''}</span>
        </div>
        ${note ? `<div class="note"><b>Observación / Observation</b><p>${esc(note).replaceAll('\n', '<br>')}</p></div>` : ''}
        ${buildImages(evidenceByCheck[id])}
      </article>`
    }).join('')

    return `<section class="section">
      <h2>${esc(section.title)} <span>/ ${esc(sectionEnglish[section.id] || section.title)}</span></h2>
      ${rows}
    </section>`
  }).join('')

  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Reporte de Accesibilidad · ${esc(projectName)}</title>
<style>
  *{box-sizing:border-box} body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#172033;background:#fff;font-size:11px;line-height:1.4}
  .page{max-width:1050px;margin:0 auto;padding:28px}.actions{position:sticky;top:0;z-index:5;display:flex;justify-content:flex-end;gap:8px;padding:10px;background:#fff;border-bottom:1px solid #ddd}
  .actions button{border:1px solid #aaa;border-radius:7px;background:#fff;padding:9px 13px;font-weight:700;cursor:pointer}.actions .primary{background:#167a4f;color:#fff;border-color:#167a4f}
  header{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:end;border-bottom:3px solid #167a4f;padding-bottom:14px;margin-bottom:14px} header img{width:145px} h1{font-size:25px;margin:0 0 3px} header p{margin:0;color:#536174}.summary{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:14px 0 20px}.summary div{border:1px solid #d8dee6;border-radius:8px;padding:9px;background:#f8fafb}.summary b{display:block;font-size:15px;color:#167a4f}.section{margin:0 0 18px}.section>h2{font-size:15px;text-transform:uppercase;border-bottom:1px solid #b8c1cc;padding:8px 0;margin:0 0 8px}.section>h2 span{font-weight:500;color:#536174}.item{border:1px solid #d9dfe6;border-left:5px solid #c6ccd4;border-radius:8px;padding:10px 12px;margin:0 0 9px;break-inside:avoid}.item.done{border-left-color:#1c925f;background:#f5fbf7}.item.na{border-left-color:#8993a0;background:#fafafa}.item-head{display:flex;justify-content:space-between;gap:18px;align-items:start}.item h3{font-size:12px;margin:0 0 2px}.item h4{font-size:11px;font-weight:600;color:#536174;margin:0}.status{min-width:74px;text-align:center;border-radius:6px;padding:5px 7px;background:#fff5df;color:#955900;font-weight:800}.status.done{background:#e7f6ed;color:#086b43}.status.na{background:#edf0f3;color:#596273}.status small{display:block;font-size:8px;font-weight:700}.criteria-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px}.criteria-grid b,.note b{font-size:9px;text-transform:uppercase;color:#536174}.criteria-grid p,.note p{margin:3px 0 0}.source{display:inline-block;margin-top:7px;border:1px solid #68ab83;background:#dff5e7;color:#123b2c;border-radius:5px;padding:4px 6px;font-weight:700}.meta{display:flex;justify-content:space-between;gap:10px;margin-top:7px;padding-top:6px;border-top:1px dashed #d9dfe6;color:#536174}.note{margin-top:7px;background:#fff8e9;border:1px solid #ead49f;border-radius:6px;padding:7px}.evidence{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:8px}.evidence figure{margin:0;border:1px solid #d8dee6;border-radius:5px;overflow:hidden;background:#fff}.evidence img{width:100%;max-height:220px;object-fit:contain;display:block}.evidence figcaption{padding:4px 6px;color:#667085;font-size:8px}
  footer{margin-top:20px;border-top:1px solid #ccc;padding-top:8px;color:#667085;font-size:9px}
  @page{size:A4;margin:12mm} @media print{body{font-size:9.5px}.actions{display:none}.page{max-width:none;padding:0}.item{break-inside:avoid}.section{break-before:auto}.evidence img{max-height:150px}}
  /* REPORT-PRINT-POLISH-START */

  /* Smaller logo for print report */
  header img {
    width: 87px !important;
  }

  /* Keep report cards and inner blocks more stable across page breaks */
  .item {
    break-inside: avoid-page;
    page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .item-head,
  .criteria-grid,
  .meta,
  .note,
  .evidence,
  .source {
    break-inside: avoid-page;
    page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
  }

  @media print {
    header img {
      width: 87px !important;
    }

    .item {
      break-inside: avoid-page !important;
      page-break-inside: avoid !important;
      -webkit-column-break-inside: avoid !important;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }

    .item-head,
    .criteria-grid,
    .meta,
    .note,
    .evidence,
    .source {
      break-inside: avoid-page !important;
      page-break-inside: avoid !important;
      -webkit-column-break-inside: avoid !important;
    }
  }

  /* REPORT-PRINT-POLISH-END */
</style>
</head>
<body>
<div class="actions"><button onclick="window.close()">Cerrar</button><button class="primary" onclick="window.print()">Imprimir / Guardar PDF</button></div>
<div class="page">
<header><div><h1>Revisión de Accesibilidad</h1><p>Accessibility Review · Ley Autónoma Nº 80-14 · Anexo VII</p><p><b>${esc(projectName)}</b> · Revisado por / Reviewed by: ${esc(actor)}</p></div><img src="${esc(`${window.location.origin}/img/brand/menvic-logo.png`)}" alt="Menvic Arquitectura"></header>
<div class="summary">
  <div><span>Total</span><b>${allItems.length}</b></div>
  <div><span>Revisados / Reviewed</span><b>${reviewed}</b></div>
  <div><span>Cumplen / Comply</span><b>${done}</b></div>
  <div><span>Pendientes / Pending</span><b>${pending}</b></div>
  <div><span>N/A</span><b>${na}</b></div>
</div>
${sectionsHtml}
<footer>Generado / Generated: ${esc(generated)} · Fuente / Source: Ley Autónoma Nº 80-14 · Textos Ordenados · Anexo VII. Las observaciones se imprimen tal como fueron escritas.</footer>
</div>
<script>
  window.addEventListener('load', () => setTimeout(() => window.print(), 500));
</script>
</body></html>`

  reportWindow.document.open()
  reportWindow.document.write(html)
  reportWindow.document.close()
}
