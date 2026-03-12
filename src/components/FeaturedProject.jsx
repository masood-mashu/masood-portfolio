import { motion } from "framer-motion"

function FeaturedProject() {
  return (
    <section className="py-40 px-6 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Featured Project
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-10 hover:border-cyan-400 transition"
      >

        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
          Titanic Survival Dashboard
        </h3>

        <p className="text-gray-400 mb-6">
          A full data analysis and machine learning pipeline exploring the Titanic dataset.
          Includes data cleaning, feature engineering, visualizations, and a Random Forest
          model predicting passenger survival.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">

          <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
            Python
          </span>

          <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
            Pandas
          </span>

          <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
            Scikit-learn
          </span>

          <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
            Streamlit
          </span>

        </div>

        <div className="flex gap-6">

          <a
            href="https://titanic-dashboard-analysiss.streamlit.app"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/masood-mashu"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub Repo
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default FeaturedProject