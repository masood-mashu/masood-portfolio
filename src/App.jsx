import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticlesBg from "./components/ParticlesBg"
import CursorGlow from "./components/CursorGlow"
import ScrollProgress from "./components/ScrollProgress"
import FeaturedProject from "./components/FeaturedProject"

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative">

      <ScrollProgress />

      <CursorGlow />
      <ParticlesBg />

      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}

export default App