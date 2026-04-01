import { companies, apps } from '../data/companies'
import { useLocale } from '../contexts/LocaleContext'
import CompanyLogo from './CompanyLogo'

function CompanyCard({ item }) {
  return (
    <div className="empresa-card">
      <div className="empresa-card-logo-wrap">
        <CompanyLogo name={item.name} logo={item.logo} />
      </div>
      <span className="empresa-name">{item.name}</span>
    </div>
  )
}

function Companies() {
  const { t } = useLocale()

  return (
    <div className="empresas-content">
      <div className="empresas-module">
        <div className="empresas-grid">
          {companies.map((company) => (
            <CompanyCard key={company.id} item={company} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
