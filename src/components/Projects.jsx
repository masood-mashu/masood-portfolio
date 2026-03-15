import { motion } from "framer-motion"
import { Ship, Home, Eye, ExternalLink, Github } from "lucide-react"

/**
 * Projects — Portfolio 2.0
 *
 * Visual DNA  : HTML portfolio (project number, sharp cards, top accent line,
 *               project badge, section label)
 * Content     : React portfolio (accurate tech stacks, correct descriptions)
 *
 * New additions:
 * - "// 03. Projects" section label
 * - Project number labels "01 ——" style from HTML portfolio
 * - Both GitHub + Live links on every card
 * - Fixed House Price Predictor — Random Forest as primary model (not Ridge/Lasso)
 * - Status badges with correct styling
 * - Staggered scroll-triggered card animations
 */

const PROJECTS = [
  {
    number: "01",
    title:  "Titanic Survival Dashboard",
    desc:   "Full EDA pipeline with data cleaning, interactive Plotly visualizations, and a Random Forest ML model predicting passenger survival. Deployed live on Streamlit Cloud.",
    tech:   ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "Seaborn"],
    live:   "https://titanic-dashboard-analysiss.streamlit.app",
    github: "https://github.com/masood-mashu/titanic-dashboard",
    status: "Live",
    icon:   <Ship size={26} />,
  },
  {
    number: "02",
    title:  "House Price Predictor",
    desc:   "Regression-based ML project on the California Housing dataset. Random Forest as the primary model (R² ~80.5%), with full EDA, feature engineering, and an interactive Streamlit dashboard.",
    tech:   ["Python", "Random Forest", "Scikit-learn", "Streamlit", "Seaborn"],
    live:   null,
    github: null,
    status: "In Progress",
    icon:   <Home size={26} />,
  },
  {
    number: "03",
    title:  "Retinal Image Analysis",
    desc:   "Research-level major project — Explainable Multi-Task Learning for retinal image segmentation and pathology classification. Includes a research paper. Team of 4.",
    tech:   ["PyTorch", "Deep Learning", "XAI", "Medical Imaging", "Python"],
    live:   null,
    github: null,
    status: "Research",
    icon:   <Eye size={26} />,
  },
]

// badge style per status
const badgeStyle = (status) => {
  if (status === "Live") return {
    background: "rgba(0, 245, 196, 0.08)",
    color:      "var(--accent)",
    border:     "1px solid rgba(0, 245, 196, 0.3)",
  }
  if (status === "Research") return {
    background: "rgba(123, 97, 255, 0.08)",
    color:      "var(--accent2)",
    border:     "1px solid rgba(123, 97, 255, 0.3)",
  }
  return {
    background: "rgba(255,255,255,0.04)",
    color:      "var(--text-muted)",
    border:     "1px solid var(--border)",
  }
}

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
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
          // 03. Projects
        </motion.div>

        {/* ── Section title ───────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="font-display font-extrabold"
          style={{
            fontSize:     "clamp(32px, 5vw, 56px)",
            marginBottom: "60px",
            lineHeight:   "1.1",
          }}
        >
          Things I've Built
        </motion.h2>

        {/* ── Project cards grid ──────────────────────────── */}
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card project-card"
              style={{
                borderRadius: "4px",
                padding:      "36px",
                display:      "flex",
                flexDirection:"column",
              }}
            >

              {/* Top row — number + badge */}
              <div
                style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "center",
                  marginBottom:   "20px",
                }}
              >
                {/* Project number */}
                <span
                  className="font-mono"
                  style={{
                    fontSize:      "11px",
                    color:         "var(--text-muted)",
                    letterSpacing: "3px",
                  }}
                >
                  {p.number} ——
                </span>

                {/* Status badge */}
                <span
                  className="font-mono"
                  style={{
                    fontSize:      "9px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding:       "4px 10px",
                    ...badgeStyle(p.status),
                  }}
                >
                  {p.status === "Live" ? "Live ✦" : p.status}
                </span>
              </div>

              {/* Icon + title */}
              <div
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "12px",
                  marginBottom: "14px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>{p.icon}</span>
                <h3
                  className="font-display font-bold"
                  style={{ fontSize: "18px", color: "var(--text)", lineHeight: "1.3" }}
                >
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  color:        "var(--text-muted)",
                  fontSize:     "13px",
                  lineHeight:   "1.85",
                  marginBottom: "22px",
                  flex:         1,
                }}
              >
                {p.desc}
              </p>

              {/* Tech tags */}
              <div
                style={{
                  display:      "flex",
                  flexWrap:     "wrap",
                  gap:          "6px",
                  marginBottom: "24px",
                }}
              >
                {p.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono project-link-live"
                    style={{
                      display:       "inline-flex",
                      alignItems:    "center",
                      gap:           "6px",
                      fontSize:      "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color:         "var(--accent)",
                      textDecoration:"none",
                      transition:    "gap 0.3s",
                    }}
                  >
                    <ExternalLink size={12} />
                    View Live
                  </a>
                ) : null}

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono project-link-github"
                    style={{
                      display:       "inline-flex",
                      alignItems:    "center",
                      gap:           "6px",
                      fontSize:      "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                      textDecoration:"none",
                      transition:    "color 0.2s",
                    }}
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                ) : null}

                {!p.live && !p.github && (
                  <span
                    className="font-mono"
                    style={{
                      fontSize:      "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                    }}
                  >
                    Coming Soon...
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Projects
