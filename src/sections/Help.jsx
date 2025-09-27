import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import Image from "next/image";

function Help() {
  const photo = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // يفتح القص تدريجياً
    tl.to(photo.current, {
      clipPath: "inset(0% round var(--radius))",
      scrollTrigger: {
        trigger: photo.current,
        start: "top 70%",
        end: "top 10px",
        scrub: true,
      },
    });

    // يلغى البوردر radius
    tl.to(photo.current, {
      "--radius": "0px",
      scrollTrigger: {
        trigger: photo.current,
        start: "top 30%",
        end: "top top",
        scrub: true,
      },
    });
  });

  return (
    <section className="min-h-screen bg-white">
      <div
        className="photo w-full h-screen relative"
        style={{
          "--radius": "20px",
          clipPath: "inset(10% round var(--radius))", // البداية 10% بدل 30%
        }}
        ref={photo}
      >
        <Image
          src={`/assets/images/Help.webp`}
          fill
          sizes="100vw"
          alt="Help-img"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Help;
