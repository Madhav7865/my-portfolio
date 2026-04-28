import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experience from "../data/experience.js";

const INTERVAL = 5000;

export default function Experience() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tick, setTick] = useState(0); // used to reset progress bar key
  const intervalRef = useRef(null);

  // Start/restart the timer
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % experience.length);
      setTick((t) => t + 1);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Manual dot click — restarts timer from 0
  const goTo = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
    setTick((t) => t + 1);
    startTimer(); // reset timer so it counts full 5s from click
  };

  return (
    <>
      <style>{`
        .exp-section {
          background: #0a0a0a;
          min-height: 100vh;
          position: relative;
        }
        .exp-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 4rem;
          overflow: visible;
        }
        .exp-inner {
          display: flex;
          gap: 5rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          align-items: center;
        }
        .exp-left { width: 260px; flex-shrink: 0; }
        .exp-right { flex: 1; position: relative; height: 460px; }
        .exp-dots { display: flex; flex-direction: column; gap: 14px; margin-top: 2rem; }

        @media (max-width: 768px) {
          .exp-sticky {
            position: relative;
            height: auto;
            min-height: 100vh;
            padding: 2.5rem 1.25rem 3rem;
            align-items: flex-start;
          }
          .exp-inner {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .exp-left { width: 100%; }
          .exp-right {
            width: 100%;
            position: relative;
            height: auto;
            min-height: 480px;
          }
          .exp-dots {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 1rem;
          }
        }
      `}</style>

      <section id="experience" className="exp-section">
        <div className="exp-sticky">
          <div className="exp-inner">

            {/* ── Left ── */}
            <div className="exp-left">
              <p style={{
                fontSize: "0.7rem", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#555", marginBottom: "0.75rem",
                fontFamily: "'Inter', sans-serif",
              }}>
                Experience
              </p>
              <h2 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.04em", color: "#fff",
                fontFamily: "'Inter', sans-serif",
              }}>
                Where I've worked.
              </h2>

              {/* Dots */}
              <div className="exp-dots">
                {experience.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                    }}
                  >
                    <motion.div
                      animate={{
                        width: i === active ? "24px" : "7px",
                        background: i === active ? "#ffffff" : "#333",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ height: "7px", borderRadius: "4px", flexShrink: 0 }}
                    />
                    <motion.span
                      animate={{
                        color: i === active ? "#fff" : "#444",
                        opacity: i === active ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: "0.78rem", fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {exp.company}
                    </motion.span>
                  </button>
                ))}
              </div>

              {/* Progress bar — key={tick} forces full reset each time */}
              <div style={{
                marginTop: "1.5rem", height: "2px",
                background: "#1e1e1e", borderRadius: "2px",
                overflow: "hidden", width: "100%",
              }}>
                <motion.div
                  key={tick}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  style={{ height: "100%", background: "#fff", borderRadius: "2px" }}
                />
              </div>

              <p style={{
                marginTop: "0.6rem", fontSize: "0.72rem",
                color: "#444", fontFamily: "'Inter', sans-serif",
              }}>
                {active + 1} / {experience.length}
              </p>
            </div>

            {/* ── Card ── */}
            <div className="exp-right">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, y: direction * 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction * -50 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <div style={{
                    border: "1px solid #1e1e1e",
                    borderRadius: "16px",
                    padding: "2rem",
                    background: "#111",
                  }}>
                    {/* Top row */}
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "flex-start", marginBottom: "1.25rem",
                      gap: "0.75rem", flexWrap: "wrap",
                    }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                          <span style={{
                            fontSize: "0.65rem", fontWeight: 600,
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            color: "#ccc", background: "#1e1e1e",
                            padding: "3px 10px", borderRadius: "20px",
                            border: "1px solid #2a2a2a",
                          }}>
                            {experience[active].type}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "#555" }}>
                            {experience[active].period}
                          </span>
                        </div>
                        <h3 style={{
                          fontSize: "clamp(1.4rem, 4vw, 2rem)",
                          fontWeight: 800, letterSpacing: "-0.03em",
                          color: "#fff", margin: 0, lineHeight: 1.1,
                        }}>
                          {experience[active].role}
                        </h3>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
                          {experience[active].company}
                        </p>
                        <p style={{ fontSize: "0.78rem", color: "#555", margin: 0 }}>
                          {experience[active].duration}
                        </p>
                      </div>
                    </div>

                    <div style={{ height: "1px", background: "#1e1e1e", marginBottom: "1.25rem" }} />

                    <p style={{
                      fontSize: "clamp(0.85rem, 2vw, 1rem)",
                      lineHeight: 1.8, color: "#888", marginBottom: "1.25rem",
                    }}>
                      {experience[active].description}
                    </p>

                    <p style={{
                      fontSize: "0.78rem", color: "#444",
                      marginBottom: "1.25rem",
                      display: "flex", alignItems: "center", gap: "6px",
                    }}>
                      📍 {experience[active].location}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {experience[active].skills.map((skill) => (
                        <span key={skill} style={{
                          fontSize: "0.72rem", fontWeight: 500,
                          padding: "3px 10px",
                          border: "1px solid #2a2a2a",
                          borderRadius: "20px",
                          color: "#aaa", background: "#161616",
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
