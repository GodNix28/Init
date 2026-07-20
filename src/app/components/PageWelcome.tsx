import { motion } from "motion/react";
import { FloatingHearts } from "./FloatingHearts";
import { Confetti } from "./Confetti";

interface PageWelcomeProps {
  onNext: () => void;
}

export function PageWelcome({ onNext }: PageWelcomeProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        backgroundImage:
          "linear-gradient(rgba(255,77,141,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,141,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "24px",
      }}
    >
      <FloatingHearts count={18} colors={["#FF4D8D", "#FF8FAB", "#FFD6E7"]} />
      <Confetti continuous />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", damping: 15 }}
        style={{
          background: "#fff",
          borderRadius: "32px",
          padding: "clamp(32px, 8vw, 56px)",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 80px rgba(255, 77, 141, 0.25), 0 4px 16px rgba(0,0,0,0.06)",
          border: "2px solid rgba(255,77,141,0.12)",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Avatar */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: "clamp(4rem, 15vw, 7rem)", marginBottom: "16px" }}
        >
          🧁
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
              fontWeight: 900,
              color: "#FF4D8D",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Happy Birthday Cheeku ❤️🎂
          </h1>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              color: "#6B4455",
              lineHeight: 1.7,
              marginBottom: "32px",
              fontWeight: 500,
            }}
          >
            Today is all about you, my Sissy! 🌸 You might not be my sister by blood,
            but you are absolutely my sister by heart. We met in 2025 and in just one year
            you became irreplaceable. Happy 19th — this journey is all for you! 💕
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255,77,141,0.5)" }}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            style={{
              background: "linear-gradient(135deg, #FF4D8D 0%, #C850C0 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "16px 48px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(255,77,141,0.4)",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
            }}
          >
            Start the Journey 🌟
          </motion.button>
        </motion.div>

        {["💖", "🌸", "✨", "💝"].map((emoji, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              fontSize: "1.4rem",
              ...[
                { top: "12px", left: "16px" },
                { top: "12px", right: "16px" },
                { bottom: "12px", left: "16px" },
                { bottom: "12px", right: "16px" },
              ][i],
            }}
            animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
