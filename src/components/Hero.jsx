import { motion } from "framer-motion"
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

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ padding: "120px 60px 80px" }}
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
          animation:    "orbFloat 8s ease-in-out infinite",
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
      >

        {/* Tag — "// Data Science & Analytics" */}
        <motion.div variants={itemVariants}>
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            // Data Science &amp; Analytics
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold leading-none"
          style={{
            fontSize:    "clamp(52px, 9vw, 108px)",
            marginTop:   "20px",
            marginBottom: "8px",
            color:       "var(--text)",
          }}
        >
          Mohammed<br />
          <span className="hero-gradient">Masood</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-mono"
          style={{
            fontSize:     "14px",
            color:        "var(--text-muted)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom:  "36px",
          }}
        >
          BIT Bangalore &nbsp;·&nbsp; CSE-DS &nbsp;·&nbsp; 3rd Year
        </motion.p>

        {/* Typing animation */}
        <motion.div
          variants={itemVariants}
          style={{
            fontSize:     "clamp(18px, 2.8vw, 26px)",
            color:        "var(--text)",
            marginBottom: "48px",
            minHeight:    "40px",
            fontFamily:   "'DM Sans', sans-serif",
          }}
        >
          I build&nbsp;
          <TypeAnimation
            sequence={[
              "ML models.",          2000,
              "data dashboards.",    2000,
              "insights from data.", 2000,
              "clean visualizations.", 2000,
              "end-to-end pipelines.", 2000,
            ]}
            speed={55}
            repeat={Infinity}
            style={{ color: "var(--accent)" }}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-outline font-display"
            style={{ borderRadius: "3px" }}
          >
            Get In Touch
          </a>
          <a
            href="/Mohammed-Masood-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dim font-display"
            style={{ borderRadius: "3px" }}
          >
            Resume ↗
          </a>
        </motion.div>

      </motion.div>

      {/* ── Responsive overrides ─────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 24px 80px !important;
          }
        }
        @media (max-width: 480px) {
          .scroll-indicator {
            left: 24px !important;
          }
        }
      `}</style>

    </section>
  )
}

export default Hero
