import { skills } from '../data/skills'

function Skills() {
  return (
    <div className="habilidades-grid">
      {skills.map((skill) => (
        <span key={skill} className="habilidade-tag">
          {skill}
        </span>
      ))}
    </div>
  )
}

export default Skills
