import { useLocale } from '../contexts/LocaleContext'

function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero">
      <p className="hero-label">
        <span className="mono">//</span> {t('hero.label')}
      </p>
      <h1 className="hero-title">
        {t('hero.title')}
        <br />
        <em>{t('hero.titleEm')}</em>
      </h1>
      <p className="hero-desc">
        {t('hero.desc')}
      </p>
    </section>
  )
}

export default Hero
