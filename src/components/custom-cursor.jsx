"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const setInitialPosition = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.style.opacity = 1;
      window.removeEventListener("mousemove", setInitialPosition);
    };

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", setInitialPosition, { once: true });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", setInitialPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor fixed z-[999] pointer-events-none max-md:hidden"
      style={{
        width: "24px",
        height: "24px",
        transform: "translate3d(-50%, -50%, 0)",
        opacity: 0,
        transition: "opacity 0.2s ease-out",
      }}
    >
      <img src="/assets/images/cursor-2.svg" alt="cursor" />
    </div>
  );
}
