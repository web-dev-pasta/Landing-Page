"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import InfiniteMarquee from "@/components/marquee";
function Solutions() {
  const steps = [
    {
      img: "/assets/images/sol-1.jpg",
      title: "Market Analysis",
    },
    {
      img: "/assets/images/sol-2.jpg",
      title: "Demand Evaluation",
    },
    {
      img: "/assets/images/sol-3.jpg",
      title: "Competitor Landscape",
    },
    {
      img: "/assets/images/sol-4.jpg",
      title: "Consumer Profiling",
    },
  ];
  const solutionsSection = useRef(null);
  const explore = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: solutionsSection.current,
        start: "top 75%",
      },
      defaults: { ease: "power2.out", duration: 1.5, stagger: 0.15 },
    });
    gsap.set(".animated-image", { right: "7px" });

    tl.fromTo(
      ".animated-div",
      { opacity: 0 },
      {
        opacity: 1,
        clipPath: "inset(0px 0px 0px 0% round 70px 0px 0px 70px)",
      },
      0.25
    ).to(".animated-image", { left: "7px", right: "initial" }, 0.25);
    gsap.from(".animated-span-sol", {
      y: 100,
      duration: 2,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: solutionsSection.current,
        start: "top 75%",
      },
    });
    gsap.from(explore.current, {
      x: -20,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: solutionsSection.current,
        start: "top 75%",
      },
    });
  });
  return (
    <section
      ref={solutionsSection}
      className="relative bg-[#232323] text-white flex flex-col justify-between pt-10 min-h-screen max-sm:gap-10"
      style={{ zIndex: 7 }}
    >
      <div className="px-8 holder-top flex gap-10 max-lg:flex-col max-lg:items-center">
        <div className="left flex-1 max-lg:text-center">
          <div className="text text-white text-[8.3vw] sm:text-[45px] lg:text-[65px] font-light">
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="animated-span-sol inline-block whitespace-nowrap">
                Tailored Solutions
              </span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="animated-span-sol inline-block whitespace-nowrap">
                for Your Real Estate
              </span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="animated-span-sol inline-block whitespace-nowrap">
                Needs
              </span>
            </div>
          </div>
          <div
            className="explore flex items-center gap-3 mt-6 cursor-pointer max-lg:justify-center"
            ref={explore}
          >
            <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
            <p className="font-light">Explore More</p>
            <GoArrowRight className="text-lg" />
          </div>
        </div>
        <div className="right flex flex-col gap-5 flex-1 items-end">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animated-div p-1.5 rounded-full bg-white flex items-center justify-between max-w-[500px] w-full relative h-[97px]"
              style={{
                clipPath: `inset(0px 0px 0px 80.3% round 70px 0px 0px 70px)`,
              }}
            >
              <div className="text flex gap-4 items-center">
                <div className="animated-image absolute right-[7px] z-10">
                  <Image
                    loading="eager"
                    src={step.img}
                    alt={step.title}
                    width={200}
                    height={200}
                    sizes="100vw"
                    className="rounded-full w-[85px] h-[85px]"
                  />
                </div>
                <p className="text-black text-lg ml-[120px] sm:whitespace-nowrap ">
                  {step.title}
                </p>
              </div>
              <div className="arrow px-4">
                <GoArrowDown className="text-black text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <InfiniteMarquee />
    </section>
  );
}

export default Solutions;
