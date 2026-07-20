import { motion } from "motion/react";
import { useEffect } from "react";
import { Confetti, fireConfetti } from "./Confetti";
import { FloatingHearts } from "./FloatingHearts";

interface Props {
  onRestart: () => void;
}

const Firework = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      fontSize: "2rem",
      pointerEvents: "none",
    }}
    initial={{ scale: 0, opacity: 1 }}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [1, 1, 0],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    🎆
  </motion.div>
);

export function PageFinalCelebration({ onRestart }: Props) {
  useEffect(() => {
    const t1 = setTimeout(fireConfetti, 300);
    const t2 = setTimeout(fireConfetti, 1500);
    const t3 = setTimeout(fireConfetti, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const fireworks = [
    { x: 10, y: 20, delay: 0 },
    { x: 85, y: 15, delay: 0.5 },
    { x: 20, y: 70, delay: 1 },
    { x: 80, y: 65, delay: 1.5 },
    { x: 50, y: 10, delay: 0.8 },
    { x: 5, y: 45, delay: 1.2 },
    { x: 92, y: 40, delay: 0.3 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2D006F 0%, #6B21A8 25%, #C850C0 60%, #FF4D8D 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <Confetti continuous />
      <FloatingHearts count={25} colors={["#FF4D8D", "#FFD6E7", "#FF8FAB", "#FFCA28", "#fff"]} />

      {fireworks.map((fw, i) => (
        <Firework key={i} {...fw} />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", damping: 12 }}
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        {/* Celebration illustration */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: "clamp(5rem, 15vw, 8rem)", marginBottom: "16px" }}
        >
          🎉
        </motion.div>

        <motion.h1
          animate={{ textShadow: ["0 0 20px rgba(255,200,0,0.5)", "0 0 40px rgba(255,200,0,0.9)", "0 0 20px rgba(255,200,0,0.5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(2rem, 8vw, 4.5rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          Happy Birthday Cheeku ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.6,
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          "Thank you for being my Sissy — my favourite human, always.
          <br />You are my sunshine, my joy, my forever person. 🌸"
        </motion.p>

        {/* Floating emojis row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            fontSize: "2rem",
            marginBottom: "40px",
          }}
        >
          {["🌸", "💖", "✨", "🎂", "💝", "🌟", "🎈"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 16px 50px rgba(255,255,255,0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={onRestart}
          style={{
            background: "rgba(255,255,255,0.95)",
            color: "#FF4D8D",
            border: "none",
            borderRadius: "999px",
            padding: "18px 56px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          }}
        >
          🔄 Replay Journey
        </motion.button>
      </motion.div>
    </div>
  );
}
