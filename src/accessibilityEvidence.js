const SUPABASE_URL = 'https://ttnzobxsdeoazhqtiayw.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-UpgvMJTFdY4R7bRNUcVvg_1v2rqdXk'
const EVIDENCE_URL = `${SUPABASE_URL}/functions/v1/accessibility-evidence`
const PROJECT_SLUG = 'edificio-auxiliar-la-paz'
const MAX_UPLOAD_BYTES = 2 * 1024 * 1024
const MAX_EDGE = 1600

async function parseResponse(response) {
  let body = null
  try {
    body = await response.json()
  } catch {
    // Keep a generic error below.
  }

  if (!response.ok || body?.ok === false) {
    throw new Error(body?.error?.message || 'No se pudo procesar la imagen.')
  }
  return body
}

async function postJson(payload) {
  const response = await fetch(EVIDENCE_URL, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return parseResponse(response)
}

export async function listEvidence({ pin, actor, checkId }) {
  const body = await postJson({
    action: 'list',
    project_slug: PROJECT_SLUG,
    pin,
    actor,
    check_id: checkId,
  })
  return body?.images || []
}

export async function listAllEvidence({ pin, actor }) {
  const body = await postJson({
    action: 'list_all',
    project_slug: PROJECT_SLUG,
    pin,
    actor,
  })
  return body?.images || []
}

export async function deleteEvidence({ pin, actor, evidenceId }) {
  await postJson({
    action: 'delete',
    project_slug: PROJECT_SLUG,
    pin,
    actor,
    evidence_id: evidenceId,
  })
}

function scaledSize(width, height, maxEdge = MAX_EDGE) {
  const largest = Math.max(width, height)
  if (largest <= maxEdge) return { width, height }
  const scale = maxEdge / largest
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  }
}

async function canvasToWebp(canvas, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', quality))
}

export async function optimizeImage(file) {
  if (!file || !file.type?.startsWith('image/')) {
    throw new Error('Selecciona o pega una imagen.')
  }

  const bitmap = await createImageBitmap(file)
  let { width, height } = scaledSize(bitmap.width, bitmap.height)
  let bestBlob = null

  for (let dimensionPass = 0; dimensionPass < 4; dimensionPass += 1) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d', { alpha: false })
    if (!context) throw new Error('No se pudo optimizar la imagen.')
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, width, height)
    context.drawImage(bitmap, 0, 0, width, height)

    for (const quality of [0.82, 0.74, 0.66, 0.58]) {
      const blob = await canvasToWebp(canvas, quality)
      if (!blob) continue
      bestBlob = blob
      if (blob.size <= MAX_UPLOAD_BYTES) {
        bitmap.close?.()
        return {
          file: new File([blob], `${(file.name || 'captura').replace(/\.[^.]+$/, '')}.webp`, { type: 'image/webp' }),
          width,
          height,
          originalName: file.name || 'captura.png',
          bytes: blob.size,
        }
      }
    }

    width = Math.max(640, Math.round(width * 0.8))
    height = Math.max(360, Math.round(height * 0.8))
  }

  bitmap.close?.()
  if (!bestBlob || bestBlob.size > MAX_UPLOAD_BYTES) {
    throw new Error('La captura sigue siendo demasiado grande después de optimizarla.')
  }

  return {
    file: new File([bestBlob], `${(file.name || 'captura').replace(/\.[^.]+$/, '')}.webp`, { type: 'image/webp' }),
    width,
    height,
    originalName: file.name || 'captura.png',
    bytes: bestBlob.size,
  }
}

export async function uploadEvidence({ pin, actor, checkId, inputFile }) {
  const optimized = await optimizeImage(inputFile)
  const form = new FormData()
  form.append('action', 'upload')
  form.append('project_slug', PROJECT_SLUG)
  form.append('pin', pin)
  form.append('actor', actor)
  form.append('check_id', checkId)
  form.append('width', String(optimized.width))
  form.append('height', String(optimized.height))
  form.append('original_name', optimized.originalName)
  form.append('file', optimized.file)

  const response = await fetch(EVIDENCE_URL, {
    method: 'POST',
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY },
    body: form,
  })
  const body = await parseResponse(response)
  return body?.images || []
}

export function imageFileFromClipboard(event) {
  const items = Array.from(event.clipboardData?.items || [])
  const imageItem = items.find((item) => item.type?.startsWith('image/'))
  return imageItem?.getAsFile?.() || null
}
