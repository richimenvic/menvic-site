import { printAccessibilityReport as printBaseReport } from './accessibilityReport'

function escText(value) {
  return String(value ?? '').replace(/[<>]/g, '')
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
  const style = document.createElement('style')
  style.textContent = `
    .report-menvic-footer { display: none; }
    @page { size: A4; margin: 0 !important; }
    @media print {
      html, body { margin: 0 !important; padding: 0 !important; }
      .page { max-width: none !important; padding: 12mm 12mm 18mm !important; }
      .report-menvic-footer {
        display: flex !important;
        position: fixed;
        left: 12mm;
        right: 12mm;
        bottom: 5mm;
        align-items: center;
        justify-content: space-between;
        gap: 10mm;
        margin: 0 !important;
        padding: 2.5mm 0 0 !important;
        border-top: 0.3mm solid #b8c1cc !important;
        background: #fff;
        color: #536174 !important;
        font: 700 8pt/1.2 Arial, Helvetica, sans-serif !important;
      }
      .report-menvic-footer span:last-child { text-align: right; }
    }
  `
  document.head.appendChild(style)

  const footer = document.createElement('div')
  footer.className = 'report-menvic-footer'
  footer.innerHTML = `<span>MENVIC Arquitectura · ${escText(options.projectName)}</span><span>Revisión de Accesibilidad</span>`
  document.body.appendChild(footer)
}
