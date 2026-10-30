// Report intentionally scoped to MENVIC questions, not the full accessibility checklist.
// Prints only data already loaded through the PIN-protected RPC.

export function isMenvicQuestion(comment) {
  return Boolean(
    comment?.status_code === 'question'
      && /ricardo|sandra|javier|menvic/i.test(comment.assigned_to || ''),
  )
}

const safe = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char])

const nl = (value) => safe(value).replace(/\r?\n/g, '<br>')

const titleFor = (entry) => entry.item?.title || 'Consulta general sobre el Templo'
const formatDate = (value) => value
  ? new Intl.DateTimeFormat('es-ES', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value))
  : '—'

export function printMhtnConsultations({ projectName, actor, items, mhtnById, responsesById, onlyPending = false }) {
  const rows = items
    .map((item) => ({ item, comment: mhtnById[item.id], response: responsesById[item.id] }))
    .filter(({ comment, response }) => isMenvicQuestion(comment)
      && (!onlyPending || response?.response_status !== 'ready'))

  const general = mhtnById.__general__
  if (isMenvicQuestion(general)
      && (!onlyPending || responsesById.__general__?.response_status !== 'ready')) {
    rows.push({ item: null, comment: general, response: responsesById.__general__ })
  }

  if (!rows.length) throw new Error('No hay consultas de MHTN para imprimir con este filtro.')

  const page = window.open('', '_blank')
  if (!page) throw new Error('El navegador bloqueó la ventana de impresión. Habilita las ventanas emergentes para este sitio.')

  const cards = rows.map((entry, index) => {
    const responseStatus = entry.response?.response_status === 'ready' ? 'Lista para enviar' :
      entry.response?.response_es?.trim() || entry.response?.response_en?.trim() ? 'Borrador' : 'Sin respuesta'
    return `
      <article class="question">
        <div class="question-head">
          <h2>${safe(index + 1)}. ${safe(titleFor(entry))}</h2>
          <div class="tag">${safe(responseStatus)}</div>
        </div>
        <div class="meta">Punto ${safe(entry.comment.item_number || 'General')} · Dirigido a: ${safe(entry.comment.assigned_to)}</div>
        ${entry.item ? `<div class="criteria">Criterio: ${nl(entry.item.detail)}</div>` : ''}
        <h3>Consulta de MHTN · Español</h3>
        <p>${nl(entry.comment.comment_es)}</p>
        <h3>Original de MHTN · English</h3>
        <p class="english" lang="en">${nl(entry.comment.comment_en)}</p>
        <div class="answer">
          <h3>Respuesta MENVIC · Español</h3>
          <p>${entry.response?.response_es?.trim() ? nl(entry.response.response_es) : '<em>Pendiente de redactar.</em>'}</p>
          <h3>MENVIC response · English</h3>
          <p class="english" lang="en">${entry.response?.response_en?.trim() ? nl(entry.response.response_en) : '<em>Pending.</em>'}</p>
          <div class="reply-meta">
            ${entry.response?.updated_by ? `Última edición: ${safe(entry.response.updated_by)} · ${safe(formatDate(entry.response.updated_at))}` : 'Respuesta aún no registrada'}
          </div>
        </div>
      </article>`
  }).join('\n')

  const reportTitle = onlyPending ? 'Consultas MHTN pendientes de respuesta' : 'Consultas de MHTN a MENVIC'
  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${safe(reportTitle)} · ${safe(projectName)}</title>
<style>
  @page { size: A4; margin: 15mm 15mm 17mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: white; color: #1e293b; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 10pt; line-height: 1.45; }
  .header { border-bottom: 2px solid #253f60; padding-bottom: 12px; margin-bottom: 15px; }
  .brand { font-weight: 800; font-size: 14pt; letter-spacing: .01em; }
  h1 { margin: 5px 0 2px; font-size: 18pt; color: #172d49; }
  .subtitle, .metadata { font-size: 9pt; color: #475569; }
  .metadata { margin: 8px 0 0; }
  .notice { background: #f2f5f8; padding: 8px 10px; font-size: 8.5pt; border: 1px solid #d8e2eb; margin-bottom: 15px; }
  article.question { padding: 13px 0 15px; border-top: 1px solid #bdc8d4; break-inside: avoid-page; page-break-inside: avoid; }
  .question-head { display: flex; gap: 12px; align-items: flex-start; justify-content: space-between; }
  h2 { margin: 0; font-size: 12pt; color: #172d49; }
  .tag { flex: none; padding: 3px 8px; border: 1px solid #acbdce; border-radius: 4px; font-size: 8pt; color: #233c57; }
  .meta, .criteria { color: #586a7e; font-size: 8.5pt; margin-top: 5px; }
  .criteria { margin: 9px 0 11px; }
  h3 { margin: 12px 0 3px; font-size: 9pt; color: #253f60; }
  p { margin: 0; white-space: normal; overflow-wrap: anywhere; }
  .english { color: #46576a; }
  .answer { background: #f8fafc; border-left: 3px solid #7898b8; padding: 7px 12px 9px; margin-top: 11px; }
  .answer h3:first-child { margin-top: 2px; }
  .reply-meta { margin-top: 10px; font-size: 8pt; color: #64748b; }
  .footer { font-size: 8pt; color: #64748b; margin-top: 16px; }
  @media screen {
    body { max-width: 900px; padding: 24px 35px; margin: 0 auto; }
  }
  @media print {
    .header { break-after: avoid-page; }
  }
</style>
</head>
<body>
<header class="header">
  <div class="brand">MENVIC arquitectura</div>
  <h1>${safe(reportTitle)}</h1>
  <div class="subtitle">${safe(projectName)} · Edificio Auxiliar, La Paz</div>
  <div class="metadata">${rows.length} ${rows.length === 1 ? 'consulta' : 'consultas'} · Preparado por: ${safe(actor)} · ${safe(formatDate(new Date()))}</div>
</header>
<div class="notice">Documento interno de coordinación. Los estados «Borrador» y «Lista para enviar» no acreditan envío, aprobación ni modificación de los Contract Documents.</div>
${cards}
<div class="footer">Fuente: comentarios de MHTN recopilados en la revisión de accesibilidad de Ancillary. Se excluyen las verificaciones asignadas a Albert y los puntos que no constituyen consultas dirigidas a MENVIC.</div>
</body>
</html>`

  page.document.open()
  page.document.write(html)
  page.document.close()
  page.focus()
  page.setTimeout(() => page.print(), 250)
  return rows.length
}
