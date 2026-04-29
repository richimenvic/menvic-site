import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Studio from './pages/Studio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import { siteUrl, updateSeo } from './seo'

const seoByPath = {
  '/': ['Mendieta Studio | Estudio de Arquitectura en Córdoba', 'Mendieta Studio, estudio de arquitectura en Córdoba. Diseño, técnica y documentación rigurosa para proyectos residenciales, institucionales y comerciales.'],
  '/proyectos': ['Proyectos de Arquitectura | Mendieta Studio', 'Portfolio curado de Mendieta Studio con proyectos seleccionados por rigor técnico, calidad arquitectónica y coherencia editorial.'],
  '/estudio': ['Estudio de Arquitectura | Mendieta Studio', 'Conozca el estudio Mendieta Studio: filosofía, experiencia y enfoque profesional en arquitectura, técnica y documentación.'],
  '/servicios': ['Servicios de Arquitectura | Mendieta Studio', 'Servicios de Mendieta Studio: arquitectura, desarrollo de proyecto, documentación técnica, coordinación BIM y consultoría.'],
  '/contacto': ['Contacto | Mendieta Studio', 'Contacto de Mendieta Studio. Hablemos de su próximo proyecto arquitectónico en Córdoba, España.'],
  '/aviso-legal': ['Aviso Legal | Mendieta Studio', 'Aviso legal de Mendieta Studio con información del titular, condiciones de uso, propiedad intelectual y jurisdicción aplicable.'],
  '/politica-privacidad': ['Política de Privacidad | Mendieta Studio', 'Política de privacidad de Mendieta Studio conforme RGPD y LOPDGDD: finalidad, bases legales, conservación y derechos del usuario.'],
  '/politica-cookies': ['Política de Cookies | Mendieta Studio', 'Información sobre el uso de cookies en mendietastudio.com, finalidades, base legal y gestión de preferencias del usuario.'],
}

function SeoSync() {
  const location = useLocation()
  useEffect(() => {
    const key = Object.keys(seoByPath).find((path) => location.pathname === path) || '/'
    const [title, description] = seoByPath[key]
    updateSeo({ title, description, canonical: `${siteUrl}${location.pathname}` })
  }, [location.pathname])
  return null
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <SeoSync />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/projects.html" element={<Navigate to="/proyectos" replace />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="/project-templo-la-paz.html" element={<Navigate to="/proyectos/templo-la-paz" replace />} />
        <Route path="/project-templo-santa-cruz.html" element={<Navigate to="/proyectos/templo-santa-cruz" replace />} />
        <Route path="/project-prodimsa.html" element={<Navigate to="/proyectos/centro-social-corporativo-prodimsa" replace />} />
        <Route path="/estudio" element={<Studio />} />
        <Route path="/studio.html" element={<Navigate to="/estudio" replace />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/services.html" element={<Navigate to="/servicios" replace />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/contact.html" element={<Navigate to="/contacto" replace />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/aviso-legal.html" element={<Navigate to="/aviso-legal" replace />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-privacidad.html" element={<Navigate to="/politica-privacidad" replace />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
        <Route path="/politica-cookies.html" element={<Navigate to="/politica-cookies" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
