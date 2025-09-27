"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Help() {
  const photo = useRef(null);
  const section = useRef(null);
  const start = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      photo.current,
      { "--inset": "20%" },
      {
        "--inset": "0%",
        scrollTrigger: {
          trigger: photo.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
    gsap.to(section.current, {
      scale: 0.94,
      borderRadius: `30px`,
      scrollTrigger: {
        trigger: section.current,
        start: "bottom bottom",
        end: "bottom 40%",
        scrub: true,
      },
    });
    gsap.to(section.current, {
      y: -100,
      scrollTrigger: {
        trigger: section.current,
        start: "bottom 80%",
        end: "bottom top",
        scrub: true,
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
  }, []);

  return (
    <div className="holder bg-[#F7F6F1]">
      <section
        className="min-h-screen bg-white px-8 py-8 flex items-center"
        ref={section}
      >
        <div
          ref={photo}
          className="relative w-full h-[850px] p-20"
          style={{
            "--radius": "30px",
            "--inset": "30%",
            clipPath: "inset(var(--inset) round var(--radius))",
          }}
        >
          <Image
            src="/assets/images/Help.webp"
            alt="Help"
            fill
            sizes="100vw"
            className="object-cover -z-10"
          />
          <div className="text flex flex-col gap-8">
            <div>
              <div
                style={{
                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                }}
              >
                <span className="styled-span inline-block text-5xl text-white">
                  Build Your Future
                </span>
              </div>
              <div>
                <span className="styled-span inline-block text-5xl text-white">
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
    </div>
  );
}

export default Help;
