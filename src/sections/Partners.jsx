"use client";
import { useRef } from "react";
import LogoLoop from "@/components/logo-loop";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Partners() {
  const explore = useRef(null);
  const section = useRef(null);
  useGSAP(() => {
    gsap.from(section.current, {
      scale: 0.9,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
    });
  }, []);
  const imageLogos = [
    {
      src: "/assets/images/1-parteners.svg",
      alt: "Company 1",
    },
    {
      src: "/assets/images/2-parteners.svg",
      alt: "Company 2",
    },
    {
      src: "/assets/images/3-parteners.svg",
      alt: "Company 3",
    },
    {
      src: "/assets/images/4-parteners.png",
      alt: "Company 4",
    },
    {
      src: "/assets/images/5-parteners.svg",
      alt: "Company 5",
    },
    {
      src: "/assets/images/6-parteners.svg",
      alt: "Company 6",
    },
  ];
  const faqs = [
    "What types of properties do we offer in Dubai?",
    "What are the payment options available for purchasing a property?",
    "Can foreign national buy property in Dubai?",
    "What is the process for obtaining a residency visa through property investment?",
    "Are there any additional costs associated with property ownership in Dubai?",
    "Do we offer property management services for rental properties?",
    "Can we assist with property financing for non-resident buyers?",
  ];
  return (
    <section
      className="min-h-screen bg-[#F7F6F1] relative z-[1] rounded-t-4xl flex flex-col justify-between"
      ref={section}
    >
      <p className="text-center py-8 text-xl">Our Valued parteners</p>
      <div className="h-[200px] relative overflow-hidden py-5">
        <LogoLoop
          logos={imageLogos}
          speed={50}
          direction="left"
          logoHeight={120}
          gap={150}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#f7f6f18c"
          ariaLabel="Technology partners"
          className=""
        />
      </div>
      <div className="landing px-10 flex gap-[100px] max-w-[1440px] mx-auto py-8 flex-col lg:flex-row">
        <div className="text mx-auto lg:mx-[initial]">
          <div className="explore flex items-center gap-2 mb-7 justify-center lg:justify-start">
            <span className="inline-block w-3 h-3 bg-black rounded-full"></span>
            <p ref={explore}>Explore Our Advantages</p>
          </div>
          <div className="sm:text-5xl leading-tight text-center lg:text-start text-[8vw]">
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="span-stands inline-block ">Frequent Asked</span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="span-stands inline-block">Questions</span>
            </div>
          </div>
          <p className="text-[15px] text-gray-500 max-w-[300px] leading-relaxed text-center lg:text-start mx-auto lg:mx-[initial] mt-5">
            At Monte, we offer more than just real estate{" "}
            <br className="hidden sm:block" />
            services; we provide an unparalleled experience tailored to meet
            your needs <br className="hidden sm:block" />
            and exceed your expectations.
          </p>
        </div>
        <div className="table px-4 py-10 bg-white rounded-2xl flex-1">
          {faqs.map((question, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "border-y" : "border-b"
              } border-gray-200`}
            >
              <div className="py-5 pr-4 flex justify-between items-center gap-4">
                <p>{question}</p>
                <FaPlus className="text-gray-700 min-w-5 hidden sm:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
