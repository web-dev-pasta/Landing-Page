import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineKey } from "react-icons/hi";
import { TbHome2 } from "react-icons/tb";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import ScrollVelocity from "@/components/scroll-velocity";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/data/dataSlice";

function Video() {
  const dispatch = useDispatch();
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

    const tween = gsap.fromTo(
      video.current,
      { "--radius": "30px" },
      {
        "--radius": "0px",
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: video.current,
          start: "top 80%",
          end: "top top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
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
    gsap.to(video.current, {
      scale: 0.94,
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      scrollTrigger: {
        trigger: videoSection.current,
        start: "bottom 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.to(video.current, {
      y: -50,
      scrollTrigger: {
        trigger: videoSection.current,
        start: "bottom 75%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.to(videoSection.current, {
      backgroundColor: `#232323`,
      duration: 1e-9,
      ease: "none",
      scrollTrigger: {
        trigger: videoSection.current,
        start: "top top",
        onEnter: () =>
          gsap.set(videoSection.current, { backgroundColor: "#232323" }),
        onLeaveBack: () =>
          gsap.set(videoSection.current, { backgroundColor: "#F7F6F1" }),
      },
    });
  });

  const icons = [{ label: <TbHome2 /> }, { label: <HiOutlineKey /> }];
  return (
    <section
      className="video-section min-h-screen bg-[#F7F6F1] relative overflow-hidden"
      ref={videoSection}
    >
      <div className="icons absolute left-1/2 transform -translate-x-1/2 top-[70px] z-50 flex gap-3">
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
      <div className="video w-full h-full relative z-10 pointer-events-none">
        <video
          id="test"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="w-screen h-screen object-cover -z-10 pointer-events-none"
          ref={video}
          style={{
            "--radius": "30px",
            clipPath: "inset(30% round var(--radius))",
          }}
          onLoadedData={() => dispatch(setLoading(false))}
        >
          <source src="/assets/videos/hero-small.mp4" type="video/mp4" />
          Your Browser Does Not Support This Vdieo
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-1/2 z-10">
          <ScrollVelocity
            texts={[
              "interest free ● installment 0% ● starts with an initial payment from $25,000 ●",
            ]}
            velocity={75}
            className="custom-scroll-text text-white font-semibold"
          />
        </div>
      </div>
    </section>
  );
}

export default Video;
