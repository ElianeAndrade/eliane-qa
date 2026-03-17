import { useLocale } from '../contexts/LocaleContext'
import { LINKEDIN_URL, WHATSAPP_NUMBER, EMAIL } from '../constants'

function Contact() {
  const { t } = useLocale()
  const whatsappMessage = encodeURIComponent(t('contact.whatsappMessage'))
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <div className="contato-grid">
      <a
        href={`mailto:${EMAIL}`}
        className="contato-item"
        aria-label={t('contact.email')}
      >
        <span className="contato-label mono">{t('contact.email')}</span>
        <span className="contato-value">{EMAIL}</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="contato-item"
        aria-label={t('contact.whatsapp')}
      >
        <span className="contato-label mono">{t('contact.whatsapp')}</span>
        <span className="contato-value">+55 98 99117-0011</span>
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contato-item"
        aria-label={t('contact.linkedin')}
      >
        <span className="contato-label mono">{t('contact.linkedin')}</span>
        <span className="contato-value">/igoralcoutinho</span>
      </a>
    </div>
  )
}

export default Contact
