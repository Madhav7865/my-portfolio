import { motion } from "framer-motion";
import extras from "../data/extra.js";

const categoryColors = {
  Anchoring:  { bg: "#fff7ed", border: "#fed7aa", tag: "#ea580c", text: "#7c2d12" },
  Research:   { bg: "#eff6ff", border: "#bfdbfe", tag: "#2563eb", text: "#1e3a8a" },
  Hackathon:  { bg: "#f0fdf4", border: "#bbf7d0", tag: "#16a34a", text: "#14532d" },
  Leadership: { bg: "#fdf4ff", border: "#e9d5ff", tag: "#9333ea", text: "#581c87" },
  Volunteer:  { bg: "#fff1f2", border: "#fecdd3", tag: "#e11d48", text: "#881337" },
};

export default function Extras() {
  return (
    <section
      id="extras"
      style={{
        background: "#fafaf8",
        padding: "5rem 4rem",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <p style={{
            fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#aaa", marginBottom: "0.75rem",
          }}>
            Beyond work
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: "-0.04em", color: "#111",
            margin: 0,
          }}>
            Extracurriculars.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "auto",
          gap: "12px",
        }}
          className="bento-grid"
        >
          {extras.map((item, i) => {
            const colors = categoryColors[item.category] || categoryColors["Volunteer"];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{
                  gridColumn: item.wide ? "span 2" : "span 1",
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: "16px",
                  padding: "1.75rem",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                className="bento-card"
              >
                {/* Emoji + category */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: colors.tag,
                    background: "rgba(255,255,255,0.7)",
                    padding: "3px 10px", borderRadius: "20px",
                    border: `1px solid ${colors.border}`,
                  }}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 700, lineHeight: 1.2,
                  color: "#111", margin: 0,
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "0.875rem", lineHeight: 1.7,
                  color: "#555", margin: 0, flex: 1,
                }}>
                  {item.description}
                </p>

                {/* Tag pill */}
                <div>
                  <span style={{
                    fontSize: "0.72rem", fontWeight: 600,
                    color: colors.text,
                    background: "rgba(255,255,255,0.6)",
                    padding: "3px 10px", borderRadius: "20px",
                    border: `1px solid ${colors.border}`,
                  }}>
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card {
            grid-column: span 1 !important;
          }
          #extras {
            padding: 3rem 1.25rem !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
