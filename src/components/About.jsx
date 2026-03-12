import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-40 px-6 max-w-4xl mx-auto text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <p className="text-gray-400 leading-relaxed text-lg">

        I'm Mohammed Masood, a Computer Science student specializing in Data Science at
        Bangalore Institute of Technology. I enjoy working with data, building machine
        learning models, and creating dashboards that turn raw data into useful insights.

        <br /><br />

        My current focus is becoming a strong Data Analyst by developing projects using
        Python, SQL, Machine Learning, and data visualization tools. I enjoy building
        end-to-end data projects — from data cleaning and analysis to model building and
        deployment.

        <br /><br />

        Long-term, I aim to grow into a Data Scientist and work on impactful real-world
        problems using AI and data.

      </p>

    </section>
  )
}

export default About