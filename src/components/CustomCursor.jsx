import { useEffect, useRef, useCallback } from "react"

/**
 * CustomCursor — Portfolio 2.0
 *
 * Dot  : follows mouse exactly (instant)
 * Ring : lags behind with spring-like lerp (smooth trailing)
 * Both use mix-blend-mode: difference — inverts whatever color is beneath,
 * creating the signature "light on dark / dark on light" effect from the HTML portfolio.
 *
 * Hover effect: dot scales up, ring grows — triggered on any
 * interactive element (a, button, [role="button"], .card, .project-card, .tag)
 */

function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  // current ring position (lerped)
  const ringPos = useRef({ x: 0, y: 0 })
  // target position (exact mouse)
  const mouse   = useRef({ x: 0, y: 0 })
  // raf handle
  const rafId   = useRef(null)
  // mounted flag
  const mounted = useRef(true)

  // ── Lerp helper ───────────────────────────────────────────
  const lerp = (a, b, t) => a + (b - a) * t

  // ── Animation loop ────────────────────────────────────────
  const animate = useCallback(() => {
    if (!mounted.current) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Dot: instant
    dot.style.left = mouse.current.x - 5 + "px"
    dot.style.top  = mouse.current.y - 5 + "px"

    // Ring: lerp toward mouse (0.10 = smooth lag)
    ringPos.current.x = lerp(ringPos.current.x, mouse.current.x - 17, 0.10)
    ringPos.current.y = lerp(ringPos.current.y, mouse.current.y - 17, 0.10)

    ring.style.left = ringPos.current.x + "px"
    ring.style.top  = ringPos.current.y + "px"

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    mounted.current = true

    const dot  = dotRef.current
    const ring = ringRef.current

    // ── Mouse move ─────────────────────────────────────────
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    // ── Hover selectors ────────────────────────────────────
    const HOVER_SELECTOR = [
      "a",
      "button",
      '[role="button"]',
      ".card",
      ".project-card",
      ".tag",
      ".stat-card",
      ".btn-primary",
      ".btn-glow",
      ".btn-outline",
      ".btn-outline-dim",
      ".nav-link",
    ].join(", ")

    const onMouseOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        dot?.classList.add("hovered")
        ring?.classList.add("hovered")
      }
    }
    const onMouseOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        dot?.classList.remove("hovered")
        ring?.classList.remove("hovered")
      }
    }

    // ── Hide/show on leave/enter window ────────────────────
    const onMouseLeave = () => {
      if (dot)  dot.style.opacity  = "0"
      if (ring) ring.style.opacity = "0"
    }
    const onMouseEnter = () => {
      if (dot)  dot.style.opacity  = "1"
      if (ring) ring.style.opacity = "1"
    }

    // ── Click pulse ────────────────────────────────────────
    const onMouseDown = () => {
      ring?.classList.add("clicking")
    }
    const onMouseUp = () => {
      ring?.classList.remove("clicking")
    }

    document.addEventListener("mousemove",  onMouseMove)
    document.addEventListener("mouseover",  onMouseOver)
    document.addEventListener("mouseout",   onMouseOut)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mousedown",  onMouseDown)
    document.addEventListener("mouseup",    onMouseUp)

    // kick off the loop
    rafId.current = requestAnimationFrame(animate)

    return () => {
      mounted.current = false
      cancelAnimationFrame(rafId.current)
      document.removeEventListener("mousemove",  onMouseMove)
      document.removeEventListener("mouseover",  onMouseOver)
      document.removeEventListener("mouseout",   onMouseOut)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mousedown",  onMouseDown)
      document.removeEventListener("mouseup",    onMouseUp)
    }
  }, [animate])

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null
  }

  return (
    <>
      {/* Dot — instant follower */}
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />

      {/* Ring — lagging follower */}
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />

      {/* Click pulse style injected inline so it's self-contained */}
      <style>{`
        .cursor-ring.clicking {
          transform: scale(0.75);
          opacity: 0.8;
        }
        @media (hover: none) {
          .cursor-dot,
          .cursor-ring { display: none; }
        }
      `}</style>
    </>
  )
}

export default CustomCursor
