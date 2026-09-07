import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Experience     from './components/Experience'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Certifications from './components/Certifications'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { LanguageProvider } from './i18n'

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#070714] min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        <LanguageSelector />
      </div>
    </LanguageProvider>
  )
}
