import { motion } from "framer-motion"
import { Star, BarChart2, Bot, TrendingUp, Palette, ExternalLink, Github } from "lucide-react"

/**
 * FeaturedProject — Portfolio 2.0
 *
 * Base        : React portfolio FeaturedProject component
 * Visual DNA  : HTML portfolio (sharp borders, section label, chamfered btn)
 *
 * New additions:
 * - "// 02. Featured" section label
 * - Top accent line on hover (project-card::before from index.css)
 * - GitHub button added alongside Live Demo
 * - Feature grid cards upgraded with sharper borders
 * - Animated entrance with stagger on feature cards
 * - Tech stack tags row at the bottom
 */

const FEATURES = [
  {
    icon:  <BarChart2 size={22} />,
    label: "Full EDA",
    desc:  "Exploratory analysis with Seaborn & Plotly",
  },
  {
    icon:  <Bot size={22} />,
    label: "ML Model",
    desc:  "Random Forest — 83%+ accuracy",
  },
  {
    icon:  <TrendingUp size={22} />,
    label: "Live Deploy",
    desc:  "Deployed on Streamlit Cloud",
  },
  {
    icon:  <Palette size={22} />,
    label: "Dark UI",
    desc:  "Plotly dark theme throughout",
  },
]

const TECH = ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "Seaborn"]

function FeaturedProject() {
  return (
    <section
      className="featured-section"
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
          // 02. Featured
        </motion.div>

        {/* ── Main card ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="card project-card"
          style={{
            borderRadius: "4px",
            padding:      "48px",
            position:     "relative",
            overflow:     "hidden",
          }}
        >

          {/* Background orb */}
          <div
            aria-hidden="true"
            style={{
              position:      "absolute",
              top:           "-60px",
              right:         "-60px",
              width:         "300px",
              height:        "300px",
              borderRadius:  "50%",
              background:    "radial-gradient(circle, var(--accent), transparent 70%)",
              filter:        "blur(80px)",
              opacity:       0.07,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>

            {/* Featured badge */}
            <div style={{ marginBottom: "28px" }}>
              <span
                className="font-mono"
                style={{
                  display:       "inline-flex",
                  alignItems:    "center",
                  gap:           "8px",
                  fontSize:      "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding:       "5px 14px",
                  background:    "rgba(0, 245, 196, 0.08)",
                  color:         "var(--accent)",
                  border:        "1px solid rgba(0, 245, 196, 0.3)",
                }}
              >
                <Star size={11} />
                Featured Project
              </span>
            </div>

            {/* Two column layout */}
            <div
              style={{
                display:             "grid",
                gridTemplateColumns: "1fr 1fr",
                gap:                 "48px",
                alignItems:          "center",
              }}
              className="featured-grid"
            >

              {/* Left — info */}
              <div>
                <h3
                  className="font-display font-extrabold"
                  style={{
                    fontSize:     "clamp(24px, 3vw, 34px)",
                    color:        "var(--text)",
                    marginBottom: "16px",
                    lineHeight:   "1.2",
                  }}
                >
                  Titanic Survival<br />
                  <span style={{ color: "var(--accent)" }}>Dashboard</span>
                </h3>

                <p
                  style={{
                    color:        "var(--text-muted)",
                    fontSize:     "15px",
                    lineHeight:   "1.85",
                    marginBottom: "28px",
                  }}
                >
                  A complete data science project — from raw CSV to deployed web app.
                  Includes full EDA, data cleaning, feature engineering, and a
                  Random Forest model with real-time survival predictions on an
                  interactive Streamlit dashboard.
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display:      "flex",
                    flexWrap:     "wrap",
                    gap:          "8px",
                    marginBottom: "32px",
                  }}
                >
                  {TECH.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <a
                    href="https://titanic-dashboard-analysiss.streamlit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      display:    "inline-flex",
                      alignItems: "center",
                      gap:        "8px",
                    }}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/masood-mashu/titanic-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline font-mono"
                    style={{
                      display:      "inline-flex",
                      alignItems:   "center",
                      gap:          "8px",
                      fontSize:     "12px",
                      padding:      "13px 24px",
                      borderRadius: "3px",
                    }}
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right — feature grid */}
              <div
                style={{
                  display:             "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap:                 "2px",
                }}
              >
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    viewport={{ once: true }}
                    className="feature-tile"
                    style={{
                      background: "var(--tag-bg)",
                      border:     "1px solid var(--border)",
                      padding:    "24px 20px",
                      transition: "border-color 0.3s",
                    }}
                  >
                    <div style={{ color: "var(--accent)", marginBottom: "10px" }}>
                      {f.icon}
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize:      "11px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color:         "var(--text)",
                        marginBottom:  "6px",
                        fontWeight:    700,
                      }}
                    >
                      {f.label}
                    </div>
                    <div
                      style={{
                        fontSize:   "12px",
                        color:      "var(--text-muted)",
                        lineHeight: "1.5",
                      }}
                    >
                      {f.desc}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default FeaturedProject
