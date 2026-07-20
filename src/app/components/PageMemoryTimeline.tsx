import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface Memory {
  year: string;
  title: string;
  description: string;
  emoji: string;
  category: string;
  color: string;
}

const memories: Memory[] = [
  {
    year: "2007",
    title: "The World Got Luckier ✨",
    description: "Somewhere in 2007, a girl was born who would one day walk into my life and turn it completely upside down — in the best possible way. The world just didn't know it yet.",
    emoji: "🌟",
    category: "Her Story",
    color: "#FF8FAB",
  },
  {
    year: "2007–2024",
    title: "Growing Into Magic",
    description: "Before I even knew you existed, you were out there becoming the most incredible version of yourself. Every experience, every laugh, every scar — all shaping the person I'd eventually call my Sissy.",
    emoji: "🦋",
    category: "Her Story",
    color: "#FFB3CC",
  },
  {
    year: "2025",
    title: "The Day We Met 🤝",
    description: "I still remember the first time we actually talked. Something clicked immediately — like we'd known each other in a past life. That was the beginning of something I didn't know I needed.",
    emoji: "💫",
    category: "Us",
    color: "#FF4D8D",
  },
  {
    year: "2025",
    title: "From Strangers to Besties",
    description: "It didn't take long at all. A few conversations, a few laughs, and suddenly you went from 'that person I just met' to 'the person I tell everything to.' That speed still surprises me.",
    emoji: "🤗",
    category: "Us",
    color: "#C850C0",
  },
  {
    year: "2025",
    title: "Batman & Superwoman 🦸‍♀️🦇",
    description: "Remember when we decided I'm Batman and you're Superwoman? Honestly the most accurate thing we've ever said. You really do have superpowers, Cheeku — I'm just the brooding one in the corner.",
    emoji: "🦸‍♀️",
    category: "Us",
    color: "#FF4D8D",
  },
  {
    year: "2025",
    title: "The Late Night Talks",
    description: "Those long chats that started normal and ended at 2am — talking about everything and nothing at the same time. That's when I knew this friendship was different.",
    emoji: "🌙",
    category: "Us",
    color: "#FF8FAB",
  },
  {
    year: "2025",
    title: "You Made Me Laugh",
    description: "I can't count the number of times you've made me laugh so hard I couldn't breathe. You have this effortless way of making everything feel lighter. Superwoman energy, always.",
    emoji: "😂",
    category: "Us",
    color: "#FFB3CC",
  },
  {
    year: "2025",
    title: "When You Showed Up For Me",
    description: "There was a moment when I was going through it and you just… showed up. No drama, no questions. Just there. That's when 'best friend' stopped being enough and 'Sissy' felt right.",
    emoji: "💝",
    category: "Us",
    color: "#C850C0",
  },
  {
    year: "2025",
    title: "The Silly Moments",
    description: "The random voice notes, the memes sent at odd hours, the inside jokes that make zero sense to anyone else — this is the stuff I treasure more than you know.",
    emoji: "🎭",
    category: "Us",
    color: "#FF4D8D",
  },
  {
    year: "2025",
    title: "You Became My Sissy",
    description: "Blood doesn't make family — heart does. And somewhere between all those conversations and shared moments, you became family. My Sissy. And that title suits you perfectly.",
    emoji: "👯",
    category: "Us",
    color: "#FF8FAB",
  },
  {
    year: "2026",
    title: "Your 19th — A Big One! 🎂",
    description: "19 years of you being amazing and only 1 year of me getting to witness it — and it already feels like I've known you forever. That's rare. That's real. That's us.",
    emoji: "🎂",
    category: "Today",
    color: "#FFB3CC",
  },
  {
    year: "2026",
    title: "What's Still Ahead",
    description: "We're just at the beginning, Cheeku. So many more memories to make, adventures to go on, late nights to stay up through. Batman and Superwoman — unstoppable. 🦸‍♀️🦇",
    emoji: "🚀",
    category: "Today",
    color: "#FF4D8D",
  },
  {
    year: "Forever",
    title: "My Sissy, Always 💕",
    description: "Not by blood, but by choice — and that makes it even more special. Happy 19th Birthday, Cheeku. You are, without a doubt, one of the best things to happen to me.",
    emoji: "❤️",
    category: "Forever",
    color: "#C850C0",
  },
];

function MemoryCard({ memory, index }: { memory: Memory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        marginBottom: "32px",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          position: "absolute",
          left: "50%",
          top: "24px",
          transform: "translateX(-50%)",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: memory.color,
          zIndex: 2,
          boxShadow: `0 0 12px ${memory.color}88`,
          border: "3px solid #fff",
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        whileHover={{ scale: 1.02, y: -4 }}
        style={{
          width: "calc(50% - 36px)",
          minWidth: "140px",
          background: "#fff",
          borderRadius: "24px",
          padding: "16px 20px",
          boxShadow: "0 8px 32px rgba(255,77,141,0.12), 0 2px 8px rgba(0,0,0,0.04)",
          border: `2px solid ${memory.color}33`,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span style={{ fontSize: "2rem" }}>{memory.emoji}</span>
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: memory.color,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {memory.year} · {memory.category}
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "#2D2D2D",
              }}
            >
              {memory.title}
            </div>
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
            color: "#6B4455",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {memory.description}
        </p>
      </motion.div>
    </div>
  );
}

interface Props {
  onNext: () => void;
}

export function PageMemoryTimeline({ onNext }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        backgroundImage:
          "linear-gradient(rgba(255,77,141,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,141,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        padding: "60px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingHearts count={8} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>📸</div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#FF4D8D",
          }}
        >
          Our Memory Lane
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#9B5B7A", fontSize: "1.1rem" }}>
          From strangers to Sissy — every moment counts 💕
        </p>
      </motion.div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, #FF4D8D, #C850C0, #FF8FAB)",
            transform: "translateX(-50%)",
            opacity: 0.3,
          }}
        />

        {memories.map((memory, i) => (
          <MemoryCard key={i} memory={memory} index={i} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
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
          Read My Letter For You 💌
        </motion.button>
      </div>
    </div>
  );
}
