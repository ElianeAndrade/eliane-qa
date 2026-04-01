import { course } from '../data/course'

function Cursos() {
  return (
    <div className="cursos-list">
      {course.map((item) => (
        <article key={item.id} className="cursos-item">
          <h3 className="cursos-course">{item.course}</h3>
          <p className="cursos-institution">{item.institution}</p>
          <p className="cursos-period mono">{item.period}</p>
        </article>
      ))}
    </div>
  )
}

export default Cursos