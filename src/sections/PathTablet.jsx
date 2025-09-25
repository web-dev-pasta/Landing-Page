import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parse from "html-react-parser";
import { FiDownload } from "react-icons/fi";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function PathTablet() {
  const sectionRef = useRef(null);
  const contact = useRef(null);
  const contactText = useRef(null);
  useGSAP(() => {
    gsap.set(contact.current, {
      clipPath: `inset(0 78% 0 0 round 0 50px 50px 0)`,
    });
    const initialTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=10 bottom",
      },
    });
    initialTl.from(".path-span", {
      y: 80,
      duration: 1,
      ease: "power2.out",
    });
    initialTl.from(
      ".animated-circle",
      {
        scale: 0.8,
        opacity: 0.5,
        duration: 3,
        ease: "power3.out",
      },
      "<"
    );
    gsap.from(contactText.current, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=100 top",
      },
    });
    gsap.to(contact.current, {
      clipPath: `inset(0 0% 0 0 round 0 50px 50px 0)`,
      delay: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=100 top",
      },
    });

    gsap.from(contact.current, {
      opacity: 0.2,
      scale: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=100 top",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#232323] text-white flex flex-col items-center justify-between py-10 px-5 relative -top-[1px]"
    >
      <p
        className="text-center text-white text-[8.3vw] sm:text-[45px] lg:text-[65px] font-light"
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
      >
        <span className="path-span inline-block">Path to Smart Ownership</span>
      </p>
      <div className="animated-circle w-full aspect-square max-w-[400px] rounded-full bg-transparent border border-white flex justify-center items-center p-10">
        <span className="text-path">Awareness - Discipline</span>
      </div>
      <div
        className="phone p-[4px] bg-[#2D2D2D] rounded-full text-white flex items-center w-fit cursor-pointer"
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

export default PathTablet;
