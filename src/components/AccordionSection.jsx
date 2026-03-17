function AccordionSection({ id, sectionClass, title, isOpen, onToggle, componentTag, icon, children }) {
  return (
    <section
      id={id}
      className={`accordion-section ${sectionClass || ''}`}
      data-open={isOpen}
    >
      <button
        type="button"
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
        aria-label={title || componentTag}
      >
        <span className="accordion-title">
          {icon && <span className="accordion-title-icon">{icon}</span>}
          <span className="accordion-title-text">{title || componentTag}</span>
        </span>
        <span className="accordion-icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-content`}
        className="accordion-content"
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!isOpen}
        data-open={isOpen}
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </section>
  )
}

export default AccordionSection
