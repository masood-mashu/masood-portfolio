import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Database, Globe, Wrench } from "lucide-react"

/**
 * Skills — Portfolio 2.0
 *
 * Visual DNA  : HTML portfolio (section label, sharp borders, tight grid)
 * Functionality: React portfolio (animated skill bars, useInView)
 *
 * Key change vs React portfolio:
 * - Skill percentage NUMBERS removed — bars show proficiency visually
 *   without the arbitrary "Python = 80%" look
 * - Proficiency labels added instead: Beginner / Familiar / Proficient / Strong
 * - "// 04. Skills" section label from HTML portfolio
 * - 2px gap grid on skill groups (HTML portfolio style)
 * - Space Mono category titles
 */

const SKILL_GROUPS = [
  {
    category: "Data & ML",
    icon:     <Bot size={20} />,
    skills: [
      { name: "Python",               level: 80, label: "Strong"    },
      { name: "Pandas & NumPy",        level: 78, label: "Strong"    },
      { name: "Scikit-learn",          level: 72, label: "Proficient"},
      { name: "Matplotlib & Seaborn",  level: 74, label: "Proficient"},
      { name: "Streamlit",             level: 76, label: "Proficient"},
      { name: "Random Forest / ML",    level: 70, label: "Proficient"},
    ],
  },
  {
    category: "Analytics & BI",
    icon:     <Database size={20} />,
    skills: [
      { name: "SQL",                   level: 65, label: "Proficient"},
      { name: "MS Excel",              level: 75, label: "Proficient"},
      { name: "Power BI",              level: 60, label: "Familiar"  },
      { name: "Tableau",               level: 58, label: "Familiar"  },
      { name: "EDA & Data Cleaning",   level: 82, label: "Strong"    },
    ],
  },
  {
    category: "Web & Dev",
    icon:     <Globe size={20} />,
    skills: [
      { name: "React",                 level: 65, label: "Proficient"},
      { name: "HTML & CSS",            level: 80, label: "Strong"    },
      { name: "PHP",                   level: 52, label: "Familiar"  },
    ],
  },
  {
    category: "Tools",
    icon:     <Wrench size={20} />,
    skills: [
      { name: "Git & GitHub",          level: 72, label: "Proficient"},
      { name: "VS Code",               level: 90, label: "Strong"    },
      { name: "Jupyter Notebook",      level: 82, label: "Strong"    },
      { name: "Figma (Basic)",         level: 40, label: "Beginner"  },
    ],
  },
]

// label color map
const labelColor = {
  Strong:     "var(--accent)",
  Proficient: "var(--accent2)",
  Familiar:   "var(--text-muted)",
  Beginner:   "var(--text-muted)",
}

function SkillBar({ name, level, label, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} style={{ marginBottom: "18px" }}>
      {/* Name row */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          marginBottom:   "7px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color:    "var(--text)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {name}
        </span>
        {/* Label instead of % number */}
        <span
          className="font-mono"
          style={{
            fontSize:      "9px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color:         labelColor[label] || "var(--text-muted)",
          }}
        >
          {label}
        </span>
      </div>

      {/* Bar */}
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{
            duration: 1.3,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{
        position:   "relative",
        zIndex:     2,
        background: "rgba(255,255,255,0.01)",
      }}
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
          // 04. Skills
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
            marginBottom: "16px",
            lineHeight:   "1.1",
          }}
        >
          My Toolkit
        </motion.h2>

        {/* ── Legend ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            display:      "flex",
            gap:          "20px",
            flexWrap:     "wrap",
            marginBottom: "52px",
          }}
        >
          {Object.entries(labelColor).map(([lbl, color]) => (
            <span
              key={lbl}
              className="font-mono"
              style={{
                fontSize:      "9px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color,
                display:       "flex",
                alignItems:    "center",
                gap:           "6px",
              }}
            >
              <span
                style={{
                  width:        "6px",
                  height:       "6px",
                  borderRadius: "50%",
                  background:   color,
                  display:      "inline-block",
                  flexShrink:   0,
                }}
              />
              {lbl}
            </span>
          ))}
        </motion.div>

        {/* ── Skill group grid ────────────────────────────── */}
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{
                borderRadius: "4px",
                padding:      "36px",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "10px",
                  marginBottom: "28px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>{group.icon}</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize:      "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color:         "var(--accent2)",
                    fontWeight:    700,
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skill bars */}
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  label={skill.label}
                  delay={gi * 0.1 + si * 0.07}
                />
              ))}
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Skills
