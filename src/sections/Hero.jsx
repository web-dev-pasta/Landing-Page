"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import { TfiAlignRight } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";
import { PiPhoneCallLight } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { LuDownload } from "react-icons/lu";

function Hero() {
  const animatedIcons = useRef([]);
  const secondAnimatedIcons = useRef([]);
  const animatedTextLinesRefs = useRef([]);
  const download = useRef(null);
  const logo = useRef(null);
  const animtedLittleHeader = useRef(null);
  const heroImage = useRef(null);
  const heroImageMobile = useRef(null);
  const littleImage = useRef(null);
  const littleImageText = useRef(null);
  const contact = useRef(null);
  const contactText = useRef(null);
  const heroPattern = useRef(null);
  const animatedTextLines = [
    "Real Estate in Dubai",
    "Ideal for Living and",
    "Investing",
  ];
  const secondAnimatedTextLines = useRef(null);
  const icons = [{ label: <TfiBook /> }, { label: <TfiAlignRight /> }];
  const secondHeaderIcons = [
    { label: <CiHeart className="text-2xl" />, fill: false },
    { label: <GrHomeRounded className="text-black" />, fill: true },
  ];

  useGSAP(() => {
    gsap.set(contact.current, {
      clipPath: `inset(0 75% 0 0 round 0 50px 50px 0)`,
    });
    gsap.from(
      [
        download.current,
        animatedIcons.current,
        secondAnimatedIcons.current,
        littleImage.current,
        contact.current,
      ],
      {
        opacity: 0.2,
        scale: 0,
        duration: 2,
        ease: "power3.out",
      }
    );
    gsap.from(logo.current, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power3.out",
    });
    gsap.from(animatedTextLinesRefs.current, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power3.out",
      scale: 0.85,
    });
    gsap.from(".styled-span", {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power3.out",
      scale: 0.85,
    });
    gsap.from(animtedLittleHeader.current, {
      opacity: 0,
      delay: 0.5,
      y: -10,
      duration: 0.5,
    });
    gsap.from(heroImage.current, {
      opacity: 0.5,
      scale: 1.15,
      duration: 2,
    });
    gsap.from(littleImageText.current, {
      delay: 0.4,
      duration: 1,
      opacity: 0,
      x: -20,
    });
    gsap.from(contactText.current, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0.95,
    });
    gsap.from(secondAnimatedTextLines.current, {
      duration: 1,
      opacity: 0,
      scale: 0.95,
      y: 20,
    });
    gsap.from([heroImageMobile.current, heroPattern.current], {
      opacity: 0.5,
      scale: 1.15,
      duration: 2,
    });
    gsap.to(contact.current, {
      clipPath: `inset(0 0% 0 0 round 0 50px 50px 0)`,
      delay: 1,
      duration: 2,
      ease: "power3.out",
    });
  });

  return (
    <section className="min-h-screen flex p-2 relative">
      <div className="absolute inset-0 -z-10 lg:hidden overflow-hidden">
        <Image
          ref={heroImageMobile}
          src="/assets/images/burj-al-arab.jpg"
          alt="hero_img"
          fill
          sizes="100vw"
          style={{ objectPosition: "28%" }}
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden max-lg:hidden">
        <Image
          ref={heroPattern}
          src="/assets/images/bg-2.svg"
          alt="hero_bg_pattern"
          fill
          sizes="100vw"
          className="[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] [mask-repeat:no-repeat] [mask-size:100%_110%] object-cover"
        />
      </div>
      <div className="left flex-1 flex flex-col justify-between p-5 ">
        <header className="flex justify-between items-center">
          <div
            className="logo"
            style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
          >
            <Image
              ref={logo}
              src="/assets/images/logo.svg"
              alt="logo_img"
              width={140}
              height={50}
            />
          </div>
          <div className="icons flex gap-5">
            {icons.map(({ label }, i) => {
              return (
                <div
                  className={`icon-${
                    i + 1
                  } cursor-pointer bg-[#f6f6f6a3] lg:bg-[#f6f6f6] w-fit p-2 rounded sm:text-3xl flex justify-center items-center text-2xl`}
                  key={i}
                  ref={(el) => (animatedIcons.current[i] = el)}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </header>
        <main className="text-center">
          <p
            className="capitalize text-lg mb-2 text-white max-lg:[text-shadow:-6px_2px_14px_black] lg:text-black"
            ref={animtedLittleHeader}
          >
            building your dreams
          </p>
          <h1 className="sm:text-5xl text-4xl leading-tight flex flex-col max-lg:text-white max-lg:[text-shadow:-6px_2px_14px_black]">
            {animatedTextLines.map((e, i) => {
              return (
                <div
                  key={i}
                  style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                  }}
                  className="max-sm:hidden"
                >
                  <span
                    ref={(el) => (animatedTextLinesRefs.current[i] = el)}
                    className="inline-block"
                  >
                    {e}
                  </span>
                </div>
              );
            })}
            <span className="sm:hidden mx-auto" ref={secondAnimatedTextLines}>
              Real Estate in Dubai Ideal for Living and Investing
            </span>
          </h1>
        </main>
        <div className="contact flex max-sm:flex-col-reverse gap-[14px] justify-between items-center">
          <div
            className="phone p-[4px] bg-black rounded-full text-white flex place-items-center cursor-pointer"
            ref={contact}
            style={{
              transformOrigin: `20px center`,
            }}
          >
            <div className="icon bg-[#DAE5EA] rounded-full p-2">
              <span className="text-2xl">
                <PiPhoneCallLight className="fill-[#5A6870]" />
              </span>
            </div>
            <p className="px-4 font-light" ref={contactText}>
              Contact Us Now
            </p>
          </div>
          <div className="explore flex items-center gap-4 cursor-pointer">
            <p
              ref={littleImageText}
              className="max-sm:text-center max-lg:text-white max-lg:[text-shadow:-6px_2px_14px_black]"
            >
              Explore All
              <br /> Our Properties
            </p>
            <div className="image relative" ref={littleImage}>
              <Image
                src={`/assets/images/office.jpg`}
                width={70}
                height={70}
                alt="office"
                className="rounded-full"
              />
              <span className="absolute top-[40px] right-[40px] bg-[#DAE5EA] rounded-full p-1 transform ">
                <RxArrowTopRight className="text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex right rounded-4xl overflow-hidden flex-1 relative flex-col justify-between p-8 max-lg:hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            ref={heroImage}
            src="/assets/images/burj-al-arab.jpg"
            alt="hero_img"
            fill
            style={{ objectPosition: "28%" }}
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="img_header text-white text-lg font-light flex justify-between items-center px-4">
          <div className="flex flex-col max-xl:items-center">
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="styled-span inline-block">More than 1500</span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="styled-span inline-block">
                real estate properties
              </span>
            </div>
          </div>
          <div className="flex flex-col max-xl:hidden">
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="styled-span inline-block">
                From $145,000 with a
              </span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="styled-span inline-block">
                yield of 10% per annum
              </span>
            </div>
          </div>
          <div className="icons flex gap-3 items-center">
            {secondHeaderIcons.map(({ label, fill }, i) => {
              return (
                <div
                  key={i}
                  ref={(el) => (secondAnimatedIcons.current[i] = el)}
                >
                  <span
                    className={`cursor-pointer border w-9 h-9 flex items-center justify-center rounded-lg ${
                      fill ? `bg-[#FDFFFF]` : ``
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <a
          href="/assets/downloads/Burj_Al_Arab_Report_En.pdf"
          ref={download}
          download={true}
          className="relative download flex items-center gap-4 bg-[#f6f6f6] w-fit rounded-lg py-3 px-4 cursor-pointer self-end"
        >
          <p className="text-md leading-tight">
            catalog
            <br />
            download
          </p>
          <div className="icon pr-2">
            <LuDownload />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
