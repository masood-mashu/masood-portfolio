import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillGroups = [
  {
    category: "Data & ML",
    emoji: "🤖",
    skills: [
      { name: "Python", level: 80 },
      { name: "Pandas / NumPy", level: 78 },
      { name: "Scikit-learn", level: 70 },
      { name: "Matplotlib / Seaborn", level: 72 },
      { name: "Streamlit", level: 75 },
    ]
  },
  {
    category: "Data & Databases",
    emoji: "🗄️",
    skills: [
      { name: "SQL", level: 68 },
      { name: "MS Excel", level: 75 },
      { name: "Power BI", level: 60 },
    ]
  },
  {
    category: "Web Dev",
    emoji: "🌐",
    skills: [
      { name: "React", level: 65 },
      { name: "HTML / CSS", level: 80 },
      { name: "PHP", level: 55 },
    ]
  },
  {
    category: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Git / GitHub", level: 70 },
      { name: "Jupyter Notebook", level: 80 },
    ]
  }
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium font-display" style={{ color: "var(--text)" }}>
          {name}
        </span>
        <span className="text-xs font-display" style={{ color: "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold section-heading">
          Skills
        </h2>
        <p className="mt-6 text-base" style={{ color: "var(--text-muted)" }}>
          Tools and technologies I work with
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            viewport={{ once: true }}
            className="card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.emoji}</span>
              <h3 className="font-display text-lg font-bold" style={{ color: "var(--accent)" }}>
                {group.category}
              </h3>
            </div>
            {group.skills.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={gi * 0.1 + si * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills
