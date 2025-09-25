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
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  if (!mounted) {
    return false;
  }

  return matches;
}
export default function Home() {
  const isTablet = useMediaQuery("(max-width: 1300px)");
  return (
    <ReactLenis root>
      <Hero />
      <Video />
      <Portfolio />
      <Build />
      <Solutions />
      {isTablet ? <PathTablet /> : <Path />}
      <section className="min-h-screen"></section>
    </ReactLenis>
  );
}
