import { useRef, useEffect, useState } from 'react'

function TreeNode({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeoutId
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Math.min(index * 80, 400)
            timeoutId = setTimeout(() => setVisible(true), delay)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [index])

  const className = [
    'tree-node',
    visible && 'is-visible',
    project.isRoot && 'tree-node--root',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      ref={ref}
      className={className}
      data-year={project.year}
    >
      <div className="node-dot" aria-hidden />
      <div className="node-content">
        <header className="node-header">
          <span className="node-period mono">{project.year}</span>
          <div className="node-company">
            {project.logo && (
              <img
                src={`${import.meta.env.BASE_URL}${project.logo}`}
                alt={project.company}
                className="node-logo"
              />
            )}
            <h3 className="node-title">{project.company}</h3>
          </div>
          {project.clients && (
            <p className="node-clients">{project.clients}</p>
          )}
          <p className="node-role">{project.role}</p>
        </header>
        <p className="node-desc">{project.description}</p>
        <ul className="node-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default TreeNode
