function Contact() {
  return (
    <section id="contact" className="py-40 px-6 text-center">

      <h2 className="text-4xl font-bold mb-8">
        Let's Connect
      </h2>

      <p className="text-gray-400 mb-10">
        I'm open to internships, collaborations, and data science opportunities.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">

        <a
          href="https://github.com/masood-mashu"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="mailto:masoodmashu03@email.com"
          className="text-cyan-400 hover:underline"
        >
          Email
        </a>

      </div>

    </section>
  )
}

export default Contact