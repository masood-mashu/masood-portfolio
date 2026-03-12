import { motion } from "framer-motion"

const projects = [
  {
    title: "Titanic Survival Dashboard",
    desc: "Full EDA + ML pipeline on the Titanic dataset. Data cleaning, feature engineering, visualizations, and a Random Forest model predicting passenger survival. Deployed live on Streamlit.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly"],
    live: "https://titanic-dashboard-analysiss.streamlit.app",
    github: "https://github.com/masood-mashu/titanic-dashboard",
    status: "Live ✓",
    emoji: "🚢"
  },
  {
    title: "House Price Predictor",
    desc: "Regression model using Ridge and Lasso on the California Housing dataset. Includes full EDA phase with correlation analysis, feature distribution, and model evaluation.",
    tech: ["Python", "Ridge/Lasso", "Scikit-learn", "Seaborn"],
    live: "#",
    github: "#",
    status: "In Progress",
    emoji: "🏠"
  },
  {
    title: "Retinal Image Analysis",
    desc: "Explainable Multi-Task Learning system for retinal image segmentation and pathology classification. Academic major project exploring medical AI.",
    tech: ["PyTorch", "Deep Learning", "Medical AI", "Explainability"],
    live: "#",
    github: "#",
    status: "In Progress",
    emoji: "👁️"
  },
]

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold section-heading">
          Projects
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="card rounded-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">{p.emoji}</span>
              <span
                className="text-xs px-3 py-1 rounded-full font-display font-semibold"
                style={{
                  background: p.status === "Live ✓" ? "rgba(34,211,238,0.12)" : "rgba(255,255,255,0.06)",
                  color: p.status === "Live ✓" ? "var(--accent)" : "var(--text-muted)",
                  border: `1px solid ${p.status === "Live ✓" ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                {p.status}
              </span>
            </div>

            <h3 className="font-display text-lg font-bold mb-3" style={{ color: "var(--text)" }}>
              {p.title}
            </h3>

            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="flex gap-4">
              {p.live !== "#" && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display font-semibold transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  Live Demo →
                </a>
              )}
              {p.github !== "#" && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display font-semibold transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  GitHub →
                </a>
              )}
              {p.live === "#" && p.github === "#" && (
                <span className="text-sm font-display" style={{ color: "var(--text-muted)" }}>
                  Coming soon...
                </span>
              )}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projects
