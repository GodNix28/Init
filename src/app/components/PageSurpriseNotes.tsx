import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface Note {
  id: number;
  front: string;
  back: string;
  emoji: string;
  bg: string;
  rotate: number;
}

const notes: Note[] = [
  { id: 1, front: "Dream big, my Sissyyy! 🌟", back: "The sky is not your limit — your imagination is. You're only 19 and you're already incredible. I can't wait to see what you do with the rest of this wild, beautiful life.", emoji: "🌟", bg: "#FFD6E7", rotate: -3 },
  { id: 2, front: "You are amazing! ✨", back: "Not in a small, polite way. In the most genuine, 'how does one person have so much going for them' kind of way. You really are, Cheeku.", emoji: "✨", bg: "#FFB3CC", rotate: 2 },
  { id: 3, front: "Keep shining! ☀️", back: "Even on the cloudy days — and especially on the cloudy days. The world needs your light. Don't you dare dim it for anyone or anything.", emoji: "☀️", bg: "#FFE8F2", rotate: -1 },
  { id: 4, front: "So glad we met 🍀", back: "Out of all the people I could have crossed paths with — I got you. And honestly? That feels like winning the universe's lottery. No exaggeration.", emoji: "🍀", bg: "#FFD6E7", rotate: 3 },
  { id: 5, front: "You inspire me! 💫", back: "Your energy, your boldness, the way you handle things at 18 — you make me want to show up better every day. Thank you for being exactly who you are.", emoji: "💫", bg: "#FFC5DC", rotate: -2 },
  { id: 6, front: "My Sissy, always 💕", back: "Not by blood — by something even better. By choice. By real, genuine connection. I chose you as my Sissy and I'd choose you a hundred times over.", emoji: "💕", bg: "#FFE0EF", rotate: 1 },
  { id: 7, front: "Batman & Superwoman 🦇🦸‍♀️", back: "I'm Batman, you're Superwoman — and honestly? Best team ever formed. No villain stands a chance. No bad day survives. We're that duo, Sissy. Forever.", emoji: "🦸‍♀️", bg: "#FFD6E7", rotate: -3 },
  { id: 8, front: "Your future is HUGE! 🔆", back: "19 is just the beginning. Everything you're building, everything you're dreaming of — it's all within reach. Keep going, Sissy. The best chapters are ahead.", emoji: "🔆", bg: "#FFB3CC", rotate: 2 },
  { id: 9, front: "Proud of you 🎉", back: "Of who you've become, of how you carry yourself, of the kindness you lead with. I'm proud of you every single day — not just on your birthday.", emoji: "🎉", bg: "#FFE8F2", rotate: -2 },
];

function StickyNote({ note, index }: { note: Note; index: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: note.rotate }}
      transition={{ delay: index * 0.08, type: "spring", damping: 12 }}
      whileHover={{ scale: 1.05, rotate: 0, y: -8, zIndex: 20 }}
      onClick={() => setRevealed(!revealed)}
      style={{
        background: note.bg,
        borderRadius: "16px",
        padding: "20px",
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(255,77,141,0.15), 0 2px 8px rgba(0,0,0,0.06)",
        border: "2px solid rgba(255,77,141,0.1)",
        position: "relative",
        userSelect: "none",
        minHeight: "160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Pin */}
      <div
        style={{
          position: "absolute",
          top: "-8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#FF4D8D",
          boxShadow: "0 2px 6px rgba(255,77,141,0.4)",
        }}
      />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12px" }}
          >
            <div style={{ fontSize: "2.5rem" }}>{note.emoji}</div>
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                color: "#6B2D4E",
                textAlign: "center",
                fontWeight: 700,
                margin: 0,
              }}
            >
              {note.front}
            </p>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.7rem", color: "#9B5B7A" }}>
              tap to reveal 💝
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                color: "#4A1A30",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 600,
              }}
            >
              {note.back}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface Props {
  onNext: () => void;
}

export function PageSurpriseNotes({ onNext }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        backgroundImage:
          "linear-gradient(rgba(255,77,141,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,141,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        padding: "60px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingHearts count={10} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 10 }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "8px" }}>📝</div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 900,
            color: "#FF4D8D",
          }}
        >
          Surprise Notes
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#9B5B7A", fontSize: "1rem" }}>
          Each note holds a special message just for you 💌
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "24px",
          maxWidth: "900px",
          margin: "0 auto 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {notes.map((note, i) => (
          <StickyNote key={note.id} note={note} index={i} />
        ))}
      </div>

      <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
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
            boxShadow: "0 8px 24px rgba(255,77,141,0.4)",
          }}
        >
          The Grand Finale 🎉
        </motion.button>
      </div>
    </div>
  );
}
