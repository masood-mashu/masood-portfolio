import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Subtle bg circle */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent), var(--accent2))", top: "20%", left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
        style={{ border: "1px solid var(--border)", color: "var(--accent)", background: "var(--bg-card)" }}
      >
        Open to Internships & Data Roles
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 hero-gradient leading-tight w-full px-4"
      >
        Mohammed<br />Masood
      </motion.h1>

      {/* Type animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl md:text-2xl mb-10 h-8"
        style={{ color: "var(--text-muted)" }}
      >
        <TypeAnimation
          sequence={[
            "I build Machine Learning models",
            2000,
            "I build Data Analysis Dashboards",
            2000,
            "I build AI-powered Applications",
            2000,
            "CSE-DS @ BIT Bangalore",
            2000,
          ]}
          speed={55}
          repeat={Infinity}
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a href="#projects" className="btn-glow font-display">
          View Projects
        </a>
        <a href="#contact" className="btn-outline font-display">
          Contact Me
        </a>
        <a
          href="/Mohammed-Masood-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline font-display"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          ↓ Resume
        </a>
      </motion.div>



    </section>
  )
}

export default Hero
