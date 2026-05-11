import React from "react";
import { words } from "../constants/index";
import Button from "../components/Button.jsx";
import HeroModel from "../components/HeroModel.jsx";
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
             <span className="block">Full-stack engineer building scalable, high-performance products with MERN, Next.js, AWS,</span>
             <span className="block">and AI-driven solutions.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="View My Projects"
              ></Button>
              <a
                className="md:w-80 md:h-16 w-60 h-12 cta-wrapper"
                href={resumeUrl}
                download="Muhammad-Musab-Bin-Ubaid-Resume.pdf"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">Download Resume</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="download resume" />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                className="md:w-80 md:h-16 w-60 h-12 cta-wrapper"
                href="https://github.com/TechMusab"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">GitHub</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-right.svg" alt="github link" />
                  </div>
                </div>
              </a>
              <a
                className="md:w-80 md:h-16 w-60 h-12 cta-wrapper"
                href="https://www.linkedin.com/in/musabbinubaid/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">LinkedIn</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-right.svg" alt="linkedin link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </header>

        {/* right 3d model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroModel></HeroModel>
          </div>
        </figure>
      </div>
      <AnimatedCounter></AnimatedCounter>
    </section>
  );
}
