import { motion } from "motion/react";
import { useState } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface Reason {
  front: string;
  back: string;
  emoji: string;
  color: string;
}

const reasons: Reason[] = [
  { front: "Your Smile", back: "It lights up every conversation. Even through a screen, even in a voice note — I can always tell when you're smiling. It's contagious, Sissy.", emoji: "😊", color: "#FF4D8D" },
  { front: "Your Kindness", back: "You never make people feel small. You have this natural ability to make everyone around you feel valued. That's rarer than you think.", emoji: "💝", color: "#C850C0" },
  { front: "Your Laugh", back: "The way you laugh at the most random things — it's so genuine. No holding back, just pure joy. Hands down one of my favourite sounds.", emoji: "😂", color: "#FF8FAB" },
  { front: "How You Show Up", back: "When I need someone, you're there. No drama, no delay — just showing up. That means more than any words ever could.", emoji: "🤗", color: "#FF4D8D" },
  { front: "Your Honesty", back: "You tell me things how they are, but always with so much heart. That balance is so hard to find and you make it look effortless.", emoji: "✨", color: "#C850C0" },
  { front: "Your Strength", back: "For someone your age, you carry yourself with so much grace and grit. You've handled things that would make others crumble. I genuinely look up to you.", emoji: "💪", color: "#FF8FAB" },
  { front: "Your Energy", back: "You bring this electric, warm energy wherever you go. Talking to you never feels draining — it always feels like a recharge.", emoji: "⚡", color: "#FF4D8D" },
  { front: "Your Loyalty", back: "Once you're someone's person, you're truly theirs. You don't half-do friendship. That kind of loyalty is incredibly rare and I don't take it for granted.", emoji: "🌟", color: "#C850C0" },
  { front: "Your Personality", back: "Silly and deep at the same time. Chaotic but caring. Bold but soft. You're an entire vibe, Cheeku — and there's genuinely no one like you.", emoji: "🦋", color: "#FF8FAB" },
  { front: "Your Realness", back: "You never pretend to be someone you're not. What you see is what you get — and what you get is absolutely wonderful.", emoji: "🎵", color: "#FF4D8D" },
  { front: "Your Big Dreams", back: "You're 18 and you already have a fire in you that most people spend their whole lives looking for. Watch out, world — Cheeku's coming.", emoji: "🚀", color: "#C850C0" },
  { front: "Our Duo Energy 🦇🦸‍♀️", back: "Batman and Superwoman. You called it, and honestly? Most accurate thing ever. You bring the superpowers — I bring the brooding. Together we're unstoppable.", emoji: "🦸‍♀️", color: "#C850C0" },
  { front: "Simply YOU", back: "At the end of it all — it's just you. Exactly as you are, with all your quirks and magic. That's who I chose as my Sissy. And I'd choose you again every single time.", emoji: "❤️", color: "#FF4D8D" },
];

function FlipCard({ reason, index }: { reason: Reason; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, type: "spring" }}
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        perspective: "1000px",
        cursor: "pointer",
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", damping: 15 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${reason.color}22, ${reason.color}44)`,
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            backfaceVisibility: "hidden",
            border: `2px solid ${reason.color}33`,
            boxShadow: `0 8px 24px ${reason.color}22`,
            padding: "16px",
          }}
        >
          <div style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>{reason.emoji}</div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              color: reason.color,
              textAlign: "center",
            }}
          >
            {reason.front}
          </div>
          <div style={{ fontSize: "0.7rem", color: "#9B5B7A", fontFamily: "'Nunito', sans-serif" }}>
            tap to flip ✨
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${reason.color}, ${reason.color}CC)`,
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: `0 8px 32px ${reason.color}55`,
          }}
        >
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            {reason.back}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface Props {
  onNext: () => void;
}

export function PageReasonsILoveYou({ onNext }: Props) {
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
        <div style={{ fontSize: "3rem", marginBottom: "8px" }}>💖</div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 900,
            color: "#FF4D8D",
          }}
        >
          Why You're My Sissy 💝
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#9B5B7A", fontSize: "1rem" }}>
          Flip each card to reveal what I truly think 💕
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(160px, 100%), 1fr))",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {reasons.map((reason, i) => (
          <FlipCard key={i} reason={reason} index={i} />
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
          Play a Mini Game 🎮
        </motion.button>
      </div>
    </div>
  );
}
