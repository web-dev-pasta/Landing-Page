"use client";
import Hero from "@/sections/Hero";
import ReactLenis from "lenis/react";
import Video from "@/sections/Video";
import Portfolio from "@/sections/Portfolio";
import Build from "@/sections/Build";
import Solutions from "@/sections/Solutions";
import Path from "@/sections/Path";
export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Video />
      <Portfolio />
      <Build />
      <Solutions />
      {/* <Path /> */}
    </ReactLenis>
  );
}
