"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/sections/Hero";
gsap.registerPlugin(useGSAP, ScrollTrigger);
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
