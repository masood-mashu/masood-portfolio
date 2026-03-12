import { motion } from "framer-motion"

function FeaturedProject() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="card rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "var(--accent)" }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs uppercase tracking-widest font-display font-bold px-3 py-1 rounded-full"
              style={{ background: "rgba(34,211,238,0.12)", color: "var(--accent)", border: "1px solid var(--accent)" }}
            >
              ⭐ Featured Project
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
                🚢 Titanic Survival<br />Dashboard
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                A complete data science project — from raw CSV to deployed web app.
                Includes EDA, data cleaning, feature engineering, and a Random Forest
                model with real-time predictions on a Streamlit dashboard.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://titanic-dashboard-analysiss.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow font-display text-sm"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/masood-mashu/titanic-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline font-display text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📊", label: "EDA", desc: "Full exploratory analysis" },
                { icon: "🤖", label: "ML Model", desc: "Random Forest classifier" },
                { icon: "📈", label: "Deployed", desc: "Live on Streamlit Cloud" },
                { icon: "🎨", label: "Dark UI", desc: "Plotly dark theme charts" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--tag-bg)", border: "1px solid var(--border)" }}
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="font-display font-bold text-sm mb-1" style={{ color: "var(--text)" }}>{f.label}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default FeaturedProject
