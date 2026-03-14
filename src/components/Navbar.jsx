import { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Navbar — Portfolio 2.0
 *
 * Visual DNA : HTML portfolio (Space Mono, uppercase labels, accent color logo)
 * Functionality : React portfolio (scroll detection, mobile menu, theme toggle)
 *
 * New additions:
 * - "// 01." style section labels replaced with clean letter links
 * - Active section highlight via IntersectionObserver
 * - Smooth mobile menu with staggered link animations
 * - Theme toggle shows moon/sun icon with smooth transition
 */

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
]

function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeSection, setActive]   = useState("")
  const { isDark, setIsDark }        = useTheme()

  // ── Scroll detection ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Active section via IntersectionObserver ───────────────
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  // ── Close menu on resize to desktop ──────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background:    scrolled ? "var(--nav-bg)"                : "transparent",
        backdropFilter: scrolled ? "blur(20px)"                   : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)"            : "none",
        borderBottom:  scrolled ? "1px solid var(--border)"      : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">

        {/* ── Logo ─────────────────────────────────────────── */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-lg font-bold tracking-widest"
          style={{ color: "var(--accent)", cursor: "none" }}
        >
          M<span style={{ color: "var(--text)" }}>.</span>Masood
        </motion.a>

        {/* ── Desktop links ────────────────────────────────── */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:flex gap-8 items-center list-none"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={label}>
                <a
                  href={href}
                  className="nav-link"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
                >
                  {label}
                  {/* active dot indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      style={{
                        position:   "absolute",
                        bottom:     "-6px",
                        left:       "50%",
                        transform:  "translateX(-50%)",
                        width:      "4px",
                        height:     "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </a>
              </li>
            )
          })}

          {/* ── Theme toggle ─────────────────────────────── */}
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="relative w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300"
              style={{
                background: isDark ? "var(--accent)" : "var(--border)",
                cursor: "none",
              }}
            >
              <motion.div
                animate={{ x: isDark ? 0 : 22 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full flex items-center justify-center text-xs select-none"
                style={{ background: "var(--bg)" }}
              >
                {isDark ? "🌙" : "☀️"}
              </motion.div>
            </button>
          </li>
        </motion.ul>

        {/* ── Mobile: theme + hamburger ────────────────────── */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="text-base select-none"
            style={{ cursor: "none" }}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1"
            style={{ cursor: "none" }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? {
                        rotate:  i === 0 ? 45  : i === 2 ? -45 : 0,
                        y:       i === 0 ? 8   : i === 2 ? -8  : 0,
                        opacity: i === 1 ? 0   : 1,
                      }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
                className="block w-5 h-px rounded-full"
                style={{ background: "var(--text)" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background:  "var(--nav-bg)",
              borderBottom: "1px solid var(--border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1 list-none">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.25 }}
                >
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-xs tracking-widest uppercase py-3 block transition-colors duration-200"
                    style={{
                      color: activeSection === href.slice(1)
                        ? "var(--accent)"
                        : "var(--text-muted)",
                      borderBottom: "1px solid var(--border)",
                      cursor: "none",
                    }}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
