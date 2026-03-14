import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "../context/ThemeContext"

/**
 * CanvasBg — Portfolio 2.0
 *
 * Pure canvas particle system ported from the HTML portfolio.
 * Replaces tsparticles entirely — no external dependency,
 * ~0KB bundle cost, full control.
 *
 * Features:
 * - Floating particles that bounce off edges
 * - Connecting lines between nearby particles (distance < 130px)
 * - Theme-aware colors (dark: #00f5c4 / light: #00a080)
 * - Mouse interaction — particles near cursor are slightly repelled
 * - Resize-aware — redraws on window resize
 * - RAF loop with proper cleanup on unmount
 */

const PARTICLE_COUNT   = 65
const CONNECT_DISTANCE = 130
const SPEED            = 0.35
const MIN_RADIUS       = 0.6
const MAX_RADIUS       = 1.8
const REPEL_DISTANCE   = 100
const REPEL_STRENGTH   = 1.2

function CanvasBg() {
  const canvasRef  = useRef(null)
  const particles  = useRef([])
  const rafId      = useRef(null)
  const mounted    = useRef(true)
  const mousePos   = useRef({ x: -9999, y: -9999 })
  const { isDark } = useTheme()

  // ── Build a single particle ──────────────────────────────
  const makeParticle = useCallback((w, h) => ({
    x:     Math.random() * w,
    y:     Math.random() * h,
    r:     Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
    dx:    (Math.random() - 0.5) * SPEED * 2,
    dy:    (Math.random() - 0.5) * SPEED * 2,
    alpha: Math.random() * 0.4 + 0.15,
  }), [])

  // ── Init / resize ────────────────────────────────────────
  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    particles.current = Array.from(
      { length: PARTICLE_COUNT },
      () => makeParticle(canvas.width, canvas.height)
    )
  }, [makeParticle])

  // ── Draw loop ────────────────────────────────────────────
  const draw = useCallback(() => {
    if (!mounted.current) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const w   = canvas.width
    const h   = canvas.height
    const color = isDark ? "0, 245, 196" : "0, 160, 128"

    ctx.clearRect(0, 0, w, h)

    const mx = mousePos.current.x
    const my = mousePos.current.y

    // update + draw particles
    for (const p of particles.current) {
      // mouse repel
      const ex  = p.x - mx
      const ey  = p.y - my
      const ed  = Math.sqrt(ex * ex + ey * ey)
      if (ed < REPEL_DISTANCE && ed > 0) {
        const force = (REPEL_DISTANCE - ed) / REPEL_DISTANCE
        p.dx += (ex / ed) * force * REPEL_STRENGTH * 0.02
        p.dy += (ey / ed) * force * REPEL_STRENGTH * 0.02
      }

      // clamp speed
      const speed = Math.sqrt(p.dx * p.dx + p.dy * p.dy)
      if (speed > SPEED * 2) {
        p.dx = (p.dx / speed) * SPEED * 2
        p.dy = (p.dy / speed) * SPEED * 2
      }

      p.x += p.dx
      p.y += p.dy

      // bounce
      if (p.x < 0 || p.x > w) p.dx *= -1
      if (p.y < 0 || p.y > h) p.dy *= -1

      // draw dot
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color}, ${p.alpha})`
      ctx.fill()
    }

    // draw connecting lines
    const ps = particles.current
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const dx   = ps[i].x - ps[j].x
        const dy   = ps[i].y - ps[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECT_DISTANCE) {
          const opacity = (1 - dist / CONNECT_DISTANCE) * 0.12
          ctx.beginPath()
          ctx.moveTo(ps[i].x, ps[i].y)
          ctx.lineTo(ps[j].x, ps[j].y)
          ctx.strokeStyle = `rgba(${color}, ${opacity})`
          ctx.lineWidth   = 0.6
          ctx.stroke()
        }
      }
    }

    rafId.current = requestAnimationFrame(draw)
  }, [isDark])

  // ── Mount / theme change ─────────────────────────────────
  useEffect(() => {
    mounted.current = true
    init()

    const onResize = () => {
      init()
    }
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }
    const onMouseLeave = () => {
      mousePos.current.x = -9999
      mousePos.current.y = -9999
    }

    window.addEventListener("resize",     onResize)
    window.addEventListener("mousemove",  onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)

    rafId.current = requestAnimationFrame(draw)

    return () => {
      mounted.current = false
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("resize",     onResize)
      window.removeEventListener("mousemove",  onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [init, draw])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        zIndex:        0,
        pointerEvents: "none",
        opacity:       0.55,
      }}
    />
  )
}

export default CanvasBg
