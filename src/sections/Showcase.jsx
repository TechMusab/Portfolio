import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const sectionRef = useRef(null);
  const p1ref = useRef(null);
  const p2ref = useRef(null);
  const p3ref = useRef(null);

  
  useGSAP(() => {
    const projects = [p1ref, p2ref, p3ref];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card.current,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} id="work" className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            {/* LEFT */}
            <div ref={p1ref} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde" />
              </div>
              <div className="text-content">
                <h2>
                  On-Demand Rides made simple with a Powerful, User-friendly App
                  called Ryde{" "}
                </h2>
                <p className="text-white-50 md:text-3xl"></p>
                An app built with React Native,Expo & Tailwind CSS for a fast
                User Friendly Experience.
              </div>
            </div>
            {/* RIGHT */}
            <div className="project-list-wrapper overflow-hidden">
              <div ref={p2ref} className="project">
                <div className="image-wrapper bg-[#ffefdb]">
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </div>
                <h2>Library Management Platform</h2>
              </div>
              <div ref={p3ref} className="project">
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="YC Directory" />
                </div>
                <h2>YC-Directory A Startup Showcase App</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
