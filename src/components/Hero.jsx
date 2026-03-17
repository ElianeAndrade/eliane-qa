import { useLocale } from '../contexts/LocaleContext'

function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero">
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
