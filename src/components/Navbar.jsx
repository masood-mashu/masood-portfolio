import { useEffect, useState } from "react"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-cyan-400">
          M. Masood
        </h1>

        <ul className="flex gap-8 text-gray-300">

          <li className="hover:text-cyan-400 transition">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#projects">Projects</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#skills">Skills</a>
          </li>

          <li className="hover:text-cyan-400 transition">
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar