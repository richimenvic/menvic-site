import { useCallback, useEffect, useRef, useState } from 'react'
import {
  deleteEvidence,
  imageFileFromClipboard,
  listEvidence,
  uploadEvidence,
} from '../accessibilityEvidence'
import '../accessibility-evidence.css'

function formatBytes(value) {
  if (!value) return ''
  if (value < 1024 * 1024) return `${Math.max(1, Math.round(value / 1024))} KB`
  return `${(value / (1024 * 1024)).toFixed(1)} MB`
}

export default function AccessibilityReviewDetail({
  id,
  detail,
  source,
  initialNote,
  pin,
  actor,
  onSaveNote,
}) {
  const [draftNote, setDraftNote] = useState(initialNote || '')
  const [dirty, setDirty] = useState(false)
  const [noteState, setNoteState] = useState('')
  const [images, setImages] = useState([])
  const [imageBusy, setImageBusy] = useState(false)
  const [imageError, setImageError] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (!dirty) setDraftNote(initialNote || '')
  }, [initialNote, dirty])

  const loadImages = useCallback(async () => {
    setImageError('')
    try {
      setImages(await listEvidence({ pin, actor, checkId: id }))
    } catch (error) {
      setImageError(error.message)
    }
  }, [actor, id, pin])

  useEffect(() => {
    loadImages()
  }, [loadImages])

  const saveNote = useCallback(async () => {
    if (!dirty) return
    setNoteState('Guardando…')
    try {
      await onSaveNote(draftNote)
      setDirty(false)
      setNoteState('Guardado')
      window.setTimeout(() => setNoteState(''), 1400)
    } catch {
      setNoteState('No se pudo guardar')
    }
  }, [dirty, draftNote, onSaveNote])

  const addImage = useCallback(async (file) => {
    if (!file) return
    setImageBusy(true)
    setImageError('')
    try {
      const next = await uploadEvidence({ pin, actor, checkId: id, inputFile: file })
      setImages(next)
    } catch (error) {
      setImageError(error.message)
    } finally {
      setImageBusy(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }, [actor, id, pin])

  const handlePaste = useCallback((event) => {
    const image = imageFileFromClipboard(event)
    if (!image) return
    event.preventDefault()
    addImage(image)
  }, [addImage])

  const removeImage = useCallback(async (evidenceId) => {
    setImageBusy(true)
    setImageError('')
    try {
      await deleteEvidence({ pin, actor, evidenceId })
      setImages((current) => current.filter((image) => image.evidence_id !== evidenceId))
    } catch (error) {
      setImageError(error.message)
    } finally {
      setImageBusy(false)
    }
  }, [actor, pin])

  return (
    <div className="access-detail-row access-detail-row-v2">
      <div className="access-criterion-panel">
        <strong>Criterio</strong>
        <p>{detail}</p>
        <div className="access-source-badge" aria-label={`Fuente normativa ${source}`}>
          <span>FUENTE</span>
          <b>{source}</b>
        </div>
      </div>

      <div className="access-review-panel">
        <label className="access-note-label">
          <span>
            Observación / diferencia encontrada
            {noteState && <small className="access-note-state">{noteState}</small>}
          </span>
          <textarea
            value={draftNote}
            placeholder="Ej.: Pasillo existente 1.12 m; corregir muro W-23. También puedes pegar una captura con Ctrl+V."
            onChange={(event) => {
              setDraftNote(event.target.value)
              setDirty(true)
              setNoteState('')
            }}
            onBlur={saveNote}
            onPaste={handlePaste}
            onKeyDown={(event) => {
              if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                event.preventDefault()
                saveNote()
              }
            }}
            rows="4"
          />
        </label>

        <div className="access-evidence-block" tabIndex="0" onPaste={handlePaste}>
          <div className="access-evidence-heading">
            <div>
              <strong>Capturas / evidencia</strong>
              <small>Pega una captura con Ctrl+V o selecciona una imagen. Se reduce y guarda como WebP.</small>
            </div>
            <button type="button" onClick={() => fileInputRef.current?.click()} disabled={imageBusy}>
              {imageBusy ? 'Procesando…' : '+ Añadir imagen'}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(event) => addImage(event.target.files?.[0])}
            />
          </div>

          {imageError && <div className="access-evidence-error">{imageError}</div>}

          {!images.length && !imageBusy && (
            <div className="access-evidence-empty">Pega aquí una captura de Revit, Bluebeam o del PDF.</div>
          )}

          {!!images.length && (
            <div className="access-evidence-grid">
              {images.map((image) => (
                <figure key={image.evidence_id} className="access-evidence-card">
                  <a href={image.url} target="_blank" rel="noreferrer" title="Abrir imagen">
                    <img src={image.url} alt={image.original_name || 'Captura de revisión'} loading="lazy" />
                  </a>
                  <figcaption>
                    <span>{image.width}×{image.height} · {formatBytes(image.bytes)}</span>
                    <button type="button" onClick={() => removeImage(image.evidence_id)} disabled={imageBusy} aria-label="Eliminar imagen">Eliminar</button>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
