import { useRef } from "react";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { HiOutlineKey } from "react-icons/hi";
import { TbHome2 } from "react-icons/tb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import { FiDownload } from "react-icons/fi";

function Discover() {
  const iconRefs = useRef([]);
  const sectionRef = useRef(null);
  const grid = useRef(null);
  const contact = useRef(null);
  const contactText = useRef(null);
  useGSAP(() => {
    gsap.from(".span-discover", {
      y: 60,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
      },
    });
    gsap.from(iconRefs.current, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20px bottom",
      },
    });
    gsap.from(grid.current, {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: grid.current,
        start: "top bottom",
      },
    });
    gsap.set(contact.current, {
      clipPath: `inset(0 76.7% 0 0 round 0 50px 50px 0)`,
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
  }, []);

  const areas = {
    "area-one": ["/assets/images/build-1.jpg", "/assets/images/build-2.jpg"],
    "area-two": [
      "/assets/images/build-3.jpg",
      "/assets/images/bulid-4.jpg",
      "/assets/images/build-5.jpg",
    ],
    "area-three": [
      "/assets/images/build-6.jpg",
      "/assets/images/build-7.jpg",
      "/assets/images/build-8.jpg",
    ],
    "area-four": [
      "/assets/images/build-9.jpg",
      "/assets/images/build-10.jpg",
      "/assets/images/build-11.jpg",
    ],
    "area-five": ["/assets/images/build-12.jpg", "/assets/images/build-8.jpg"],
  };

  const areaRows = {
    "area-one": "grid-rows-[200px_1fr]",
    "area-two": "grid-rows-[350px_380px_1fr]",
    "area-three": "grid-rows-[200px_350px_1fr]",
    "area-four": "grid-rows-[350px_230px_1fr]",
    "area-five": "grid-rows-[320px_1fr]",
  };

  const captions = [
    "Modern\nOffice",
    "Dream\nVilla",
    "Private\nEscape",
    "Grand\nLobby",
    "Creative\nSpace",
    "Luxury\nStay",
    "Work\nHub",
    "Modern\nOffice",
    "Perfect\nPools",
    "Sea\nBreeze",
    "Chill\nSpot",
    "Blue\nOasis",
    "Creative\nSpace",
  ];
  let captionIndex = 0;
  const allImages = Object.values(areas).flat();
  const icons = [{ label: <TbHome2 /> }, { label: <HiOutlineKey /> }];
  return (
    <section className="bg-white relative mt-30" ref={sectionRef}>
      <div className="icons absolute gap-2 items-center top-16 right-16 hidden md:flex">
        {icons.map(({ label }, i) => {
          return (
            <div
              className={`icon-${
                i + 1
              } cursor-pointer rounded-full text-[#c9c9c9bf] bg-[#232323] text-2xl w-9 h-9 flex justify-center items-center`}
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
            >
              {label}
            </div>
          );
        })}
      </div>
      <div className="sm:text-5xl text-center leading-normal mb-10 text-[8vw]">
        <div
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
          }}
        >
          <span className="inline-block span-discover">
            Discover Your Ideal
          </span>
        </div>
        <div
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
          }}
        >
          <span className="inline-block span-discover">Property Type</span>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-10" ref={grid}>
        <div className="hidden lg:grid gap-2 grid-cols-5 grid-rows-[repeat(10,90px)] grid-areas">
          {Object.entries(areas).map(([area, images], areaIndex) => (
            <div
              key={areaIndex}
              className={`${area} grid ${areaRows[area]} gap-2`}
            >
              {images.map((src, imgIndex) => {
                const caption = captions[captionIndex++];

                if (area === "area-three" && imgIndex === images.length - 1) {
                  return (
                    <div
                      key={imgIndex}
                      className="rounded-2xl bg-white flex flex-col items-center justify-between py-4"
                    >
                      <div className="logo">
                        <Image
                          src={`/assets/images/logo-discover.svg`}
                          width={70}
                          height={70}
                          alt="logo-discover"
                        />
                      </div>
                      <div className="text-center text-black font-light text-sm">
                        Explore Our Diverse Range of Property Types and Find
                        Your Perfect Match
                      </div>
                      <div
                        className="phone p-[4px] bg-[#2D2D2D] rounded-full text-white flex items-center w-fit cursor-pointer "
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
                        <p
                          className="px-4 font-light text-white whitespace-nowrap text-sm"
                          ref={contactText}
                        >
                          Catalog Download
                        </p>
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={imgIndex}
                    className="rounded-2xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10"></div>

                    <p className="absolute bottom-4 left-4 text-white text-xl z-20 transition duration-300 whitespace-pre-line">
                      {caption}
                    </p>

                    <span className="absolute w-[30px] h-[30px] top-2 right-2 flex justify-center items-center bg-[#DAE5EA] rounded-full p-1 z-20 opacity-0 group-hover:opacity-100 transition">
                      <RxArrowTopRight className="text-[25px]" />
                    </span>

                    <Image
                      src={src}
                      alt={caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
                      className="object-cover object-center group-hover:scale-[1.1] transition duration-300 ease-in origin-center"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="
          grid lg:hidden sm:gap-2
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-4
        "
        >
          {allImages.slice(0, 9).map((src, index) => {
            const caption = captions[index];
            return (
              <div
                key={index}
                className="rounded-2xl relative overflow-hidden group h-[250px]"
              >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10"></div>

                <p className="absolute bottom-4 left-4 text-white text-xl z-20 transition duration-300 whitespace-pre-line">
                  {caption}
                </p>

                <span className="absolute w-[30px] h-[30px] top-2 right-2 flex justify-center items-center bg-[#DAE5EA] rounded-full p-1 z-20 opacity-0 group-hover:opacity-100 transition">
                  <RxArrowTopRight className="text-[25px]" />
                </span>

                <Image
                  src={src}
                  alt={caption}
                  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                  fill
                  className="object-cover object-center group-hover:scale-[1.1] transition duration-300 ease-in origin-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Discover;
