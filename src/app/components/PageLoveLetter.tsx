import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface Props {
  onNext: () => void;
}

export function PageLoveLetter({ onNext }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFE8F2 0%, #FFF8FB 50%, #FFE0EF 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 24px",
      }}
    >
      <FloatingHearts count={12} colors={["#FF4D8D", "#FF8FAB", "#C850C0"]} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", marginBottom: "40px", position: "relative", zIndex: 10 }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>💌</div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 900,
            color: "#FF4D8D",
          }}
        >
          A Letter For My Sissy
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#9B5B7A", fontSize: "1rem" }}>
          {opened ? "Read every word — this is all for you 💕" : "Click the envelope to open ✨"}
        </p>
      </motion.div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "500px" }}>
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpened(true)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div style={{ position: "relative", width: "240px", height: "180px" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #FF8FAB, #FF4D8D)",
                    borderRadius: "16px",
                    boxShadow: "0 20px 60px rgba(255,77,141,0.4)",
                  }}
                />
                <motion.div
                  animate={{ rotateX: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "90px",
                    background: "linear-gradient(135deg, #FF4D8D, #C850C0)",
                    clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                    borderRadius: "16px 16px 0 0",
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ fontSize: "3rem" }}
                  >
                    💝
                  </motion.div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "120px",
                    height: "90px",
                    background: "rgba(255,255,255,0.15)",
                    clipPath: "polygon(0 100%, 100% 0, 0 0)",
                    borderRadius: "0 0 0 16px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "120px",
                    height: "90px",
                    background: "rgba(255,255,255,0.1)",
                    clipPath: "polygon(100% 100%, 0 0, 100% 0)",
                    borderRadius: "0 0 16px 0",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "1.3rem",
                  color: "#FF4D8D",
                  fontWeight: 600,
                }}
              >
                Tap to open 💕
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", damping: 15 }}
              style={{
                background: "#FFF8F0",
                borderRadius: "24px",
                padding: "clamp(24px, 6vw, 40px)",
                boxShadow: "0 20px 60px rgba(255,77,141,0.2)",
                border: "2px solid rgba(255,77,141,0.15)",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(255,77,141,0.08) 27px, rgba(255,77,141,0.08) 28px)",
                maxHeight: "65vh",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  color: "#6B2D4E",
                  lineHeight: 2,
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                    fontWeight: 700,
                    color: "#FF4D8D",
                    marginBottom: "16px",
                  }}
                >
                  My Dearest Sissy Cheeku,
                </p>
                <p>
                  I never thought that someone I met just a little while ago could feel so permanent. But here you are — already one of my favourite people, already someone I can't imagine not knowing.
                </p>
                <br />
                <p>
                  You came into my life like a breath of fresh air. No pretending, no filter, just YOU — loud in the best ways, soft in the right moments, and always, always real.
                </p>
                <br />
                <p>
                  I don't call you my Sissy because it's just a nice word to use. I call you that because you make me feel the way only a sister can — safe, seen, and never alone.
                </p>
                <br />
                <p>
                  In the one year we've known each other, you've already given me some of my favourite memories — including our legendary Batman and Superwoman era 🦇🦸‍♀️. And honestly? I can't wait to collect so many more with you.
                </p>
                <br />
                <p>
                  On this special day — your 19th — I just want you to know how genuinely lucky I feel to have found you. Not everyone gets a Sissy like you. I got incredibly lucky.
                </p>
                <br />
                <p>
                  Go live this birthday to the fullest. You deserve every beautiful thing this world has to offer. And I'll be right here, cheering for you every step of the way.
                </p>
                <br />
                <p
                  style={{
                    fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)",
                    fontWeight: 700,
                    color: "#C850C0",
                  }}
                >
                  With so much care, always,
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                    fontWeight: 700,
                    color: "#FF4D8D",
                  }}
                >
                  Your person 💕 ✨
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {opened && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
          style={{
            marginTop: "32px",
            background: "linear-gradient(135deg, #FF4D8D, #C850C0)",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "16px 48px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(255,77,141,0.4)",
            position: "relative",
            zIndex: 10,
          }}
        >
          Continue 💌
        </motion.button>
      )}
    </div>
  );
}
