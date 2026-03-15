import { motion } from "framer-motion"
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react"

/**
 * Contact — Portfolio 2.0
 *
 * Visual DNA  : HTML portfolio (section label, sharp cards, arrow links)
 * Content     : React portfolio (contact links, resume CTA)
 *
 * Key fix vs HTML portfolio:
 * - LinkedIn ADDED — was completely missing from HTML portfolio contact section
 * - Email fixed to @gmail.com (HTML portfolio had @email.com — wrong domain)
 *
 * New additions:
 * - "// 05. Contact" section label
 * - Two column layout — text left, links right
 * - Slide-in hover on contact link cards (translateX)
 * - Resume CTA button at the bottom
 * - Open to opportunities badge
 */

const CONTACTS = [
  {
    icon:    <Linkedin size={26} />,
    label:   "LinkedIn",
    display: "linkedin.com/in/mohammed-masood-blr03",
    href:    "https://www.linkedin.com/in/mohammed-masood-blr03",
  },
  {
    icon:    <Github size={26} />,
    label:   "GitHub",
    display: "github.com/masood-mashu",
    href:    "https://github.com/masood-mashu",
  },
  {
    icon:    <Mail size={26} />,
    label:   "Email",
    display: "masoodmashu03@gmail.com",
    href:    "mailto:masoodmashu03@gmail.com",
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
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
          // 05. Contact
        </motion.div>

        {/* ── Two column layout ───────────────────────────── */}
        <div className="contact-grid">

          {/* Left — text + resume CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Open to opportunities badge */}
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
                {/* Pulsing dot */}
                <span
                  className="pulse-dot"
                  style={{
                    width:        "6px",
                    height:       "6px",
                    borderRadius: "50%",
                    background:   "var(--accent)",
                    display:      "inline-block",
                  }}
                />
                Open to Opportunities
              </span>
            </div>

            <h2
              className="font-display font-extrabold"
              style={{
                fontSize:     "clamp(32px, 5vw, 52px)",
                lineHeight:   "1.1",
                marginBottom: "24px",
                color:        "var(--text)",
              }}
            >
              Let's<br />
              <span style={{ color: "var(--accent)" }}>Connect</span>
            </h2>

            <p
              style={{
                color:        "var(--text-muted)",
                fontSize:     "16px",
                lineHeight:   "1.85",
                marginBottom: "36px",
              }}
            >
              I'm currently open to{" "}
              <span style={{ color: "var(--text)" }}>Data Analyst internships</span>{" "}
              and off-campus opportunities. If you're looking for someone passionate
              about data who loves building things — let's talk.
            </p>

            {/* Resume CTA */}
            <a
              href="/Mohammed-Masood-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display:    "inline-flex",
                alignItems: "center",
                gap:        "10px",
              }}
            >
              <ExternalLink size={13} />
              Download Resume
            </a>
          </motion.div>

          {/* Right — contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {CONTACTS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="card contact-card"
                style={{
                  borderRadius:   "4px",
                  padding:        "20px 24px",
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "18px",
                  textDecoration: "none",
                }}
              >
                {/* Icon */}
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                  {c.icon}
                </span>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize:      "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                      marginBottom:  "4px",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="font-display font-medium"
                    style={{
                      fontSize:     "13px",
                      color:        "var(--text)",
                      whiteSpace:   "nowrap",
                      overflow:     "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.display}
                  </div>
                </div>

                {/* Arrow */}
                <span
                  style={{
                    color:      "var(--accent)",
                    fontSize:   "18px",
                    flexShrink: 0,
                    opacity:    0.5,
                    transition: "opacity 0.2s",
                  }}
                  className="contact-arrow"
                >
                  →
                </span>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Contact
