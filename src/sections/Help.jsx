"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Help() {
  const photo = useRef(null);
  const section = useRef(null);
  const start = useRef(null);

  useGSAP(() => {
    gsap.to(photo.current, {
      clipPath: "inset(0% round 30px)",
      scrollTrigger: {
        trigger: photo.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
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
  }, []);

  return (
    <div className="bg-[#F7F6F1]">
      <section
        className="min-h-screen bg-white px-8 py-8 flex items-center"
        ref={section}
      >
        <div
          ref={photo}
          className="relative w-full h-[850px] p-20"
          style={{
            clipPath: "inset(30% round 30px)",
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
