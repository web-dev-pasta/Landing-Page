import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiPhoneCallLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { PiHandCoinsLight } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuCircleDivide } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Stands() {
  const contact = useRef(null);
  const contactText = useRef(null);
  const standsSection = useRef(null);
  const grid = useRef(null);
  const features = [
    {
      icon: <FiUsers />,
      title: "Diversity",
      desc: "Approximately 90% of Dubai's population consists of foreigners, reflecting its rich multicultural environment and tolerant attitude towards all.",
    },
    {
      icon: <FiShield />,
      title: "Safety",
      desc: "Dubai consistently leads global rankings as one of the safest cities worldwide. The Emirates also secured the second position among the safest countries on the planet, according to Global Finance.",
    },
    {
      icon: <PiHandCoinsLight />,
      title: "Stable Currency",
      desc: "The dirham's exchange rate has been firmly pegged to the dollar for over 20 years, ensuring stability and confidence in financial transactions.",
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "Resident Visa Opportunities",
      desc: "Investing in real estate (starting from AED 750,000 or USD 204,000) offers the possibility of obtaining a resident visa.",
    },
    {
      icon: <LuCircleDivide />,
      title: "Profit Tax Exemption for Residents",
      desc: "This includes income from rental properties offering attractive incentives for property owners and investors.",
    },
    {
      icon: <MdOutlineSpaceDashboard />,
      title: "Low Mortgage Rates",
      desc: "For non-residents, mortgage rates stand at an appealing 5-7%, providing accessible financing options for property purchases.",
    },
    {
      icon: <GrHomeRounded />,
      title: "Remote Property Acquisition",
      desc: "Reach out to us, and we'll assist you in selecting a worthy property while handling all transaction formalities. Moreover, with 0% commission.",
    },
  ];
  const explore = useRef(null);
  useGSAP(() => {
    gsap.from(explore.current, {
      opacity: 0,
      x: -20,
      duration: 1,
      scrollTrigger: {
        trigger: explore.current,
        start: "15px bottom",
      },
    });
    gsap.from(".span-stands", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".span-stands",
        start: "top bottom",
      },
    });
    gsap.set(contact.current, {
      clipPath: `inset(0 75% 0 0 round 0 50px 50px 0)`,
    });
    gsap.from(contactText.current, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: contact.current,
        start: "top bottom",
      },
    });
    gsap.to(contact.current, {
      clipPath: `inset(0 0% 0 0 round 0 50px 50px 0)`,
      delay: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contact.current,
        start: "top bottom",
      },
    });

    gsap.from(contact.current, {
      opacity: 0.2,
      scale: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contact.current,
        start: "top bottom",
      },
    });
    gsap.from(grid.current, {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: grid.current,
        start: "top bottom",
      },
    });
  });

  return (
    <section
      className="bg-white px-10 flex flex-col md:gap-20"
      ref={standsSection}
      style={{ zIndex: 7 }}
    >
      <div className="hero flex justify-between items-center md:items-end mb-20 max-md:flex-col max-md:gap-4">
        <div className="text">
          <div className="explore flex items-center gap-2 mb-3 max-md:justify-center">
            <span className="inline-block w-3 h-3 bg-black rounded-full"></span>
            <p ref={explore}>Explore Our Advantages</p>
          </div>
          <div className="sm:text-5xl leading-tight text-center md:text-start text-[8vw]">
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="span-stands inline-block">Why Dubai Stands</span>
            </div>
            <div
              style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
            >
              <span className="span-stands inline-block">Unrivalled?</span>
            </div>
          </div>
        </div>
        <div
          className="phone p-[4px] bg-black rounded-full text-white flex place-items-center cursor-pointer w-fit"
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
      </div>
      <div
        className="grid gap-9 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-1 max-md:justify-items-center"
        ref={grid}
      >
        {features.map((item, i) => (
          <div key={i}>
            <div className="image text-[25px] flex max-md:justify-center">
              {item.icon}
            </div>
            <p className="text-2xl my-3 max-md:text-center">
              {item.title}
            </p>
            <p className="text-[15px] text-gray-500 max-w-[300px] leading-relaxed max-md:text-center max-md:mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stands;
