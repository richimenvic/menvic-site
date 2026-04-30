import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './mobile-fixes.css'

window.__MENDIETA_APP_BOOTED = true

function resolveBasePath() {
  const { hostname, pathname } = window.location

  if (hostname.endsWith('github.io')) {
    const [, repository] = pathname.split('/')
    return repository ? `/${repository}/` : '/'
  }

  return '/'
}

const basePath = resolveBasePath()
const params = new URLSearchParams(window.location.search)
const redirectedPath = params.get('p')

if (redirectedPath) {
  const normalizedPath = redirectedPath.startsWith(basePath) || basePath === '/'
    ? redirectedPath
    : `${basePath.replace(/\/$/, '')}${redirectedPath}`

  window.history.replaceState(null, '', normalizedPath)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el contenedor raíz #root para montar React.')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
