import { useLocale } from '../contexts/LocaleContext'
import { education } from '../data/education'

function Formacao() {
  const { t } = useLocale()

  return (
    <div className="formacao-list">
      {education.map((item) => (
        <article key={item.id} className="formacao-item">
          <span className="formacao-type mono">
            {item.type === 'post' ? t('formacao.post') : t('formacao.graduation')}
          </span>
          <h3 className="formacao-course">{item.course}</h3>
          <p className="formacao-institution">{item.institution}</p>
          <p className="formacao-period mono">{item.period}</p>
        </article>
      ))}
    </div>
  )
}

export default Formacao
