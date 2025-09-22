import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineKey } from "react-icons/hi";
import { TbHome2 } from "react-icons/tb";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import ScrollVelocity from "@/components/scroll-velocity";

function Video() {
  const videoSection = useRef(null);
  const video = useRef(null);
  const iconRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(video.current, {
      clipPath: "inset(0% round var(--radius))",
      scrollTrigger: {
        trigger: "#test",
        start: "top 70%",
        end: "top 10px",
        scrub: true,
      },
    });

    tl.to(video.current, {
      "--radius": "0px",
      scrollTrigger: {
        trigger: "#test",
        start: "top 30%",
        end: "top top",
        scrub: true,
      },
    });
    gsap.from(iconRefs.current, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: videoSection.current,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  const icons = [{ label: <TbHome2 /> }, { label: <HiOutlineKey /> }];
  return (
    <section
      className="min-h-screen bg-[#F7F6F1] relative overflow-hidden"
      ref={videoSection}
    >
      <div className="icons absolute left-1/2 transform -translate-x-1/2 top-[70px] z-10 flex gap-3  ">
        {icons.map(({ label }, i) => {
          return (
            <div
              className={`icon-${
                i + 1
              } cursor-pointer rounded-full text-[#c9c9c9bf] bg-black text-2xl w-9 h-9 flex justify-center items-center`}
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
            >
              {label}
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-1/2 z-10">
        <ScrollVelocity
          texts={[
            "interest free ● installment 0% ● starts with an initial payment from $25,000 ●",
          ]}
          velocity={75}
          className="custom-scroll-text text-white font-semibold"
        />
      </div>
      <video
        id="test"
        autoPlay
        muted
        loop
        playsInline
        className="w-screen h-screen object-cover -z-10"
        ref={video}
        style={{
          "--radius": "20px",
          clipPath: "inset(30% round var(--radius))",
        }}
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
        Your Browser Does Not Support This Vdieo
      </video>
    </section>
  );
}

export default Video;
