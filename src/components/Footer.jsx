import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner footer-detailed">
        <div>
          <strong>Mendieta Studio</strong>
          <p className="footer-contact"><a href="mailto:contacto@mendietastudio.com">contacto@mendietastudio.com</a></p>
          <p className="footer-contact">Córdoba, España</p>
        </div>
        <nav className="legal">
          <NavLink to="/aviso-legal">Aviso Legal</NavLink>
          <NavLink to="/politica-privacidad">Política de Privacidad</NavLink>
          <NavLink to="/politica-cookies">Política de Cookies</NavLink>
        </nav>
      </div>
    </footer>
  )
}
