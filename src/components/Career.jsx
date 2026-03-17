import { projects } from '../data/projects'
import TreeNode from './TreeNode'

function Career() {
  return (
    <div className="tree">
      <div className="tree-line" aria-hidden="true" />
      {projects.map((project, index) => (
        <TreeNode key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default Career
