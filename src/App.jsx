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

const defaultDescription = 'Estudio de arquitectura en Santa Cruz, Bolivia, especializado en diseño arquitectónico, documentación técnica, gestión y coordinación de proyectos.'

const seoByPath = {
  '/': ['Menvic Arquitectura | Santa Cruz, Bolivia', defaultDescription],
  '/proyectos': ['Proyectos de Arquitectura | Menvic Arquitectura', 'Proyectos seleccionados de Menvic Arquitectura en Santa Cruz, Bolivia, con enfoque en diseño, técnica y coordinación.'],
  '/estudio': ['Estudio de Arquitectura | Menvic Arquitectura', 'Conozca Menvic Arquitectura: estudio de arquitectura en Santa Cruz, Bolivia, enfocado en diseño, documentación técnica y gestión de proyectos.'],
  '/servicios': ['Servicios de Arquitectura | Menvic Arquitectura', 'Servicios de Menvic Arquitectura: diseño arquitectónico, anteproyectos, documentación técnica, gestión, coordinación y apoyo constructivo.'],
  '/contacto': ['Contacto | Menvic Arquitectura', 'Contacto de Menvic Arquitectura en Santa Cruz, Bolivia. Teléfono y WhatsApp: 75019441.'],
  '/aviso-legal': ['Aviso Legal | Menvic Arquitectura', 'Aviso legal de Menvic Arquitectura con información del titular, condiciones de uso y datos de contacto.'],
  '/politica-privacidad': ['Política de Privacidad | Menvic Arquitectura', 'Política de privacidad de Menvic Arquitectura: tratamiento de datos, finalidad, conservación y derechos del usuario.'],
  '/politica-cookies': ['Política de Cookies | Menvic Arquitectura', 'Información sobre el uso de cookies en menvic.com, finalidades y gestión de preferencias del usuario.'],
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
