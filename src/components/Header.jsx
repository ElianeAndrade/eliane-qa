import { useState, useEffect } from 'react'
import { useLocale } from '../contexts/LocaleContext'
import LanguageSelector from './LanguageSelector'
import { GITHUB_REPO_URL } from '../constants'

const navItems = [
  { href: '#perfil', id: 'perfil', labelKey: 'nav.perfil' },
  { href: '#habilidades', id: 'habilidades', labelKey: 'nav.habilidades' },
  { href: '#tecnologias', id: 'tecnologias', labelKey: 'nav.tecnologias' },
  { href: '#trajetoria', id: 'trajetoria', labelKey: 'nav.trajetoria' },
  { href: '#empresas', id: 'empresas', labelKey: 'nav.empresas' },
  { href: '#contato', id: 'contato', labelKey: 'nav.contato' },
]

function Header({ onNavigate }) {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav">
        <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="logo">
          <span className="logo-bracket">[</span>portfólio<span className="logo-bracket">]</span>
        </a>
        <div className="nav-links">
          {navItems.map(({ href, id, labelKey }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={() => onNavigate?.(id)}
            >
              {t(labelKey)}
            </a>
          ))}
          <LanguageSelector />
        </div>
      </nav>
    </header>
  )
}

export default Header
