import { motion } from "framer-motion"
import {
  GraduationCap,
  School,
  MapPin,
  Briefcase,
  Target,
  Languages,
} from "lucide-react"

/**
 * About — Portfolio 2.0
 *
 * Content     : React portfolio (full info — CGPA, internship, goals)
 * Visual DNA  : HTML portfolio (section label style, stat boxes, borders)
 *
 * New additions:
 * - "// 01. About" section label from HTML portfolio
 * - Upgraded stats (2+ Live Projects, 8+ Tools, etc.)
 * - Internship at Innovant I.T. Solutions added (was missing from HTML portfolio)
 * - Stat boxes use HTML portfolio's sharp-border style
 * - Staggered scroll-triggered animations on every block
 */

const STATS = [
  { value: "2+",  label: "Live Projects"      },
  { value: "8+",  label: "Tools & Libraries"  },
  { value: "3rd", label: "Year CSE-DS"        },
  { value: "∞",   label: "Curiosity"          },
]

const QUICK_FACTS = [
  { icon: <GraduationCap size={18} />, label: "Degree",     value: "B.E. CSE (Data Science)"             },
  { icon: <School        size={18} />, label: "College",    value: "BIT Bangalore"                       },
  { icon: <MapPin        size={18} />, label: "Location",   value: "Bangalore, India"                    },
  { icon: <Briefcase     size={18} />, label: "Internship", value: "Innovant I.T. Solutions — 5 months" },
  { icon: <Target        size={18} />, label: "Goal",       value: "Data Analyst → Data Scientist"       },
  { icon: <Languages     size={18} />, label: "Languages",  value: "English, Kannada, Hindi, Urdu"       },
]

function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Section label ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-label"
        >
          // 01. About
        </motion.div>

        {/* ── Section title ───────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="font-display font-extrabold section-heading"
          style={{
            fontSize:     "clamp(32px, 5vw, 56px)",
            marginBottom: "60px",
            textAlign:    "left",
          }}
        >
          Who I Am
        </motion.h2>

        {/* ── Two column grid ─────────────────────────────── */}
        <div
          style={{
            marginBottom:        "60px",
          }}
          className="about-grid"
        >

          {/* Left — bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="font-sans"
              style={{
                color:        "var(--text-muted)",
                fontSize:     "17px",
                lineHeight:   "1.9",
                marginBottom: "20px",
              }}
            >
              I'm a <span style={{ color: "var(--accent)" }}>Data Science student</span> at
              BIT Bangalore, on a mission to turn raw data into actionable insights.
              I love building end-to-end data projects — from messy CSVs to deployed dashboards.
            </p>
            <p
              className="font-sans"
              style={{
                color:        "var(--text-muted)",
                fontSize:     "17px",
                lineHeight:   "1.9",
                marginBottom: "20px",
              }}
            >
              Currently grinding towards{" "}
              <span style={{ color: "var(--accent)" }}>Data Analyst</span> roles,
              with a longer-term goal of becoming a{" "}
              <span style={{ color: "var(--accent2)" }}>Data Scientist</span>.
              I recently completed an internship at{" "}
              <span style={{ color: "var(--accent)" }}>Innovant I.T. Solutions</span>{" "}
              where I worked on system data analysis and reporting.
            </p>
            <p
              className="font-sans"
              style={{
                color:      "var(--text-muted)",
                fontSize:   "17px",
                lineHeight: "1.9",
              }}
            >
              Outside of data, I'm exploring{" "}
              <span style={{ color: "var(--accent)" }}>web development</span>,
              researching{" "}
              <span style={{ color: "var(--accent)" }}>Explainable AI for medical imaging</span>,
              and preparing for off-campus placements. I believe in learning by building —
              every project teaches something new.
            </p>
          </motion.div>

          {/* Right — quick facts card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="card"
            style={{ borderRadius: "4px", padding: "36px" }}
          >
            {QUICK_FACTS.map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  display:      "flex",
                  alignItems:   "flex-start",
                  gap:          "14px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>
                  {icon}
                </span>
                <div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize:      "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                    }}
                  >
                    {label}
                  </span>
                  <p
                    className="font-display font-medium"
                    style={{ color: "var(--text)", marginTop: "3px", fontSize: "14px" }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── Stats row ───────────────────────────────────── */}
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <div
                className="font-display font-extrabold hero-gradient"
                style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize:      "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color:         "var(--text-muted)",
                  marginTop:     "10px",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default About
