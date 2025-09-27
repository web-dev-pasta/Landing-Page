// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import { MdEmail } from "react-icons/md";
// import { LiaTelegramPlane } from "react-icons/lia";

// gsap.registerPlugin(ScrollTrigger);

// function Help() {
//   const photo = useRef(null);
//   const section = useRef(null);
//   const start = useRef(null);

//   useGSAP(() => {
//     gsap.to(photo.current, {
//       clipPath: "inset(0% round 30px)",
//       scrollTrigger: {
//         trigger: photo.current,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true,
//       },
//     });
//     gsap.to(section.current, {
//       scale: 0.94,
//       borderRadius: `30px`,
//       scrollTrigger: {
//         trigger: section.current,
//         start: "bottom bottom",
//         end: "bottom 40%",
//         scrub: true,
//       },
//     });
//     // gsap.to(section.current, {
//     //   y: -100,
//     //   scrollTrigger: {
//     //     trigger: section.current,
//     //     start: "bottom 80%",
//     //     end: "bottom top",
//     //     scrub: true,
//     //   },
//     // });
//   }, []);

//   return (
//     <div className="bg-[#F7F6F1] min-h-[200vh] sticky top-0">
//       <section
//         className="relative min-h-screen bg-white px-8 py-8 flex items-center"
//         ref={section}
//         style={{ zIndex: 7 }}
//       >
//         <div
//           ref={photo}
//           className="relative w-full h-[850px] p-20"
//           style={{
//             clipPath: "inset(30% round 30px)",
//           }}
//         >
//           <Image
//             src="/assets/images/Help.webp"
//             alt="Help"
//             fill
//             sizes="100vw"
//             className="object-cover -z-10"
//           />
//           <div className="text flex flex-col gap-8">
//             <div>
//               <div
//                 style={{
//                   clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
//                 }}
//               >
//                 <span className="styled-span inline-block text-5xl text-white">
//                   Build Your Future
//                 </span>
//               </div>
//               <div>
//                 <span className="styled-span inline-block text-5xl text-white">
//                   With Us
//                 </span>
//               </div>
//             </div>
//             <div
//               ref={start}
//               className="start w-fit px-5 py-3 bg-white rounded-full"
//             >
//               Start Your Journey
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="min-h-screen bg-[#F7F6F1] px-8 py-10 lg:py-20 flex absolute top-0 z-[1] w-full">
//         <div className="container flex mx-auto px-5 max-lg:flex-col max-lg:gap-10">
//           <div className="left flex-1 flex flex-col justify-between">
//             <div className="logo flex flex-col max-lg:gap-3">
//               <Image
//                 src="/assets/images/logo.svg"
//                 alt="logo_img"
//                 width={140}
//                 height={140}
//                 className="w-[140px] mx-auto lg:mx-[initial]"
//               />
//               <p className="max-lg:text-center">
//                 Building Your Dreams In Real Estate
//               </p>
//             </div>
//             <div className="subscribe flex flex-col gap-6 max-lg:items-center max-lg:text-center">
//               <p>Subscribe to our news</p>
//               <p className="text-[15px] text-gray-500 max-w-[300px] leading-relaxed">
//                 Stay informed and Never Miss a Beat; Subscribe to Our Exclusive
//                 News Updates!
//               </p>
//               <div className="border-b-[1px] border-gray-300 py-2 text-gray-500 w-sm max-sm:w-[90%]">
//                 <input
//                   type="text"
//                   placeholder="Enter Your Email"
//                   className="w-full max-lg:text-center"
//                 />
//               </div>
//               <p className="w-fit px-5 py-2.5 bg-black text-white rounded-full">
//                 Subscribe
//               </p>
//             </div>
//           </div>
//           <div className="right flex-1 flex justify-between gap-5 max-md:flex-col max-md:items-center">
//             <div className="navigation flex flex-col justify-between">
//               <div className="max-lg:mb-5">
//                 <p className="mb-5 text-slate-700 max-md:text-center">
//                   Quick Navigation
//                 </p>
//                 <div className="links flex flex-col gap-5 font-medium max-md:items-center">
//                   <p>Home</p>
//                   <p>Our Properties</p>
//                   <p>Our Advantages</p>
//                   <p>Our Services</p>
//                 </div>
//               </div>
//               <div className="image">
//                 <img
//                   src="/assets/images/map.png"
//                   alt="map"
//                   className="w-63 rounded-xl"
//                 />
//                 <div className="text mt-4 flex flex-col gap-2 max-sm:text-center">
//                   <p>123 Zayed Road,</p>
//                   <p>Dubai Marina,</p>
//                   <p>Dubai, United Arab Emirates</p>
//                 </div>
//               </div>
//             </div>
//             <div className="founder flex flex-col justify-between max-md:gap-4">
//               <div className="header flex flex-col gap-3">
//                 <div className="expert flex items-center gap-3 max-sm:flex-col">
//                   <img
//                     src="/assets/images/expert.jpg"
//                     alt="expert"
//                     className="w-16 h-16 rounded-full"
//                   />
//                   <div className="text max-sm:text-center">
//                     <p className="text-sm text-gray-500 leading-relaxed">
//                       Monte Founder
//                     </p>
//                     <p>Ethan Thompson</p>
//                   </div>
//                 </div>
//                 <p className="text-lg max-sm:text-center">
//                   We are here to change your future.
//                 </p>
//                 <div className="contact flex items-center gap-5 max-sm:justify-center flex-wrap">
//                   <p className="w-fit px-5 py-2.5 bg-black text-white rounded-full">
//                     Contact Us
//                   </p>
//                   <MdEmail className="text-2xl" />
//                   <LiaTelegramPlane className="text-2xl" />
//                 </div>
//               </div>
//               <div className="footer flex flex-col gap-3 max-sm:items-center">
//                 <p className="text-sm text-gray-500 max-sm:text-center">
//                   Copyright 2025 &copy; Golden Gate Properties
//                 </p>
//                 <div className="terms flex gap-4 max-sm:flex-wrap max-sm:justify-center">
//                   <p className="lg:whitespace-nowrap">Terms Of Service</p>
//                   <p className="lg:whitespace-nowrap">Privacy Policy</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Help;
"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { MdEmail } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";

