import { projectsGit } from '../data/projectsGit'

function ProjectsGit() {
  return (
    <div className="projects-list">
      {projectsGit.map((item, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{item.name}</h3>
          <p className="project-desc">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver no GitHub →
          </a>
        </div>
      ))}
    </div>
  )
}

export default ProjectsGit