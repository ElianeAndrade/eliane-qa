import { createContext, useContext, useState, useEffect } from 'react'
import { locales, defaultLocale, localeKeys } from '../locales'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-locale')
      return localeKeys.includes(saved) ? saved : defaultLocale
    } catch {
      return defaultLocale
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-locale', locale)
    } catch {}
  }, [locale])

  const t = (key) => {
    const keys = key.split('.')
    let value = locales[locale]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: setLocaleState, t, localeKeys }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
