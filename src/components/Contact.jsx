import { motion } from "framer-motion"

const contacts = [
  {
    icon: "💼",
    label: "LinkedIn",
    value: "mohammed-masood-blr03",
    href: "https://www.linkedin.com/in/mohammed-masood-blr03",
    display: "linkedin.com/in/mohammed-masood-blr03"
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "masood-mashu",
    href: "https://github.com/masood-mashu",
    display: "github.com/masood-mashu"
  },
  {
    icon: "✉️",
    label: "Email",
    value: "masoodmashu03@gmail.com",
    href: "mailto:masoodmashu03@gmail.com",
    display: "masoodmashu03@gmail.com"
  },
]

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold section-heading">
          Let's Connect
        </h2>
        <p className="mt-6 text-base max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          Open to internships, data analyst roles, collaborations, and interesting projects.
          Drop me a message!
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="card rounded-xl px-6 py-5 flex items-center gap-5 group"
          >
            <span className="text-3xl">{c.icon}</span>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider font-display font-semibold mb-1"
                style={{ color: "var(--text-muted)" }}>
                {c.label}
              </div>
              <div className="font-medium font-display transition-colors duration-200"
                style={{ color: "var(--text)" }}>
                {c.display}
              </div>
            </div>
            <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent)" }}>
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="/Mohammed-Masood-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-block font-display"
        >
          ↓ Download Resume
        </a>
      </motion.div>

    </section>
  )
}

export default Contact
