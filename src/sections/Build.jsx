"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);
import { PiQuestionMarkThin } from "react-icons/pi";
import { PiPhoneCallLight } from "react-icons/pi";
import CountUp from "@/components/count-up";

import React from "react";

function Build() {
  const heroImage = useRef(null);
  const contact = useRef(null);
  const contactText = useRef(null);
  const expert = useRef(null);
  const question = useRef(null);
  const heroImageMobile = useRef(null);
  const section = useRef(null);
  const build = useRef(null);
  const holder = useRef(null);
  const teamMembers = [
    "/assets/images/woman-1.jpg",
    "/assets/images/man-1.jpg",
    "/assets/images/man-2.jpg",
    "/assets/images/woman-2.jpg",
  ];
  const stats = [
    {
      value: 96,
      suffix: "+",
      lines: ["Successful", "Transactions Monthly"],
    },
    {
      value: 87,
      suffix: "%",
      lines: ["Customer", "Satisfaction Rate"],
    },
    {
      value: 492,
      suffix: "",
      lines: ["Exquisite Properties", "Ready for Your Selection"],
    },
  ];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
      },
    });
    gsap.to(holder.current, {
      y: 80,
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "bottom 75%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    gsap.set(contact.current, {
      clipPath: `inset(0 75% 0 0 round 0 50px 50px 0)`,
    });
    gsap.from(heroImage.current, {
      scale: 1.15,
      duration: 2,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
      },
    });
    gsap.from(contactText.current, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
      },
    });
    gsap.to(contact.current, {
      clipPath: `inset(0 0% 0 0 round 0 50px 50px 0)`,
      delay: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
      },
    });

    gsap.from([contact.current, question.current, expert.current], {
      opacity: 0.2,
      scale: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
    gsap.from([".animated-span", build.current], {
      y: 100,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
    gsap.from(".count-up", {
      x: -20,
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
    tl.fromTo(
      ".animated-img",
      {
        left: 0,
        opacity: 0.9,
      },
      {
        opacity: 1,
        left: (i) => `${i * 26}px`,
        duration: 2,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.072,0.142 0.205,0.653 0.5,0.9 0.626,1.005 0.847,1 1,1 "
        ),
      }
    ).from(
      ".team-p",
      {
        opacity: 0,
        duration: 1,
      },
      "-=1.5"
    );
    gsap.from(heroImageMobile.current, {
      opacity: 0.5,
      scale: 1.15,
      duration: 2,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
      },
    });
    gsap.to(section.current, {
      scale: 0.94,
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      scrollTrigger: {
        trigger: section.current,
        start: "bottom+=80 bottom",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.to(section.current, {
      y: -80,
      scrollTrigger: {
        trigger: section.current,
        start: "bottom 65%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  });

  return (
    <div
      className="bg-[#232323] relative -top-20 build-section"
      style={{ zIndex: 8 }}
      ref={holder}
    >
      <section
        className="min-h-screen bg-white relative text-black flex px-10 py-6 overflow-hidden -top-[1px]"
        ref={section}
      >
        <div className="absolute inset-0 lg:hidden">
          <div className="w-full h-full overflow-hidden rounded-t-4xl">
            <Image
              src="/assets/images/marina.jpg"
              alt="hero_img"
              fill
              sizes="100vw"
              className="w-full h-full object-cover"
              style={{ objectPosition: "28%" }}
            />
          </div>
        </div>
        <div className="left flex-1 flex flex-col justify-between">
          <div className="top flex flex-col gap-[80px] max-sm:items-center">
            <p className="lg:text-gray-400 max-w-[300px] leading-relaxed text-white">
              At Golden Gate Properties, we offer more than just real estate
              services, we provide an unparalleled experience tailored to meet
              your needs and exceed your expectaions.
            </p>
            <div className="team flex gap-4 relative">
              <div className="images">
                {teamMembers.map((e, i) => {
                  return (
                    <Image
                      key={i}
                      src={e}
                      alt={`team-member-${i}`}
                      width={48}
                      height={48}
                      sizes="100vw"
                      className="animated-img rounded-full w-12 h-12 absolute"
                      style={{ left: `${i * 30}px` }}
                    />
                  );
                })}
              </div>
              <p className="text-sm lg:text-gray-400 ml-[138px] team-p text-white">
                Meet Our
                <br />
                Professionsal Team
              </p>
            </div>
          </div>
          <div className="buttom flex flex-col gap-[80px]">
            {stats.map((item, i) => (
              <div
                key={i}
                className={`flex items-center lg:w-[90%] w-full max-sm:flex-col ${
                  i === stats.length - 1
                    ? ``
                    : `border-b-[#0000001a] border-b-[1px]`
                } `}
              >
                <p className="text-[60px] flex-1 count-up max-lg:[text-shadow:-1px_1px_5px_black]">
                  <CountUp
                    from={0}
                    to={item.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-white lg:text-black"
                  />
                  <span className="text-white lg:text-black">
                    {item.suffix}
                  </span>
                </p>
                <div className="flex-1 flex flex-col max-sm:items-center">
                  {item.lines.map((line, j) => (
                    <div
                      key={j}
                      style={{
                        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                      }}
                    >
                      <span className="animated-span inline-block text-white lg:text-black max-lg:[text-shadow:-1px_1px_5px_black]">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right rounded-4xl overflow-hidden flex-1 relative p-8 max-lg:hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              ref={heroImage}
              src="/assets/images/marina.jpg"
              alt="hero_img"
              fill
              className="w-full h-full object-cover"
              style={{ objectPosition: "28%" }}
            />
          </div>
          <div className="data flex flex-col justify-between h-full">
            <div
              className="phone p-[4px] bg-[#DAE5EA] rounded-full text-white flex items-center self-end cursor-pointer"
              ref={contact}
              style={{
                transformOrigin: `20px center`,
              }}
            >
              <div className="icon bg-white rounded-full p-2">
                <span className="text-2xl">
                  <PiPhoneCallLight className="fill-[#5A6870]" />
                </span>
              </div>
              <p className="px-4 font-light text-black" ref={contactText}>
                Contact Us Now
              </p>
            </div>
            <div className="build flex justify-between items-end">
              <p
                className="font-bold text-white [text-shadow:-6px_2px_14px_black]"
                style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
              >
                <span ref={build} className="inline-block">
                  Building Your Dreams
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <div
                  ref={question}
                  className="question bg-[#DAE5EA] h-10 w-10 flex items-center justify-center rounded-full self-end"
                >
                  <span className="w-[19px] h-[19px] border rounded-full border-black flex items-center justify-center">
                    <PiQuestionMarkThin className="relative right-[.3px]" />
                  </span>
                </div>
                <div
                  ref={expert}
                  className="expert rounded-3xl bg-white p-4 pr-8 flex gap-3 items-center "
                >
                  <div className="image relative">
                    <span className="w-4 h-4 rounded-full bg-white absolute top-0 right-[2px] border-black border-4"></span>
                    <Image
                      src="/assets/images/expert.jpg"
                      alt="expert"
                      width={64}
                      height={64}
                      sizes="100vw"
                      className="rounded-full"
                    />
                  </div>
                  <div className="data">
                    <p className="text-xs text-gray-400 mb-2">Special Offer</p>
                    <p>
                      Get The Consultation
                      <br /> With Our Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Build;
