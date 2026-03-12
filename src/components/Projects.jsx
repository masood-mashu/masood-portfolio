import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Titanic Survival Dashboard",
      desc: "EDA + ML model predicting passenger survival.",
      tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      live: "https://titanic-dashboard-analysiss.streamlit.app",
      github: "https://github.com/masood-mashu"
    },
    {
      title: "House Price Predictor",
      desc: "Regression model using Ridge and Lasso.",
      tech: ["Python", "Regression", "Scikit-learn"],
      live: "#",
      github: "#"
    },
    {
      title: "Retinal Image Analysis",
      desc: "Deep learning system for retinal disease detection.",
      tech: ["PyTorch", "Deep Learning", "Medical AI"],
      live: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-40 px-6 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-105 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">

              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}

            </div>

            <div className="flex gap-4">

              <a
                href={p.live}
                className="text-cyan-400 hover:underline text-sm"
              >
                Live Demo
              </a>

              <a
                href={p.github}
                className="text-cyan-400 hover:underline text-sm"
              >
                GitHub
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Projects