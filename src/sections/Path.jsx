"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Path() {
  const sectionRef = useRef(null);
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);
  const centerCircle = useRef(null);

  // flags: become true only when the timeline completes
  const playedFirst = useRef(false);
  const playedSecond = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // explicit initial state
      gsap.set(
        [leftCircle.current, rightCircle.current, centerCircle.current],
        { x: 0, y: 0 }
      );

      // First phase timeline (paused)
      const tlFirst = gsap.timeline({ paused: true });
      tlFirst
        .addLabel("first")
        .to(
          leftCircle.current,
          { y: 100, x: 230, duration: 1.5, ease: "power2.inOut" },
          "first"
        )
        .to(
          rightCircle.current,
          { y: 100, x: -230, duration: 1.5, ease: "power2.inOut" },
          "first"
        )
        .to(
          centerCircle.current,
          { y: -80, duration: 1.5, ease: "power2.inOut" },
          "first"
        );

      // When tlFirst actually finishes, mark it played
      tlFirst.eventCallback("onComplete", () => {
        playedFirst.current = true;
      });

      // Second phase timeline (paused)
      const tlSecond = gsap.timeline({ paused: true });
      tlSecond
        .addLabel("second")
        .to(
          leftCircle.current,
          { y: -30, x: 316, duration: 1.5, ease: "power2.inOut" },
          "second"
        )
        .to(
          rightCircle.current,
          { y: -30, x: -316, duration: 1.5, ease: "power2.inOut" },
          "second"
        )
        .to(
          centerCircle.current,
          { y: -30, duration: 1.5, ease: "power2.inOut" },
          "second"
        );

      // When tlSecond actually finishes, mark it played
      tlSecond.eventCallback("onComplete", () => {
        playedSecond.current = true;
      });

      // pinned region length
      const pinEnd = "+=800";

      // progress thresholds inside pinned region
      const phase1At = 0.12; // start first phase when pinned progress >= 0.12
      const phase2At = 0.55; // start second phase when pinned progress >= 0.55

      const mainST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: pinEnd,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const p = self.progress; // 0..1 across pinned region

          // Start first phase when we cross the threshold and first hasn't completed yet.
          // If it is already running (.isActive()), we don't retrigger.
          if (p >= phase1At && !playedFirst.current && !tlFirst.isActive()) {
            tlFirst.play();
          }

          // Start second phase only if:
          //  - we crossed the phase2 threshold
          //  - second hasn't completed yet
          //  - AND first has already fully completed (ensures sequencing)
          //  - AND second isn't already running
          if (
            p >= phase2At &&
            !playedSecond.current &&
            tlFirst.progress() >= 1 &&
            !tlSecond.isActive()
          ) {
            tlSecond.play();
          }

          // IMPORTANT: no reversing on scroll-back. We intentionally do not reverse timelines here,
          // so once a timeline completes it keeps its final state even if you scroll up.
        },
        // markers: true, // enable if you want to debug positions
      });

      // cleanup
      return () => {
        mainST.kill();
        tlFirst.kill();
        tlSecond.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#232323] text-white relative overflow-hidden"
    >
      <p className="font-light text-5xl text-center absolute top-10 w-full">
        Path to Smart Ownership
      </p>

      <div className="circles h-screen flex justify-center items-center gap-4 relative">
        <div
          ref={leftCircle}
          className="circle h-[300px] w-[300px] border border-white rounded-full flex justify-center items-center"
        >
          <p className="text-center">
            10% Initial
            <br />
            Payment
          </p>
        </div>
        <div
          ref={centerCircle}
          className="circle h-[300px] w-[300px] border border-white rounded-full flex justify-center items-center"
        >
          <p className="text-center">
            5 years installment,
            <br />
            0% overpayment
          </p>
        </div>
        <div
          ref={rightCircle}
          className="circle h-[300px] w-[300px] border border-white rounded-full flex justify-center items-center"
        >
          <p className="text-center">Rental income - 15%</p>
        </div>
      </div>
    </section>
  );
}

export default Path;
