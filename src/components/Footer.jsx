/**
 * Footer — Portfolio 2.0
 *
 * Visual DNA : HTML portfolio (Space Mono, border-top, accent color)
 * Clean, minimal — no clutter
 */

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop:  "1px solid var(--border)",
        padding:    "32px 60px",
        display:    "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position:   "relative",
        zIndex:     2,
      }}
      className="footer-inner"
    >
      {/* Left */}
      <span
        className="font-mono"
        style={{
          fontSize:      "11px",
          letterSpacing: "1px",
          color:         "var(--text-muted)",
        }}
      >
        © {year}{" "}
        <span style={{ color: "var(--accent)" }}>Mohammed Masood</span>
        {" "}— Built with React + Vite
      </span>

      {/* Right */}
      <span
        className="font-mono"
        style={{
          fontSize:      "11px",
          letterSpacing: "1px",
          color:         "var(--text-muted)",
        }}
      >
        Bangalore, India 🇮🇳
      </span>

      {/* Responsive */}
      <style>{`
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column !important;
            gap: 10px !important;
            text-align: center !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
