import React from "react";
import { words } from "../constants/index";
import Button from "../components/Button.jsx";
import React, { Suspense } from "react";
const HeroModel = React.lazy(() => import("../components/HeroModel.jsx"));
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Hero() {
  const resumeUrl = new URL("../../MUSAB BIN UBAID.pdf", import.meta.url).href;

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
    {
      y:50,
      opacity:0
    },
    {
      y:0,
      opacity:1,
      stagger:0.2,
      duration:1,
      ease:"power2.inOut"
    }
  )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* left */}
        <header
          className="flex flex-col justify-center md:w-full w-screen
      md:px-20 px-5"
        >
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                      className="flex items-center md:gap-3 gap-1 pb-2"
                      key={word.text}
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                          rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
             <span className="block">Full-stack engineer building scalable, high-performance products</span> 
             <span className="block">with MERN, Next.js, AWS,and AI-driven solutions.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="View My Projects"
              ></Button>
            </div>
            <div className="flex gap-6 mt-6">
              <a
                href={resumeUrl}
                download="Muhammad-Musab-Bin-Ubaid-Resume.pdf"
                className="flex items-center justify-center w-16 h-16 rounded-full border border-white border-opacity-30 hover:border-opacity-100 transition-all hover:scale-110"
                title="Download Resume"
              >
                <img src="/images/download.svg" alt="download resume" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/TechMusab"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full border border-white border-opacity-30 hover:border-opacity-100 transition-all hover:scale-110"
                title="GitHub Profile"
              >
                <img src="/images/github.svg" alt="github link" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/musabbinubaid/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full border border-white border-opacity-30 hover:border-opacity-100 transition-all hover:scale-110"
                title="LinkedIn Profile"
              >
                <img src="/images/linkedin.png" alt="linkedin link" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </header>

        {/* right 3d model */}
        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={<div style={{width:320,height:240}}/>}>
              <HeroModel />
            </Suspense>
          </div>
        </figure>
      </div>
      <AnimatedCounter></AnimatedCounter>
    </section>
  );
}
