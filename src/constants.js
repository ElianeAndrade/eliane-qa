const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
export const publicUrl = (path) => (path ? `${BASE}${path.startsWith('/') ? path : '/' + path}` : '')

export const GITHUB_REPO_URL = 'https://github.com/ElianeAndrade'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/eliane-maria-de-andrade/'
export const WHATSAPP_NUMBER = '5544998945349'
export const EMAIL = 'emariaandrade@gmail.com'
export const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
