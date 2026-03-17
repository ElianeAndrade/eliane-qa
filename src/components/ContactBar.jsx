import { useLocale } from '../contexts/LocaleContext'
import { LINKEDIN_URL, WHATSAPP_NUMBER, EMAIL } from '../constants'

function ContactBar() {
  const { t } = useLocale()
  const whatsappMessage = encodeURIComponent(t('contact.whatsappMessage'))
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <footer className="contact-bar" role="contentinfo">
      <div className="contact-bar-inner">
        <a
          href={`mailto:${EMAIL}`}
          className="contact-bar-item"
          aria-label={t('contact.email')}
        >
          <svg className="contact-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="contact-bar-label">{t('contact.email')}</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-bar-item"
          aria-label={t('contact.whatsapp')}
        >
          <svg className="contact-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="contact-bar-label">{t('contact.whatsapp')}</span>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-bar-item"
          aria-label={t('contact.linkedin')}
        >
          <svg className="contact-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="contact-bar-label">{t('contact.linkedin')}</span>
        </a>
      </div>
    </footer>
  )
}

export default ContactBar
