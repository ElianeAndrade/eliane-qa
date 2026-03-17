import { useState, useRef, useEffect } from 'react'
import { useLocale } from '../contexts/LocaleContext'

const options = [
  { value: 'ptBR', flag: '🇧🇷', labelKey: 'lang.ptBR' },
  { value: 'en', flag: '🇺🇸', labelKey: 'lang.en' },
  { value: 'es', flag: '🇪🇸', labelKey: 'lang.es' },
]

function LanguageSelector() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  const current = options.find((o) => o.value === locale) || options[0]

  return (
    <div className={`lang-selector ${open ? 'lang-selector--open' : ''}`} ref={ref}>
      <button
        type="button"
        className="lang-selector-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.ariaLabel')}
      >
        <span className="lang-selector-flag" aria-hidden>{current.flag}</span>
        <span className="lang-selector-label mono">{t(current.labelKey)}</span>
        <svg className="lang-selector-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="lang-selector-dropdown" role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={locale === opt.value}
              className={`lang-selector-option ${locale === opt.value ? 'lang-selector-option--active' : ''}`}
              onClick={() => {
                setLocale(opt.value)
                setOpen(false)
              }}
            >
              <span className="lang-selector-flag" aria-hidden>{opt.flag}</span>
              <span>{t(opt.labelKey)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
