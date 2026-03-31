import React, { useEffect, useState } from "react";
import "./CursorSparkle.css";

function CursorSparkle() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only spawn sparkle if cursor moved enough (avoids too many particles)
      if (distance < 12) return;

      lastX = e.clientX;
      lastY = e.clientY;

      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,        // 4px to 12px
        rotation: Math.random() * 360,       // random angle
        color: getRandomColor(),
        duration: Math.random() * 400 + 500, // 500ms to 900ms
      };

      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, newSparkle.duration);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <svg
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            "--duration": `${sparkle.duration}ms`,
            "--color": sparkle.color,
            transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
          }}
          viewBox="0 0 24 24"
          fill={sparkle.color}
        >
          {/* 4-point star shape */}
          <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
        </svg>
      ))}
    </>
  );
}

function getRandomColor() {
  const colors = [
    "#60a5fa", // blue
    "#a78bfa", // purple
    "#c084fc", // violet
    "#38bdf8", // cyan
    "#ffffff", // white
    "#e879f9", // pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default CursorSparkle;
