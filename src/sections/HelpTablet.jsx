"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function HelpTablet() {
  const image = useRef(null);
  const start = useRef(null);
  useGSAP(() => {
    gsap.from(image.current, {
      opacity: 0.5,
      scale: 1.1,
      duration: 2,
      scrollTrigger: {
        trigger: image.current,
        start: "top bottom",
      },
    });
    gsap.fromTo(
      ".styled-span",
      {
        y: 50,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".styled-span",
          start: "top bottom",
        },
      },
      {
        duration: 1,
        ease: "power2.inOut",

        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      start.current,
      {
        opacity: 0,
        x: 20,
        scrollTrigger: {
          trigger: start.current,
          start: "top bottom",
        },
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
      }
    );
  });
  return (
    <section className=" bg-white px-8 py-8 flex items-center">
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden p-3">
        <Image
          ref={image}
          src="/assets/images/Help.webp"
          alt="Help"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="text flex flex-col gap-4">
          <div>
            <div
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
              }}
            >
              <span className="styled-span inline-block text-[7.8vw] sm:text-5xl text-white">
                Build Your Future
              </span>
            </div>
            <div>
              <span className="styled-span inline-block text-[7.8vw] sm:text-5xl text-white">
                With Us
              </span>
            </div>
          </div>
          <div
            ref={start}
            className="start w-fit px-5 py-3 bg-white rounded-full"
          >
            Start Your Journey
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpTablet;
