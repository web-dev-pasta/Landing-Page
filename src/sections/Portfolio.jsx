"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

import { CiLocationOn } from "react-icons/ci";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";

function Portfolio() {
  const typeRefs = useRef(null);
  const firstP = useRef(null);
  const secondP = useRef(null);
  const exploreP = useRef(null);
  const portfolioSection = useRef(null);
  const grid = useRef(null);
  const props = useRef(null);
  const links = useRef(null);

  const portfolioItems = [
    {
      img: "/assets/images/port-1.jpg",
      title: "Azure Heights",
      subtitle: "Luxury Residences",
      location: "Dubai Marina",
      dataItems: [
        { title: "Price", value: "from $290k" },
        { title: "Installement Plan", value: "for 10 years" },
        { title: "Initial Payment", value: "$30,000" },
        {
          title: "Upgraded Features",
          icons: [
            <PiPaintBrushBroadDuotone
              key="paint"
              className="text-2xl text-gray-400"
            />,
            <RiSofaLine key="sofa" className="text-2xl text-gray-400" />,
          ],
        },
        { title: "Completion Date", value: "09/25" },
      ],
    },
    {
      img: "/assets/images/port-2.jpg",
      title: "Palm Oasis",
      subtitle: "Beachfront Villas",
      location: "Palm Jumeirah",
      dataItems: [
        { title: "Price", value: "from $1.2M" },
        { title: "Installement Plan", value: "for 7 years" },
        { title: "Initial Payment", value: "$150,000" },
        {
          title: "Upgraded Features",
          icons: [<RiSofaLine key="sofa" className="text-2xl text-gray-400" />],
        },
        { title: "Completion Date", value: "06/27" },
      ],
    },
    {
      img: "/assets/images/port-3.jpg",
      title: "Skyline Towers",
      subtitle: "Modern Apartments",
      location: "Downtown Dubai",
      dataItems: [
        { title: "Price", value: "from $500k" },
        { title: "Installement Plan", value: "for 12 years" },
        { title: "Initial Payment", value: "$50,000" },
        {
          title: "Upgraded Features",
          icons: [
            <PiPaintBrushBroadDuotone
              key="paint"
              className="text-2xl text-gray-400"
            />,
          ],
        },
        { title: "Completion Date", value: "03/26" },
      ],
    },
    {
      img: "/assets/images/port-4.jpg",
      title: "Lagoon Breeze",
      subtitle: "Waterfront Living",
      location: "Mohammed Bin Rashid City",
      dataItems: [
        { title: "Price", value: "from $800k" },
        { title: "Installement Plan", value: "for 9 years" },
        { title: "Initial Payment", value: "$100,000" },
        {
          title: "Upgraded Features",
          icons: [<RiSofaLine key="sofa" className="text-2xl text-gray-400" />],
        },
        { title: "Completion Date", value: "12/28" },
      ],
    },
    {
      img: "/assets/images/port-5.jpg",
      title: "Sunset Villas",
      subtitle: "Private Luxury Homes",
      location: "Jumeirah Islands",
      dataItems: [
        { title: "Price", value: "from $2M" },
        { title: "Installement Plan", value: "for 5 years" },
        { title: "Initial Payment", value: "$400,000" },
        {
          title: "Upgraded Features",
          icons: [
            <PiPaintBrushBroadDuotone
              key="paint"
              className="text-2xl text-gray-400"
            />,
            <RiSofaLine key="sofa" className="text-2xl text-gray-400" />,
          ],
        },
        { title: "Completion Date", value: "08/29" },
      ],
    },
    {
      img: "/assets/images/port-6.jpg",
      title: "Harbor Residences",
      subtitle: "Exclusive Apartments",
      location: "Dubai Creek",
      dataItems: [
        { title: "Price", value: "from $350k" },
        { title: "Installement Plan", value: "for 15 years" },
        { title: "Initial Payment", value: "$25,000" },
        {
          title: "Upgraded Features",
          icons: [
            <PiPaintBrushBroadDuotone
              key="paint"
              className="text-2xl text-gray-400"
            />,
          ],
        },
        { title: "Completion Date", value: "05/30" },
      ],
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioSection.current,
        start: "top 60%",
      },
      defaults: { ease: "power2.out", duration: 1.5 },
    });

    gsap.set(firstP.current, { right: "4px" });

    tl.fromTo(
      typeRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        clipPath: "inset(0 0 0 0px round 4px 4px 4px 4px)",
      },
      0.25
    )
      .to(firstP.current, { left: "4px", right: "initial" }, 0.25)
      .to(secondP.current, { opacity: 1, duration: 1 }, 0.5);

    gsap.from(exploreP.current, {
      scale: 0.85,
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: { trigger: portfolioSection.current, start: "top 60%" },
    });

    gsap.from(grid.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scale: 0.95,
      scrollTrigger: { trigger: grid.current, start: "top 80%" },
    });
    gsap.from([props.current, links.current], {
      opacity: 0.2,
      scale: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: props.current,
        start: "top bottom",
      },
    });
    gsap.from(".link-icon", {
      opacity: 0,
      y: 20,
      scale: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: props.current,
        start: "top bottom",
      },
    });
    gsap.to(portfolioSection.current, {
      scale: 0.94,
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      scrollTrigger: {
        trigger: portfolioSection.current,
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.to(portfolioSection.current, {
      y: 80,
      scrollTrigger: {
        trigger: ".video-section",
        start: "bottom 75%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    const images = gsap.utils.toArray(".parallax-image");
    images.forEach((img) => {
      gsap.to(img, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });

  return (
    <section
      ref={portfolioSection}
      className="portfolio-section min-h-screen bg-[#232323] px-10 relative -top-20 pb-[100px]"
      style={{ zIndex: 9 }}
    >
      <div className="flex justify-between items-center flex-col gap-4 lg:flex-row text-center">
        <div>
          <p
            className="capitalize text-white sm:text-5xl font-light text-[8vw]"
            ref={exploreP}
          >
            explore our property protfolio
          </p>
        </div>
        <div
          className="types flex items-center bg-[#383838] p-1 rounded-sm flex-wrap justify-center relative w-[296px] h-[44px]"
          ref={typeRefs}
          style={{ clipPath: `inset(0 0 0 167px round 4px 4px 4px 4px)` }}
        >
          <p
            className="font-normal text-sm py-2 rounded-sm cursor-pointer px-5 absolute bg-white z-10"
            ref={firstP}
          >
            Appartments
          </p>
          <p
            className="font-normal text-sm py-2 rounded-sm cursor-pointer px-5 absolute right-[99px] opacity-0 text-white"
            ref={secondP}
          >
            Villas
          </p>
          <p className="font-normal text-sm py-2 rounded-sm cursor-pointer px-5 absolute right-1 text-white">
            For Rent
          </p>
        </div>
      </div>

      <div
        ref={grid}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-16 auto-rows-[350px] lg:auto-rows-[750px]"
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden rounded-3xl p-10 group transition duration-200 mx-auto"
          >
            <div className="hidden lg:flex flex-col justify-between h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-xl [text-shadow:-6px_2px_14px_black]">
                {item.title}
                <br />
                {item.subtitle}
              </p>

              <div className="flex flex-col gap-6">
                <div className="self-end bg-[#D6E7EF] flex gap-2 items-center rounded-lg text-black font-light py-5 px-3">
                  <span className="text-xl">
                    <CiLocationOn />
                  </span>
                  <span>{item.location}</span>
                </div>

                <div className="flex flex-wrap gap-[8px]">
                  {item.dataItems.map((data, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg px-4 py-2 flex flex-col flex-1 justify-between"
                    >
                      <p className="text-[#777] text-xs font-light">
                        {data.title}
                      </p>
                      {data.value && (
                        <p className="text-black whitespace-nowrap montserrat">
                          {data.value}
                        </p>
                      )}
                      {data.icons && (
                        <div className="flex gap-2 text-black text-lg mt-1">
                          {data.icons}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <Image
                src={item.img}
                alt={`portfolio-${index + 1}`}
                fill
                className="parallax-image object-cover "
                style={{ scale: 1.4 }}
              />
            </div>

            <span className="absolute lg:top-[40px] right-[40px] top-[20px] w-[40px] h-[40px] flex justify-center items-center bg-[#DAE5EA] rounded-full p-1">
              <RxArrowTopRight className="text-[25px]" />
            </span>
          </div>
        ))}
      </div>

      <div className="props flex mt-12 relative justify-center xl:justify-end">
        <p
          ref={props}
          className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 font-light bg-[#DAE5EA] rounded-full px-4 py-2 cursor-pointer"
        >
          All Properties
        </p>
        <div className="socials flex items-center gap-[20px] text-white flex-col sm:flex-row sm:gap-[80px]">
          <div className="text" ref={links}>
            <p>Don't Miss Out on Hot Deals!</p>
            <p>Follow Us on Social Media</p>
          </div>
          <div className="links flex gap-4 text-3xl items-center">
            <div className="link-icon bg-[#383838] w-12 h-12 flex justify-center items-center rounded-lg">
              <AiOutlineYoutube />
            </div>
            <div className="link-icon bg-[#383838] w-12 h-12 flex justify-center items-center rounded-lg">
              <AiOutlineInstagram />
            </div>
            <div className="link-icon bg-[#383838] w-12 h-12 flex justify-center items-center rounded-lg">
              <PiTiktokLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
