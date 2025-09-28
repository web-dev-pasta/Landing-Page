import Image from "next/image";
import { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const logo = useRef(null);
  const section = useRef(null);
  useGSAP(() => {}, []);
  return (
    <section
      ref={section}
      className="relative min-h-screen bg-[#F7F6F1] px-8 py-10 lg:py-20 flex -z-10"
    >
      <div className="container flex mx-auto px-5 max-lg:flex-col max-lg:gap-10">
        <div className="left flex-1 flex flex-col justify-between">
          <div className="logo flex flex-col max-lg:gap-3">
            <Image
              src="/assets/images/logo.svg"
              alt="logo_img"
              width={140}
              height={140}
              className="w-[140px] mx-auto lg:mx-[initial]"
              ref={logo}
            />
            <p className="max-lg:text-center">
              Building Your Dreams In Real Estate
            </p>
          </div>
          <div className="subscribe flex flex-col gap-6 max-lg:items-center max-lg:text-center">
            <p>Subscribe to our news</p>
            <p className="text-[15px] text-gray-500 max-w-[300px] leading-relaxed">
              Stay informed and Never Miss a Beat; Subscribe to Our Exclusive
              News Updates!
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
              <Image
                src="/assets/images/map.png"
                alt="map"
                width={252}
                height={252}
                sizes="100vw"
                className="rounded-xl"
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
                <Image
                  src="/assets/images/expert.jpg"
                  alt="expert"
                  width={64} 
                  height={64}
                  sizes="100vw"
                  className="rounded-full"
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
  );
}

export default Footer;
