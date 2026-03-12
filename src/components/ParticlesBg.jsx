import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBg() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      className="fixed inset-0 -z-10"

      options={{
        background: {
          color: "#000000"
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 60
          },

          color: {
            value: "#22d3ee"
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.2
          },

          move: {
            enable: true,
            speed: 1
          },

          opacity: {
            value: 0.5
          },

          size: {
            value: { min: 1, max: 3 }
          }

        }
      }}
    />
  )
}

export default ParticlesBg