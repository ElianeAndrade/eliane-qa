import { useLocale } from '../contexts/LocaleContext'

const MAX_STARS = 5

function Star({ filled }) {
  return (
    <span className="idiomas-star" aria-hidden>
      {filled ? '★' : '☆'}
    </span>
  )
}

function LanguageRow({ nameKey, stars, levelKey = null }) {
  const { t } = useLocale()
  return (
    <div className="idiomas-row">
      <span className="idiomas-name">{t(nameKey)}</span>
      <span className="idiomas-stars" aria-label={`${t(nameKey)}: ${stars} de ${MAX_STARS} estrelas`}>
        {Array.from({ length: MAX_STARS }, (_, i) => (
          <Star key={i} filled={i < stars} />
        ))}
      </span>
      {levelKey && (
        <span className="idiomas-level mono">{t(levelKey)}</span>
      )}
    </div>
  )
}

function Idiomas() {
  return (
    <div className="idiomas-list">
      <LanguageRow nameKey="idiomas.portuguese" stars={5} />
      <LanguageRow nameKey="idiomas.english" stars={3} levelKey="idiomas.levelTechnical" />
    </div>
  )
}

export default Idiomas
