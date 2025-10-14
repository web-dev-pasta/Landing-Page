"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function InfiniteMarquee() {
  useEffect(() => {
    const ticker = document.querySelector(".ticker");
    if (!ticker) return;

    const inner = ticker.querySelector(".ticker-wrap");
    const content = inner.querySelector(".ticker-text");
    const duration = ticker.getAttribute("data-duration");

    inner.append(content.cloneNode(true));

    const animations = [];
    inner.querySelectorAll(".ticker-text").forEach((element) => {
      const animation = gsap.to(element, {
        x: "-100%",
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
      animations.push(animation);
    });
  }, []);
  const spanContent = [
    "Contact Us",
    "0% Commission",
    "No Interest",
    "Departement from Almaty",
  ];

  return (
    <section className="flex flex-col justify-center overflow-hidden">
      <div className="ticker p-[1vw] whitespace-nowrap" data-duration="15">
        <div className="ticker-wrap flex gap-[20px]">
          <div className="ticker-text text-black font-light tracking-[-0.02em] text-[clamp(30px,50px,80px)] flex gap-5 max-sm:text-[30px]">
            {spanContent.map((e, i) => {
              return (
                <span
                  key={i}
                  className="bg-[#2D2D2D] rounded-full inline-block py-1 px-8 uppercase"
                >
                  {e}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
