"use client";
import Hero from "@/sections/Hero";
import ReactLenis from "lenis/react";
import Video from "@/sections/Video";
import Portfolio from "@/sections/Portfolio";
export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Video />
      <Portfolio />
      <section className="min-h-screen"></section>
    </ReactLenis>
  );
}
