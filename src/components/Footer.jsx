import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner footer-detailed">
        <div>
          <strong>Menvic Arquitectura</strong>
          <p className="footer-contact">Santa Cruz, Bolivia</p>
          <p className="footer-contact">menvic.com</p>
          <p className="footer-contact">Tel. / WhatsApp: 75019441</p>
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
