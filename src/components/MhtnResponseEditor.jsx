import { useEffect, useState } from 'react'

const emptyResponse = { response_es: '', response_en: '', response_status: 'draft' }

export default function MhtnResponseEditor({ response, onSave }) {
  const [draft, setDraft] = useState(() => ({
    response_es: response?.response_es || '',
    response_en: response?.response_en || '',
    response_status: response?.response_status || 'draft',
  }))
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [saveError, setSaveError] = useState('')

  useEffect(() => {
    if (!dirty && !saving) setDraft(response ? {
      response_es: response.response_es || '',
      response_en: response.response_en || '',
      response_status: response.response_status || 'draft',
    } : emptyResponse)
  }, [response, dirty, saving])

  const change = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }))
    setDirty(true)
    setFeedback('')
    setSaveError('')
  }

  const save = async () => {
    if (!dirty || saving) return
    if (!draft.response_es.trim() && !draft.response_en.trim()) {
      setSaveError('Escribe una respuesta antes de guardarla.')
      return
    }
    if (draft.response_status === 'ready' && !draft.response_en.trim()) {
      setSaveError('Para marcar la respuesta como lista, escribe su versión en inglés.')
      return
    }
    setSaving(true)
    setSaveError('')
    try {
      const saved = await onSave({
        response_es: draft.response_es.trim(),
        response_en: draft.response_en.trim(),
        response_status: draft.response_status,
      })
      setDraft({
        response_es: saved.response_es || '',
        response_en: saved.response_en || '',
        response_status: saved.response_status || 'draft',
      })
      setDirty(false)
      setFeedback('Respuesta guardada.')
    } catch (error) {
      setSaveError(error.message || 'No se pudo guardar la respuesta.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="access-menvic-editor" aria-label="Respuesta de MENVIC a MHTN">
      <div className="access-menvic-editor-heading">
        <strong>Respuesta MENVIC a MHTN</strong>
        <small>{response?.updated_by ? `Última edición: ${response.updated_by}` : 'Sin respuesta guardada'}</small>
      </div>
      <label>
        Respuesta en español
        <textarea
          value={draft.response_es}
          maxLength={10000}
          rows={3}
          placeholder="Redactar la respuesta o aclaración de MENVIC."
          onChange={(event) => change('response_es', event.target.value)}
          onKeyDown={(event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
              event.preventDefault()
              save()
            }
          }}
        />
      </label>
      <label>
        Response in English
        <textarea
          value={draft.response_en}
          maxLength={10000}
          rows={3}
          placeholder="Write the English response for MHTN."
          onChange={(event) => change('response_en', event.target.value)}
          onKeyDown={(event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
              event.preventDefault()
              save()
            }
          }}
        />
      </label>
      <div className="access-menvic-editor-actions">
        <label>
          Estado interno
          <select
            value={draft.response_status}
            onChange={(event) => change('response_status', event.target.value)}
          >
            <option value="draft">Borrador</option>
            <option value="ready">Lista para enviar</option>
          </select>
        </label>
        <button type="button" onClick={save} disabled={!dirty || saving}>
          {saving ? 'Guardando…' : 'Guardar respuesta'}
        </button>
      </div>
      <small>Se guarda al pulsar «Guardar respuesta» o Ctrl+Enter. «Lista» no significa enviada ni aprobada.</small>
      {dirty && !saving && <small className="access-menvic-unsaved">Hay cambios sin guardar.</small>}
      {feedback && <small className="access-menvic-save-success" role="status">{feedback}</small>}
      {saveError && <small className="access-menvic-save-error" role="alert">{saveError}</small>}
    </section>
  )
}
