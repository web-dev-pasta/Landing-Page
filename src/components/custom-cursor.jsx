"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="custom-cursor fixed z-[999] pointer-events-none"
      style={{
        top: 0,
        left: 0,
        width: "24px",
        height: "24px",
        transform: "translate3d(-50%, -50%, 0)",
      }}
    >
      <img src="/assets/images/cursor-2.svg" alt="cursor" />
    </div>
  );
}
