const companiesList = [
  { id: 'bb', name: 'Banco do Brasil', logo: '/logos/banco-brasil.png' },
  { id: 'bairesdev', name: 'BairesDev', logo: '/logos/bairesdev.png' },
  { id: 'bne', name: 'Bne', logo: '/logos/bne.png' },
  { id: 'safra', name: 'Banco Safra', logo: '/logos/banco-safra.png' },
  { id: 'cefaly', name: 'Cefaly Technology', logo: '/logos/cefaly.png' },
  { id: 'gol', name: 'Gol Linhas Aéreas', logo: '/logos/gol.png' },
  { id: 'madeiramadeira', name: 'Madeira Madeira', logo: '/logos/madeira-madeira.png' },
  { id: 'mastercard', name: 'MasterCard', logo: '/logos/mastercard.png' },
  { id: 'mateusmais', name: 'MateusMais', logo: '/logos/mateusmais.png' },
  { id: 'nouhau', name: 'Nouhau', logo: '/logos/nouhau.png' },
  { id: 'pf', name: 'Polícia Federal', logo: '/logos/policia-federal.png' },
  { id: 'pulse', name: 'Pulse', logo: '/logos/pulse.png' },
  { id: 'totvs', name: 'TOTVS', logo: '/logos/totvs.png' },
  { id: 'trueblue', name: 'TrueBlue (Staff Track)', logo: '/logos/trueblue.png' },
]

export const companies = companiesList.sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
)

const appsList = [
  { id: 'arboriza', name: 'Arboriza', logo: '/logos/arboriza.png' },
  { id: 'blappapp', name: 'BlappApp', logo: '/logos/blappapp.png' },
  { id: 'cefaly-app', name: 'Cefaly App', logo: '/logos/cefaly.png' },
  { id: 'conecta-recife', name: 'Conecta App Recife', logo: '/logos/conecta-recife.png' },
  { id: 'madeiramadeira-app', name: 'Madeira Madeira', logo: '/logos/madeira-madeira.png' },
  { id: 'mateusmais-app', name: 'MateusMais', logo: '/logos/mateusmais.png' },
  { id: 'siscaer-mobile', name: 'Siscaer Mobile', logo: '/logos/siscaer.png' },
  { id: 'whipapp', name: 'WhipApp', logo: '/logos/whipapp.png' },
]

export const apps = appsList.sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
)
