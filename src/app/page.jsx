"use client";
import Hero from "@/sections/Hero";
import ReactLenis from "lenis/react";
import Video from "@/sections/Video";
import Portfolio from "@/sections/Portfolio";
import Build from "@/sections/Build";
import Solutions from "@/sections/Solutions";
import Path from "@/sections/Path";
import PathTablet from "@/sections/PathTablet";
import { useState, useEffect } from "react";
import Stands from "@/sections/Stands";
import Discover from "@/sections/Discover";
import Partners from "@/sections/Partners";
import Help from "@/sections/Help";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1300px)");
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <ReactLenis root>
      <Hero />
      <Video />
      <Portfolio />
      <Build />
      <Solutions />

      {isTablet ? <PathTablet /> : <Path />}
      <Stands />
      <Discover />
      <Partners />
      <section className="min-h-screen"></section>
      <Help />
    </ReactLenis>
  );
}
