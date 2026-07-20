import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  onNext: () => void;
}

const fullMessage = `
Cheeku, if I had to describe you in one word, it would be — unforgettable.

We haven't known each other for years and years, but in the time we have — you've made a mark I know won't fade. That's the kind of person you are. You leave a little bit of yourself with everyone who's lucky enough to get close.

I want to tell you something I probably don't say enough: Thank you. Thank you for being exactly who you are around me. Thank you for never making me feel judged. Thank you for the laughs, the late-night talks, and for always showing up with that energy that just makes everything feel better.

You're 19 now, Sissy. That's huge. You're stepping into a whole new chapter — one that is going to surprise you, stretch you, and shape you in ways you can't even imagine yet. And honestly? I think you're going to handle it beautifully.

Because I've seen how you handle things. With heart. With humour. With that quiet strength that you probably don't even realise you have.

This birthday, I wish you everything you deserve — joy that catches you off guard, friendships that feel like home, and dreams that are bold enough to scare you a little.

You are my Sissy. My favourite chaotic person. One of my most treasured people.

And no matter what life brings — I've got you. Always.

Happy 19th, Cheeku. The best is so, so ahead of you. 🌹
`.trim();

export function PageMessageBoard({ onNext }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullMessage.slice(0, i));
      if (i >= fullMessage.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4A0015 0%, #8B1A35 40%, #C03060 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${[5, 15, 80, 90, 40, 60, 25, 75, 50, 10][i]}%`,
            top: `${[10, 80, 20, 70, 50, 30, 60, 40, 85, 45][i]}%`,
            fontSize: `${Math.random() * 16 + 10}px`,
            opacity: 0.12,
            pointerEvents: "none",
          }}
          animate={{ y: [-20, 20], x: [-10, 10], rotate: [0, 360] }}
          transition={{ duration: 5 + i, repeat: Infinity, repeatType: "reverse" }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "32px",
          padding: "clamp(28px, 6vw, 48px)",
          maxWidth: "680px",
          width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>💬</div>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              color: "#FFD6E7",
            }}
          >
            Words From My Heart, Sissy
          </h1>
        </div>

        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            color: "rgba(255,230,240,0.9)",
            lineHeight: 1.9,
            whiteSpace: "pre-wrap",
            minHeight: "300px",
          }}
        >
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: done ? 0 : Infinity }}
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.1em",
              background: "#FF8FAB",
              marginLeft: "2px",
              verticalAlign: "middle",
            }}
          />
        </div>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: "center", marginTop: "32px" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onNext}
              style={{
                background: "linear-gradient(135deg, #FF4D8D, #C850C0)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "16px 48px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(255,77,141,0.5)",
              }}
            >
              See Why You're My Sissy 💖
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
