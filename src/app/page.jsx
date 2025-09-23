"use client";
import Hero from "@/sections/Hero";
import ReactLenis from "lenis/react";
import Video from "@/sections/Video";
import Portfolio from "@/sections/Portfolio";
import Build from "@/sections/Build";
export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Video />
      <Portfolio />
      <Build />
      <section className="min-h-screen"></section>
    </ReactLenis>
  );
}
