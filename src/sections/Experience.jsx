import React from "react";
import Title from "../components/Title";
import { educationCards, professionalCards } from "../constants";
import Glow from "../components/Glow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Experience() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <>
      <section
        id="experience"
        className="w-full md:mt-40 mt-20 section-padding xl:px-0"
      >
        <div className="w-full h-full md:px-20 px-5">
          <Title
            title="Experience & Education"
            sub="Roles, learning, and milestones"
          ></Title>
          
          {/* Education Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="mt-16 relative">
              <div className="relative z-50 xl:space-y-32 space-y-10">
                {educationCards.map((card, index) => (
                  <div key={card.title} className="exp-card-wrapper">
                    <div className="xl:w-2/6">
                      <Glow card={card} index={index}>
                        <div>
                          <img src={card.imgPath} alt={card.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded" />
                        </div>
                      </Glow>
                    </div>
                    <div className="xl:w-4/6">
                      <div className="flex items-start">
                        <div className="timeline-wrapper">
                          <div className="timeline" />
                          <div className="gradient-line w-1 h-full" />
                        </div>
                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div className="timeline-logo">
                            <img src={card.logoPath} alt="logo" />
                          </div>
                          <div>
                            <h1 className="font-semibold text-3xl">
                              {card.title}
                            </h1>
                            <p className="my-5 text-white-50">{card.date}</p>
                            <p className="text-[#839cb5] italic">
                              Highlights
                            </p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map((responsibility) => (
                                <li key={responsibility} className="text-lg">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
            <div className="mt-16 relative">
              <div className="relative z-50 xl:space-y-32 space-y-10">
                {professionalCards.map((card, index) => (
                  <div key={card.title} className="exp-card-wrapper">
                    <div className="xl:w-2/6">
                      <Glow card={card} index={index}>
                        <div>
                          <img src={card.imgPath} alt={card.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded" />
                        </div>
                      </Glow>
                    </div>
                    <div className="xl:w-4/6">
                      <div className="flex items-start">
                        <div className="timeline-wrapper">
                          <div className="timeline" />
                          <div className="gradient-line w-1 h-full" />
                        </div>
                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div className="timeline-logo">
                            <img src={card.logoPath} alt="logo" />
                          </div>
                          <div>
                            <h1 className="font-semibold text-3xl">
                              {card.title}
                            </h1>
                            <p className="my-5 text-white-50">{card.date}</p>
                            <p className="text-[#839cb5] italic">
                              Highlights
                            </p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map((responsibility) => (
                                <li key={responsibility} className="text-lg">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
