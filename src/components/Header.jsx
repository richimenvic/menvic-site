import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

const THEME_STORAGE_KEY = 'menvic-theme'

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = storedTheme || preferredTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }

  return (
    <header className="header">
      <div className="wrap nav">
        <NavLink to="/" className="brand brand-logo" aria-label="Menvic Arquitectura">
          <img src="/img/brand/menvic-logo.png" alt="Menvic Arquitectura" style={{ width: '160px', height: 'auto', display: 'block' }} />
        </NavLink>
        <div className="nav-actions">
          <nav className="nav-links">
            {links.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
          </nav>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}>
            {theme === 'dark' ? '☀︎ Claro' : '☾ Oscuro'}
          </button>
        </div>
      </div>
    </header>
  )
}
