"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/sections/Hero";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import ReactLenis from "lenis/react";
export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
    </ReactLenis>
  );
}
