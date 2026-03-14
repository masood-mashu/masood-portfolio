import { motion, useScroll, useSpring } from "framer-motion"

/**
 * ScrollProgress — Portfolio 2.0
 *
 * Thin accent-colored bar at the very top of the page.
 * useSpring smooths out the scroll jitter for a buttery feel.
 *
 * Upgrade over React portfolio version:
 * - useSpring added for smooth interpolation (original used raw useScroll)
 * - Uses var(--accent) so it switches color correctly with theme toggle
 * - z-index 9999 so it sits above the navbar
 */

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping:   30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position:     "fixed",
        top:          0,
        left:         0,
        right:        0,
        height:       "2px",
        background:   "var(--accent)",
        transformOrigin: "left",
        zIndex:       9999,
        pointerEvents: "none",
      }}
    />
  )
}

export default ScrollProgress
