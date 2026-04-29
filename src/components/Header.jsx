import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="wrap nav">
        <NavLink to="/" className="brand brand-logo" aria-label="Menvic Arquitectura">
          <img src="/img/brand/menvic-logo.svg" alt="Menvic Arquitectura" />
        </NavLink>
        <nav className="nav-links">
          {links.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
        </nav>
      </div>
    </header>
  )
}