gsap.registerPlugin(ScrollTrigger);

export default function Help() {
  const container = useRef(null);
  const topSection = useRef(null);
  const photo = useRef(null);
  const absSection = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(photo.current, {
        clipPath: "inset(0% round 30px)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.to(topSection.current, {
        scale: 0.94,
        borderRadius: 30,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${container.current.offsetHeight}`,
          scrub: true,
        },
      });

      gsap.to(topSection.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${container.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      gsap.from(absSection.current, {
        y: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: absSection.current,
          start: "bottom bottom",
          end: "bottom top-=300",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F7F6F1]">
      <div ref={container} className="relative h-screen w-full overflow-hidden">
        <section
          ref={topSection}
          className="absolute inset-0 bg-white px-8 py-8 flex items-center z-20"
        >
          <div
            ref={photo}
            className="relative w-full h-[850px] p-20"
            style={{ clipPath: "inset(30% round 30px)" }}
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
              <div className="start w-fit px-5 py-3 bg-white rounded-full">
                Start Your Journey
              </div>
            </div>
          </div>
        </section>

        <section
          className="absolute inset-0 bg-[#F7F6F1] px-8 py-10 lg:py-20 flex z-10 top-5"
          ref={absSection}
        >
          <div className="container flex mx-auto px-5 max-lg:flex-col max-lg:gap-10">
            <div className="left flex-1 flex flex-col justify-between">
              <div className="logo flex flex-col max-lg:gap-3">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo_img"
                  width={140}
                  height={140}
                  className="w-[140px] max-lg:mx-auto"
                />
                <p className="max-lg:text-center">
                  Building Your Dreams In Real Estate
                </p>
              </div>
              <div className="subscribe flex flex-col gap-6 max-lg:items-center max-lg:text-center">
                <p>Subscribe to our news</p>
                <p className="text-[15px] text-gray-500 max-w-[300px] leading-relaxed">
                  Stay informed and Never Miss a Beat; Subscribe to Our
                  Exclusive News Updates!
                </p>
                <div className="border-b-[1px] border-gray-300 py-2 text-gray-500 w-sm max-sm:w-[90%]">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full max-lg:text-center"
                  />
                </div>
                <p className="w-fit px-5 py-2.5 bg-black text-white rounded-full">
                  Subscribe
                </p>
              </div>
            </div>

            <div className="right flex-1 flex justify-between gap-5 max-md:flex-col max-md:items-center">
              <div className="navigation flex flex-col justify-between">
                <div className="max-lg:mb-5">
                  <p className="mb-5 text-slate-700 max-md:text-center">
                    Quick Navigation
                  </p>
                  <div className="links flex flex-col gap-5 font-medium max-md:items-center">
                    <p>Home</p>
                    <p>Our Properties</p>
                    <p>Our Advantages</p>
                    <p>Our Services</p>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="/assets/images/map.png"
                    alt="map"
                    className="w-63 rounded-xl"
                  />
                  <div className="text mt-4 flex flex-col gap-2 max-sm:text-center">
                    <p>123 Zayed Road,</p>
                    <p>Dubai Marina,</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>

              <div className="founder flex flex-col justify-between max-md:gap-4">
                <div className="header flex flex-col gap-3">
                  <div className="expert flex items-center gap-3 max-sm:flex-col">
                    <img
                      src="/assets/images/expert.jpg"
                      alt="expert"
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="text max-sm:text-center">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Monte Founder
                      </p>
                      <p>Ethan Thompson</p>
                    </div>
                  </div>
                  <p className="text-lg max-sm:text-center">
                    We are here to change your future.
                  </p>
                  <div className="contact flex items-center gap-5 max-sm:justify-center flex-wrap">
                    <p className="w-fit px-5 py-2.5 bg-black text-white rounded-full">
                      Contact Us
                    </p>
                    <MdEmail className="text-2xl" />
                    <LiaTelegramPlane className="text-2xl" />
                  </div>
                </div>
                <div className="footer flex flex-col gap-3 max-sm:items-center">
                  <p className="text-sm text-gray-500 max-sm:text-center">
                    Copyright 2025 &copy; Golden Gate Properties
                  </p>
                  <div className="terms flex gap-4 max-sm:flex-wrap max-sm:justify-center">
                    <p className="lg:whitespace-nowrap">Terms Of Service</p>
                    <p className="lg:whitespace-nowrap">Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
