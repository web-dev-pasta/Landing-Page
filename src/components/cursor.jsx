"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    };

    const handleMouseEnter = () => cursor.classList.remove("hidden");
    const handleMouseLeave = () => cursor.classList.add("hidden");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[9999] w-8 h-8 opacity-100 transition-opacity ease-200 transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate(7px, 13px)` }}
      >
        <img
          src="/assets/images/cursor.png"
          alt="cursor"
          className="w-full h-full"
        />
      </div>
    </>
  );
}
