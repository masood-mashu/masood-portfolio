import { motion } from "framer-motion"

/**
 * Marquee — Portfolio 2.0
 *
 * Ported from the HTML portfolio — this component didn't exist
 * in the React portfolio at all. It's the scrolling ticker that
 * sits between the Hero and About sections, acting as a visual
 * rhythm break and a quick skills summary.
 *
 * Upgrades over the HTML version:
 * - Fade-in entrance via Framer Motion (HTML version had no entrance)
 * - Pause on hover (inherited from index.css marquee-section class)
 * - Left + right gradient fade masks so items don't hard-cut at edges
 * - Easily configurable ITEMS array
 */

const ITEMS = [
  "Python",
  "Machine Learning",
  "Data Analysis",
  "Streamlit",
  "SQL",
  "Power BI",
  "Tableau",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Random Forest",
  "Deep Learning",
  "React",
  "Git & GitHub",
  "Jupyter",
]

// duplicate so the seamless loop always has enough content
const TRACK = [...ITEMS, ...ITEMS]

function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="marquee-section"
      style={{ position: "relative", zIndex: 2 }}
    >
      {/* Left fade mask */}
      <div
        aria-hidden="true"
        style={{
          position:   "absolute",
          top:        0,
          left:       0,
          width:      "80px",
          height:     "100%",
          background: "linear-gradient(to right, var(--bg), transparent)",
          zIndex:     3,
          pointerEvents: "none",
        }}
      />

      {/* Right fade mask */}
      <div
        aria-hidden="true"
        style={{
          position:   "absolute",
          top:        0,
          right:      0,
          width:      "80px",
          height:     "100%",
          background: "linear-gradient(to left, var(--bg), transparent)",
          zIndex:     3,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div className="marquee-track" aria-hidden="true">
        {TRACK.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot">★</span>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default Marquee
