import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import personal from "../data/personal.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const chipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "0.45rem 1rem",
  border: "1px solid #e0e0e0",
  borderRadius: "100px",
  fontSize: "0.8rem",
  color: "#333",
  textDecoration: "none",
  background: "#fff",
  fontWeight: 500,
};

// Smooth scroll helper
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>

      {/* ── Navbar ── */}
      {/* ── Navbar ── */}
<motion.nav
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.2rem 1.5rem",
    borderBottom: "1px solid #e5e5e5",
    position: "sticky",
    top: 0,
    background: "#fafaf8",
    zIndex: 50,
  }}
>
  <span
    onClick={() => scrollTo("about")}
    style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em", cursor: "pointer" }}
  >
    {personal.name.split(" ")[0]}
    <span style={{ color: "#888" }}>.dev</span>
  </span>

  {/* Desktop nav */}
  <div className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    {[
      { label: "About",      id: "about" },
      { label: "Experience", id: "experience" },
      { label: "Extras",     id: "extras" },
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => scrollTo(item.id)}
        style={{
          fontSize: "0.875rem", color: "#444",
          background: "none", border: "none",
          fontWeight: 500, cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          padding: 0,
        }}
      >
        {item.label}
      </button>
    ))}
  </div>
</motion.nav>

      {/* ── Hero ── */}
      <section
        id="about"
        style={{
          background: "#fafaf8",
          minHeight: "92vh",
          padding: "2rem 1.5rem 3rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top label */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "1.5rem" }}>
          <span style={{
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#888",
            borderBottom: "2px solid #111", paddingBottom: "2px",
          }}>
            Portfolio · {new Date().getFullYear()}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontSize: "clamp(2.8rem, 10vw, 7rem)",
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: "-0.04em", color: "#111",
            margin: "0 0 1.2rem", maxWidth: "900px",
          }}
        >
          {personal.name}
        </motion.h1>

        {/* Typing role */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(1rem, 4vw, 2rem)", fontWeight: 400,
            color: "#666", marginBottom: "2rem", letterSpacing: "-0.02em",
            display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap",
          }}
        >
          <TypeAnimation
            sequence={personal.roles.flatMap((r) => [r, 2000])}
            wrapper="span"
            repeat={Infinity}
            style={{ color: "#111", fontWeight: 600 }}
          />
          <span style={{ color: "#ccc" }}>— {personal.location}</span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: "1px", background: "#e0e0e0", marginBottom: "2rem" }}
        />

        {/* Two-column grid */}
        <motion.div
          {...fadeUp(0.4)}
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <p style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              lineHeight: 1.75, color: "#444", margin: "0 0 1.5rem",
            }}>
              {personal.bio}
            </p>


            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {Object.entries(personal.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.875rem", color: "#111", textDecoration: "none",
                    fontWeight: 600, borderBottom: "1.5px solid #111",
                    paddingBottom: "1px", textTransform: "capitalize",
                  }}
                >
                  {name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — education */}
          <div>
            <p style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#aaa", marginBottom: "1rem",
            }}>
              Education
            </p>

            {personal.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                style={{
                  padding: "1.25rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "12px",
                  marginBottom: "0.75rem",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111", margin: "0 0 4px" }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "#666", margin: 0 }}>
                    {edu.college}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111", margin: "0 0 2px" }}>
                    {edu.grade}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          {...fadeUp(0.9)}
          style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "12px" }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            style={{
              width: "20px", height: "32px", border: "2px solid #ccc",
              borderRadius: "10px", display: "flex", alignItems: "flex-start",
              justifyContent: "center", paddingTop: "5px",
            }}
          >
            <div style={{ width: "4px", height: "6px", borderRadius: "2px", background: "#999" }} />
          </motion.div>
          <span style={{ fontSize: "0.8rem", color: "#999", fontWeight: 500 }}>
            Scroll to explore
          </span>
        </motion.div>
      </section>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fafaf8; }
        a { transition: opacity 0.15s; }
        a:hover { opacity: 0.65; }
        html { scroll-behavior: smooth; }

        @media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  .desktop-nav { display: none !important; }
}
      `}</style>
    </div>
  );
}
