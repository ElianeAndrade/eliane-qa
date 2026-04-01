import { useState, useEffect } from 'react'
import { useLocale } from './contexts/LocaleContext'
import Header from './components/Header'
import Hero from './components/Hero'
import AccordionSection from './components/AccordionSection'
import { IconProfile, IconSkills, IconTechnologies, IconCareer, IconFormacao, IconCertifications, IconCourses, IconProjects, IconIdiomas, IconCompanies, IconContact } from './components/SectionIcons'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Career from './components/Career'
import Formacao from './components/Formacao'
import Idiomas from './components/Idiomas'
import Companies from './components/Companies'
import Contact from './components/Contact'
import ContactBar from './components/ContactBar'
import Noise from './components/Noise'
import Certificacoes from './components/Certifications'
import Cursos from './components/Courses'
import Projects from './components/ProjectsGit'

const SECTION_IDS = ['perfil', 'habilidades', 'tecnologias', 'trajetoria', 'projetos', 'formacao', 'certificacoes', 'cursos', 'idiomas', 'empresas', 'contato']

function App() {
  const { t } = useLocale()
  const [activeSection, setActiveSection] = useState('perfil')

  const openSection = (id) => setActiveSection((current) => (current === id ? null : id))

  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.slice(1)
      if (SECTION_IDS.includes(id)) setActiveSection(id)
    }
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Noise />
      <Header onNavigate={openSection} />
      <main>
        <Hero />

        <AccordionSection
          id="perfil"
          sectionClass="perfil"
          title={t('sections.perfil')}
          componentTag="Profile"
          icon={<IconProfile />}
          isOpen={activeSection === 'perfil'}
          onToggle={() => openSection('perfil')}
        >
          <Profile />
        </AccordionSection>

        <AccordionSection
          id="habilidades"
          sectionClass="habilidades"
          title={t('sections.habilidades')}
          componentTag="Skills"
          icon={<IconSkills />}
          isOpen={activeSection === 'habilidades'}
          onToggle={() => openSection('habilidades')}
        >
          <Skills />
        </AccordionSection>

        <AccordionSection
          id="tecnologias"
          sectionClass="tecnologias"
          title={t('sections.tecnologias')}
          componentTag="Technologies"
          icon={<IconTechnologies />}
          isOpen={activeSection === 'tecnologias'}
          onToggle={() => openSection('tecnologias')}
        >
          <Technologies />
        </AccordionSection>

        <AccordionSection
          id="trajetoria"
          sectionClass="trajetoria"
          title={t('sections.trajetoria')}
          componentTag="Career"
          icon={<IconCareer />}
          isOpen={activeSection === 'trajetoria'}
          onToggle={() => openSection('trajetoria')}
        >

          <Career />
        </AccordionSection>

        <AccordionSection
          id="projetos"
          sectionClass="projetos"
          title={t('sections.projetos')}
          componentTag="ProjectsGit"
          icon={<IconProjects />}
          isOpen={activeSection === 'projetos'}
          onToggle={() => openSection('projetos')}
        >
          <Projects />
        </AccordionSection>

        {/* FORMAÇÃO */}
        <AccordionSection
          id="formacao"
          sectionClass="formacao"
          title={t('sections.formacao')}
          componentTag="Formacao"
          icon={<IconFormacao />}
          isOpen={activeSection === 'formacao'}
          onToggle={() => openSection('formacao')}
        >
          <Formacao />
        </AccordionSection>

        {/* CERTIFICAÇÕES */}
        <AccordionSection
          id="certificacoes"
          sectionClass="formacao"
          title="Certificações"
          componentTag="Certificacoes"
          icon={<IconCertifications />}
          isOpen={activeSection === 'certificacoes'}
          onToggle={() => openSection('certificacoes')}
        >
          <Certificacoes />
        </AccordionSection>

        {/* CURSOS */}
        <AccordionSection
          id="cursos"
          sectionClass="formacao"
          title="Cursos"
          componentTag="Cursos"
          icon={<IconCourses />}
          isOpen={activeSection === 'cursos'}
          onToggle={() => openSection('cursos')}
        >
          <Cursos />
        </AccordionSection>

        <AccordionSection
          id="idiomas"
          sectionClass="idiomas"
          title={t('sections.idiomas')}
          componentTag="Idiomas"
          icon={<IconIdiomas />}
          isOpen={activeSection === 'idiomas'}
          onToggle={() => openSection('idiomas')}
        >
          <Idiomas />
        </AccordionSection>

         {/* Não vou usar no momento, ja adiconei nos projetos-trajetoria profissional 
        <AccordionSection
          id="empresas"
          sectionClass="empresas"
          title={t('sections.empresas')}
          componentTag="Companies"
          icon={<IconCompanies />}
          isOpen={activeSection === 'empresas'}
          onToggle={() => openSection('empresas')}
        >
          <Companies />
        </AccordionSection> */}

        <AccordionSection
          id="contato"
          sectionClass="contato"
          title={t('sections.contato')}
          componentTag="Contact"
          icon={<IconContact />}
          isOpen={activeSection === 'contato'}
          onToggle={() => openSection('contato')}
        >
          <Contact />
        </AccordionSection>

      </main>
      <ContactBar />
    </>
  )
}

export default App