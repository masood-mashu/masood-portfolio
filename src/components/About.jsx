import { motion } from "framer-motion"
import { GraduationCap, School, MapPin, Briefcase, Target, Languages } from "lucide-react"

const stats = [
  { value: "7.8", label: "CGPA", suffix: "/10" },
  { value: "3+", label: "Projects Built", suffix: "" },
  { value: "5mo", label: "Internship Exp.", suffix: "" },
  { value: "4+", label: "Certifications", suffix: "" },
]

function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold section-heading">
          About Me
        </h2>
      </motion.div>

      {/* Two column layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
            I'm a 3rd-year Computer Science student specialising in Data Science at
            <span style={{ color: "var(--accent)" }}> Bangalore Institute of Technology</span>.
            I enjoy turning messy data into clear insights — and building dashboards that
            actually tell a story.
          </p>
          <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
            My current focus is becoming a strong <span style={{ color: "var(--accent)" }}>Data Analyst</span> — building end-to-end projects
            using Python, SQL, Machine Learning, and data visualization. I recently completed
            an internship at <span style={{ color: "var(--accent)" }}>Innovant I.T. Solutions</span> where I worked on system data analysis and reporting.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Long-term I'm aiming to grow into a <span style={{ color: "var(--accent2)" }}>Data Scientist</span> — and eventually work abroad on
            impactful AI problems.
          </p>
        </motion.div>

        {/* Right: quick facts */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="card rounded-2xl p-8 space-y-5"
        >
          {[
            [<GraduationCap size={20} />, "Degree", "B.E. CSE (Data Science)"],
            [<School size={20} />, "College", "BIT Bangalore"],
            [<MapPin size={20} />, "Location", "Bangalore, India"],
            [<Briefcase size={20} />, "Experience", "Innovant I.T. Solutions (5 months)"],
            [<Target size={20} />, "Goal", "Data Analyst → Data Scientist"],
            [<Languages size={20} />, "Languages", "English, Kannada, Hindi, Urdu"],
          ].map(([icon, label, value]) => (
            <div key={label} className="flex items-start gap-3">
              <span style={{ color: "var(--accent)", marginTop: "2px" }}>{icon}</span>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold font-display" style={{ color: "var(--text-muted)" }}>
                  {label}
                </span>
                <p className="font-medium mt-0.5" style={{ color: "var(--text)" }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="stat-card"
          >
            <div className="font-display text-3xl font-extrabold hero-gradient">
              {s.value}<span className="text-lg">{s.suffix}</span>
            </div>
            <div className="text-sm mt-1 font-display" style={{ color: "var(--text-muted)" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default About
