import { motion, useReducedMotion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

/**
 * Hero — Portfolio 2.0
 *
 * Visual DNA  : HTML portfolio (layout, tag, scroll indicator, orb)
 * Functionality: React portfolio (Framer Motion, TypeAnimation)
 *
 * New additions:
 * - Staggered entrance animations on every element
 * - Scroll indicator ported from HTML portfolio
 * - Three CTA buttons (Projects, Contact, Resume)
 * - Hero tag "// Data Science & Analytics" from HTML portfolio
 * - Subtle animated gradient orb behind the name
 */

// stagger container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const HERO_TAG = "// Data Science & Analytics"
const HERO_NAME = {
  first: "Mohammed",
  last: "Masood",
}
const HERO_SUBTITLE = "BIT Bangalore · CSE-DS · 3rd Year"
const HERO_TYPING_SEQUENCE = [
  "ML models.",
  2000,
  "data dashboards.",
  2000,
  "insights from data.",
  2000,
  "clean visualizations.",
  2000,
  "end-to-end pipelines.",
  2000,
]
const HERO_ACCESSIBLE_TYPING_TEXT = "I build ML models, data dashboards, insights from data, clean visualizations, and end-to-end pipelines."
const HERO_CTA_LINKS = [
  {
    href: "#projects",
    className: "btn-primary",
    label: "View Projects",
  },
  {
    href: "#contact",
    className: "btn-outline font-display",
    label: "Get In Touch",
    style: { borderRadius: "3px" },
  },
  {
    href: "/Mohammed-Masood-Resume.pdf",
    className: "btn-outline-dim font-display",
    label: "Resume ↗",
    style: { borderRadius: "3px" },
    target: "_blank",
    rel: "noopener noreferrer",
  },
]
const VISUALLY_HIDDEN_STYLE = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
}

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="hero-section min-h-screen flex flex-col justify-center relative overflow-hidden"
    >

      {/* ── Background orb ───────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:     "absolute",
          top:          "10%",
          right:        "-10%",
          width:        "520px",
          height:       "520px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, var(--accent2), transparent 70%)",
          filter:       "blur(100px)",
          opacity:      0.12,
          pointerEvents: "none",
          zIndex:       0,
          animation:    shouldReduceMotion ? "none" : "orbFloat 8s ease-in-out infinite",
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="show"
        style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
      >

        {/* Tag — "// Data Science & Analytics" */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            {HERO_TAG}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-display font-extrabold leading-none"
          style={{
            fontSize:    "clamp(40px, 8vw, 108px)",
            marginTop:   "20px",
            marginBottom: "8px",
            color:       "var(--text)",
          }}
        >
          {HERO_NAME.first}<br />
          <span className="hero-gradient">{HERO_NAME.last}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-mono"
          style={{
            fontSize:     "14px",
            color:        "var(--text-muted)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom:  "36px",
          }}
        >
          {HERO_SUBTITLE}
        </motion.p>

        {/* Typing animation */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          style={{
            fontSize:     "clamp(18px, 2.8vw, 26px)",
            color:        "var(--text)",
            marginBottom: "48px",
            minHeight:    "40px",
            fontFamily:   "'DM Sans', sans-serif",
          }}
        >
          <span style={VISUALLY_HIDDEN_STYLE}>{HERO_ACCESSIBLE_TYPING_TEXT}</span>
          <span aria-hidden="true">
            I build&nbsp;
            {shouldReduceMotion ? (
              <span style={{ color: "var(--accent)" }}>ML models.</span>
            ) : (
              <TypeAnimation
                sequence={HERO_TYPING_SEQUENCE}
                speed={55}
                repeat={Infinity}
                style={{ color: "var(--accent)" }}
              />
            )}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          {HERO_CTA_LINKS.map(({ href, className, label, rel, style, target }) => (
            <a
              key={label}
              href={href}
              className={className}
              style={style}
              target={target}
              rel={rel}
            >
              {label}
            </a>
          ))}
        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero
