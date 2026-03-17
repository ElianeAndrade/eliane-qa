import { useLocale } from '../contexts/LocaleContext'

function Profile() {
  const { t } = useLocale()

  return (
    <div className="perfil-content">
      <p>{t('perfil.p1')}</p>
      <p>{t('perfil.p2')}</p>
    </div>
  )
}

export default Profile
