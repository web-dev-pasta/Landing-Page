"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parse from "html-react-parser";
import { FiDownload } from "react-icons/fi";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Path() {
  const sectionRef = useRef(null);
  const circlesRef = useRef([]);
  const contact = useRef(null);
  const contactText = useRef(null);

  useGSAP(() => {
    gsap.set(contact.current, {
      clipPath: `inset(0 78% 0 0 round 0 50px 50px 0)`,
    });
    gsap.from(contactText.current, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "300px top",
      },
    });
    gsap.to(contact.current, {
      clipPath: `inset(0 0% 0 0 round 0 50px 50px 0)`,
      delay: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "300px top",
      },
    });

    gsap.from(contact.current, {
      opacity: 0.2,
      scale: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "300px top",
      },
    });
    gsap.set(".p-smart", {
      y: 230,
      opacity: 0,
    });
    const initialTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=100 bottom",
      },
    });
    initialTl
      .fromTo(
        circlesRef.current[0],
        {
          x: 20,
          y: -110,
          opacity: 0.5,
          ease: "power2.inOut",
        },
        {
          x: 120,
          duration: 1.3,
          y: 0,
          opacity: 1,
        }
      )
      .from(
        circlesRef.current[1],
        {
          y: -110,
          ease: "power2.inOut",
          duration: 1.3,
        },
        {
          y: 0,
          x: 0,
        },
        "<"
      )
      .fromTo(
        circlesRef.current[2],
        {
          x: -20,
          y: -110,
          ease: "power2.inOut",
          opacity: 0.5,
        },
        {
          x: -120,
          y: 0,
          duration: 1.3,

          opacity: 1,
        },
        "<"
      )
      .from(
        ".path-span",
        {
          y: 80,
          opacity: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "150px top",
      },
    });
    gsap.to(".text-path", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "150px top",
      },
    });
    gsap.to(".p-smart", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "150px top",
      },
    });

    const secondTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "300px top",
      },
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=550",
      pin: true,
    });

    tl.addLabel("phase1")
      .to(
        circlesRef.current[0],
        {
          y: -40,
          x: 320,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase1"
      )
      .to(
        circlesRef.current[1],
        {
          y: -200,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase1"
      )
      .to(
        circlesRef.current[2],
        {
          y: -40,
          x: -320,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase1"
      );

    secondTl
      .addLabel("phase2")
      .to(
        circlesRef.current[0],
        {
          y: -110,
          x: 440,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase2"
      )
      .to(
        circlesRef.current[1],
        {
          y: -110,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase2"
      )
      .to(
        circlesRef.current[2],
        {
          y: -110,
          x: -440,
          duration: 1.5,
          ease: "power2.inOut",
          immediateRender: false,
          overwrite: "auto",
        },
        "phase2"
      );
  }, []);

  const text = [
    "10% initial<br/>Payment",
    "5 years installment,<br/>0% overpayment",
    "Rental income - 15%",
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#232323] text-white flex flex-col"
    >
      <p
        className="text-center text-white text-[8.3vw] sm:text-[45px] lg:text-[65px] font-light my-20"
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
      >
        <span className="path-span inline-block">Path to Smart Ownership</span>
      </p>
      <p className="text-center p-smart font-light">
        Smart
        <br />
        Ownership
      </p>
      <div className="cricles flex justify-center gap-10 flex-1 items-center">
        {text.map((e, i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i] = el)}
            className="w-full aspect-square max-w-[400px] rounded-full bg-transparent border border-white flex justify-center items-center"
          >
            <span className="text-path">{parse(e)}</span>
          </div>
        ))}
      </div>
      <div
        className="phone p-[4px] bg-[#2D2D2D] rounded-full text-white flex items-center w-fit cursor-pointer mx-auto relative bottom-20"
        ref={contact}
        style={{
          transformOrigin: `20px center`,
        }}
      >
        <div className="icon bg-white rounded-full p-2">
          <span className="text-xl">
            <FiDownload className="text-[#5A6870]" />
          </span>
        </div>
        <p className="px-4 font-light text-white" ref={contactText}>
          Catalog Download
        </p>
      </div>
    </section>
  );
}

export default Path;
