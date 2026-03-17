import { technologies } from '../data/technologies'
import { useLocale } from '../contexts/LocaleContext'

const MAX_SCORE = 10

function Technologies() {
  const { t } = useLocale()

  return (
    <>
      <p className="tecnologias-desc">
        {t('tecnologias.desc')}
      </p>
      <div className="tech-list">
        {technologies.map((tech) => (
          <div key={tech.id} className="tech-item">
            <div className="tech-header">
              <div className="tech-name-wrap">
                {tech.icon && (
                  <img
                    src={tech.icon}
                    alt=""
                    className="tech-icon"
                  />
                )}
                <span className="tech-name">{tech.name}</span>
              </div>
              <span className="tech-years mono">
                {tech.years} {tech.years === 1 ? t('tecnologias.year') : t('tecnologias.years')}
              </span>
            </div>
            <div className="tech-score-wrap">
              <div className="tech-score-bar" role="progressbar" aria-valuenow={tech.score} aria-valuemin={0} aria-valuemax={MAX_SCORE}>
                <div
                  className="tech-score-fill"
                  style={{ width: `${(tech.score / MAX_SCORE) * 100}%` }}
                />
              </div>
              <span className="tech-score-num mono">{tech.score}/10</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Technologies
