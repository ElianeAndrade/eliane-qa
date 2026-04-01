import { certifications } from '../data/certification'

function Certificacoes() {
  return (
    <div className="certificacao-list">
      {certifications.map((item) => (
        <article key={item.id} className="certificacao-item">
          <h3 className="certificacao-course">{item.course}</h3>
          <p className="certificacao-institution">{item.institution}</p>
          <p className="certificacao-period mono">{item.period}</p>
        </article>
      ))}
    </div>
  )
}

export default Certificacoes