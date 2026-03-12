import { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, setIsDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["About", "Projects", "Skills", "Contact"]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl font-bold"
          style={{ color: "var(--accent)" }}
        >
          M.Masood
        </motion.a>

        {/* Desktop Links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex gap-8 items-center"
        >
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link font-display">
                {link}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1"
              style={{
                background: isDark ? "var(--accent)" : "var(--border)",
              }}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ x: isDark ? 0 : 22 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full flex items-center justify-center text-xs"
                style={{ background: "var(--bg)" }}
              >
                {isDark ? "🌙" : "☀️"}
              </motion.div>
            </button>
          </li>
        </motion.ul>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-lg"
            aria-label="Toggle theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <motion.span
                key={i}
                animate={menuOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 8 : i === 2 ? -8 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : { rotate: 0, y: 0, opacity: 1 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: "var(--text)" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4 flex flex-col gap-4"
            style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--border)" }}
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link font-display text-base py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
