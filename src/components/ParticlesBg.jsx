import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useTheme } from "../context/ThemeContext"

function ParticlesBg() {
  const { isDark } = useTheme()

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const color = isDark ? "#22d3ee" : "#0e7490"

  return (
    <Particles
      key={isDark ? "dark" : "light"}
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: color },
          links: {
            enable: true,
            color: color,
            distance: 140,
            opacity: isDark ? 0.18 : 0.12,
          },
          move: { enable: true, speed: 0.8 },
          opacity: { value: isDark ? 0.45 : 0.3 },
          size: { value: { min: 1, max: 2.5 } },
        }
      }}
    />
  )
}

export default ParticlesBg
