import { ThemeProvider } from "./context/ThemeContext"

// ── Fixed / background layer ──────────────────────────────
import ScrollProgress  from "./components/ScrollProgress"
import CustomCursor    from "./components/CustomCursor"
import CanvasBg        from "./components/CanvasBg"

// ── Layout ────────────────────────────────────────────────
import Navbar          from "./components/Navbar"
import Footer          from "./components/Footer"

// ── Sections ──────────────────────────────────────────────
import Hero            from "./components/Hero"
import Marquee         from "./components/Marquee"
import About           from "./components/About"
import FeaturedProject from "./components/FeaturedProject"
import Projects        from "./components/Projects"
import Skills          from "./components/Skills"
import Contact         from "./components/Contact"

/**
 * App — Portfolio 2.0
 *
 * Layer order (z-index):
 *  0  — CanvasBg (canvas particles, position fixed)
 *  1  — Noise overlay (::before on .portfolio-root, in index.css)
 *  2  — Orb glows (position fixed, pointer-events none)
 *  2  — All section content (position relative, z-index 2)
 *  50 — Navbar (position fixed)
 *  9998 — CustomCursor ring
 *  9999 — CustomCursor dot + ScrollProgress bar
 *
 * Removed vs React portfolio:
 *  ❌ ParticlesBg   → replaced by CanvasBg
 *  ❌ CursorGlow    → replaced by CustomCursor
 */

function AppContent() {
  return (
    <div className="portfolio-root min-h-screen relative transition-colors duration-500">

      {/* ── Fixed UI layer ─────────────────────────────── */}
      <ScrollProgress />
      <CustomCursor />
      <CanvasBg />

      {/* ── Glow orbs (from HTML portfolio) ───────────── */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      {/* ── Navigation ────────────────────────────────── */}
      <Navbar />

      {/* ── Page content ──────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <Marquee />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <Footer />

    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
