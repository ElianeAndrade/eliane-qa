const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
export const publicUrl = (path) => (path ? `${BASE}${path.startsWith('/') ? path : '/' + path}` : '')

export const GITHUB_REPO_URL = 'https://github.com/igorcoutinho/portifolio'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/igoralcoutinho/'
export const WHATSAPP_NUMBER = '5598991170011'
export const EMAIL = 'coutinho.igor@yahoo.com.br'
export const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
