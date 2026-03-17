import { publicUrl } from '../constants'

function CompanyLogo({ name, logo, className = '' }) {
  const initial = name
    .replace(/\s*\([^)]*\)\s*/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  if (logo) {
    return (
      <img
        src={publicUrl(logo)}
        alt=""
        className={`company-logo company-logo--img ${className}`}
      />
    )
  }

  return (
    <div className={`company-logo company-logo--placeholder ${className}`} aria-hidden>
      <span className="company-logo-initial">{initial || '?'}</span>
    </div>
  )
}

export default CompanyLogo
