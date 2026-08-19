import { printAccessibilityReport as printBaseReport } from './accessibilityReportBase'

function escText(value) {
  return String(value ?? '').replace(/[<>]/g, '')
}

function appendObservationLanguage(document, container, label, value) {
  if (!value) return
  const block = document.createElement('div')
  block.className = 'report-observation-language'

  const title = document.createElement('b')
  title.textContent = label

  const paragraph = document.createElement('p')
  paragraph.textContent = value

  block.appendChild(title)
  block.appendChild(paragraph)
  container.appendChild(block)
}

export async function printAccessibilityReport(options) {
  const originalOpen = window.open
  let reportWindow = null

  window.open = (...args) => {
    reportWindow = originalOpen.call(window, ...args)
    return reportWindow
  }

  try {
    await printBaseReport(options)
  } finally {
    window.open = originalOpen
  }

  if (!reportWindow || reportWindow.closed) return

  const document = reportWindow.document
  const page = document.querySelector('.page')

  if (!page) return

  const itemIds = options.sections.flatMap((section) => section.items.map(([id]) => id))
  const reportItems = Array.from(document.querySelectorAll('.item'))

  reportItems.forEach((article, index) => {
    article.querySelector('.meta')?.remove()

    const id = itemIds[index]
    const state = options.checkState?.[id] || {}
    const noteEs = state.note?.trim() || ''
    const noteEn = state.note_en?.trim() || ''
    let noteBlock = article.querySelector('.note')

    if (!noteEs && !noteEn) {
      noteBlock?.remove()
      return
    }

    if (!noteBlock) {
      noteBlock = document.createElement('div')
      noteBlock.className = 'note'
      const evidence = article.querySelector('.evidence')
      if (evidence) article.insertBefore(noteBlock, evidence)
      else article.appendChild(noteBlock)
    }

    noteBlock.replaceChildren()
    appendObservationLanguage(document, noteBlock, 'OBSERVACIÓN', noteEs)
    appendObservationLanguage(document, noteBlock, 'OBSERVATION', noteEn)
  })

  document.querySelectorAll('.evidence figcaption').forEach((caption) => caption.remove())

  const originalHeader = page.querySelector('header')
  const headerParagraphs = originalHeader ? originalHeader.querySelectorAll('p') : []
  if (headerParagraphs.length) {
    const projectLine = headerParagraphs[headerParagraphs.length - 1]
    const projectName = document.createElement('b')
    projectName.textContent = options.projectName || ''
    projectLine.replaceChildren(projectName)
  }

  const style = document.createElement('style')

  style.textContent = `
    .report-observation-language + .report-observation-language {
      margin-top: 7px;
      padding-top: 7px;
      border-top: 1px dashed #ead49f;
    }

    .report-observation-language p {
      white-space: pre-wrap;
    }

    .report-print-layout {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    .report-print-layout > thead,
    .report-print-layout > tfoot {
      display: none;
    }

    .report-print-layout td {
      padding: 0;
      border: 0;
    }

    .report-menvic-header,
    .report-menvic-footer {
      display: none;
    }

    @page {
      size: A4;
      margin: 0 !important;
    }

    @media print {
      html,
      body {
        margin: 0 !important;
        padding: 0 !important;
      }

      .report-print-layout {
        width: 100% !important;
        border-collapse: collapse !important;
        border-spacing: 0 !important;
        table-layout: fixed;
      }

      .report-print-layout > thead {
        display: table-header-group !important;
      }

      .report-print-layout > tbody {
        display: table-row-group !important;
      }

      .report-print-layout > tfoot {
        display: table-footer-group !important;
      }

      .report-print-layout tr,
      .report-print-layout td {
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
      }

      /*
       * Header real de cada pagina.
       * Al formar parte de THEAD reserva espacio en todas las paginas.
       */
      .report-menvic-header {
        display: flex !important;
        height: 20mm;
        margin: 0 12mm;
        padding: 5mm 0 2.5mm;
        box-sizing: border-box;

        align-items: flex-start;
        justify-content: space-between;
        gap: 8mm;

        border-bottom: 0.45mm solid #167a4f;
        background: #fff;
        color: #172033;
        font-family: Arial, Helvetica, sans-serif;
      }

      .report-menvic-header-text {
        min-width: 0;
      }

      .report-menvic-header-title {
        display: block;
        font-size: 12pt;
        line-height: 1.15;
        font-weight: 800;
      }

      .report-menvic-header-project {
        display: block;
        margin-top: 1mm;
        font-size: 7.5pt;
        line-height: 1.2;
        color: #536174;
        font-weight: 600;
      }

      .report-menvic-header img {
        width: 22mm !important;
        height: auto !important;
        flex: 0 0 auto;
        margin: 0 !important;
      }

      /*
       * Footer repetido. TFOOT tambien reserva su espacio.
       */
      .report-menvic-footer {
        display: flex !important;
        height: 12mm;
        margin: 0 12mm;
        padding: 2.5mm 0 4mm;
        box-sizing: border-box;

        align-items: flex-end;
        justify-content: space-between;
        gap: 10mm;

        border-top: 0.3mm solid #b8c1cc;
        background: #fff;
        color: #536174;
        font: 700 8pt/1.2 Arial, Helvetica, sans-serif;
      }

      .report-menvic-footer span:last-child {
        text-align: right;
      }

      /*
       * El header original del reporte solo aparece en pantalla.
       * En papel lo sustituye el THEAD repetido.
       */
      .page > header {
        display: none !important;
      }

      .page {
        max-width: none !important;
        width: auto !important;
        margin: 0 !important;
        padding: 0 12mm !important;
      }

      .actions {
        display: none !important;
      }

      /* Compact cards: preserve legibility while fitting more review items per page. */
      body {
        font-size: 9px !important;
        line-height: 1.28 !important;
      }

      .summary {
        gap: 5px !important;
        margin: 8px 0 12px !important;
      }

      .summary div {
        padding: 6px 7px !important;
      }

      .summary b {
        font-size: 13px !important;
      }

      .section {
        margin-bottom: 10px !important;
      }

      .section > h2 {
        font-size: 12px !important;
        padding: 4px 0 !important;
        margin-bottom: 5px !important;
      }

      .item {
        padding: 6px 8px !important;
        margin-bottom: 5px !important;
        border-left-width: 4px !important;
      }

      .item-head {
        gap: 10px !important;
      }

      .item h3 {
        font-size: 10.5px !important;
        line-height: 1.2 !important;
        margin-bottom: 1px !important;
      }

      .item h4 {
        font-size: 9px !important;
        line-height: 1.2 !important;
      }

      .status {
        min-width: 62px !important;
        padding: 3px 5px !important;
        line-height: 1.15 !important;
      }

      .status small {
        font-size: 7px !important;
      }

      .criteria-grid {
        gap: 8px !important;
        margin-top: 4px !important;
      }

      .criteria-grid b,
      .note b {
        font-size: 7.5px !important;
      }

      .criteria-grid p,
      .note p {
        margin: 1px 0 0 !important;
      }

      .source {
        margin-top: 4px !important;
        padding: 2px 4px !important;
        font-size: 8px !important;
      }

      .note {
        margin-top: 4px !important;
        padding: 5px 6px !important;
      }

      .report-observation-language + .report-observation-language {
        margin-top: 4px !important;
        padding-top: 4px !important;
      }

      .evidence {
        gap: 5px !important;
        margin-top: 5px !important;
      }

      .evidence img {
        max-height: 105px !important;
      }
    }
  `

  document.head.appendChild(style)

  const table = document.createElement('table')
  table.className = 'report-print-layout'

  const thead = document.createElement('thead')
  const headRow = document.createElement('tr')
  const headCell = document.createElement('td')

  const runningHeader = document.createElement('div')
  runningHeader.className = 'report-menvic-header'
  runningHeader.innerHTML = `
    <div class="report-menvic-header-text">
      <span class="report-menvic-header-title">Revisión de Accesibilidad</span>
      <span class="report-menvic-header-project">${escText(options.projectName)}</span>
    </div>
    <img
      src="${window.location.origin}/img/brand/menvic-logo.png"
      alt="MENVIC Arquitectura"
    >
  `

  headCell.appendChild(runningHeader)
  headRow.appendChild(headCell)
  thead.appendChild(headRow)

  const tbody = document.createElement('tbody')
  const bodyRow = document.createElement('tr')
  const bodyCell = document.createElement('td')

  page.parentNode.insertBefore(table, page)

  bodyCell.appendChild(page)
  bodyRow.appendChild(bodyCell)
  tbody.appendChild(bodyRow)

  const tfoot = document.createElement('tfoot')
  const footRow = document.createElement('tr')
  const footCell = document.createElement('td')

  const footer = document.createElement('div')
  footer.className = 'report-menvic-footer'
  footer.innerHTML = `
    <span>MENVIC Arquitectura · ${escText(options.projectName)}</span>
    <span>Revisión de Accesibilidad</span>
  `

  footCell.appendChild(footer)
  footRow.appendChild(footCell)
  tfoot.appendChild(footRow)

  table.appendChild(thead)
  table.appendChild(tbody)
  table.appendChild(tfoot)
}