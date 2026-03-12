import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Mohammed Masood
      </motion.h1>

      <TypeAnimation
        sequence={[
          "I build Machine Learning models",
          2000,
          "I build Data Analysis Dashboards",
          2000,
          "I build AI-powered Applications",
          2000
        ]}
        speed={50}
        repeat={Infinity}
        className="text-gray-400 text-xl mb-8"
      />

    <div className="flex gap-4 flex-wrap justify-center">

    <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold"
    >
        View Projects
    </motion.a>

    <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black"
    >
        Contact Me
    </motion.a>

    <motion.a
        href="/resume.pdf"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400"
    >
        Download Resume
    </motion.a>

    </div>

    </section>
  )
}

export default Hero