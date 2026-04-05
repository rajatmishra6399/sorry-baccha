import { useEffect, useState } from "react";

const emojis = ["💕", "🌸", "✨", "💗", "🦋", "🌷", "⭐", "💝", "🌈"];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingEmojis = () => {
  const [items, setItems] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 90 + 5,
      top: Math.random() * 90 + 5,
      size: 16 + Math.random() * 16,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-emoji"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
