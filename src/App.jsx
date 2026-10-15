import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { LanguageProvider } from './i18n'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-clip">
        <Background />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 mx-auto max-w-[1200px] space-y-6 px-3 pb-8 sm:space-y-8 sm:px-6">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <LanguageSelector />
      </div>
    </LanguageProvider>
  )
}
