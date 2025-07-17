import React from "react";
import Title from "../components/Title";
import { techStackIcons } from "../constants/index.js";
import Techicon from "../components/Techicon.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function Tech() {
    useGSAP(() => {
        // This animation is triggered when the user scrolls to the #skills wrapper
        // The animation starts when the top of the wrapper is at the center of the screen
        // The animation is staggered, meaning each card will animate in sequence
        // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
        gsap.fromTo(
          ".tech-card",
          {
            // Initial values
            y: 50, // Move the cards down by 50px
            opacity: 0, // Set the opacity to 0
          },
          {
            // Final values
            y: 0, // Move the cards back to the top
            opacity: 1, // Set the opacity to 1
            duration: 1, // Duration of the animation
            ease: "power2.inOut", // Ease of the animation
            stagger: 0.2, // Stagger the animation by 0.2 seconds
            scrollTrigger: {
              trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
              start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
            },
          }
        );
      });
  return (
    <>
      <div id="skills" className="flex-center section-padding">
        <div>
          <Title
            title="My Preffered Tech Stack"
            sub="What Skills I Bring to the Table"
          ></Title>
          <div className="tech-grid">
            {techStackIcons.map((icon) => (
              <div
                key={icon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <Techicon model={icon}></Techicon>
                  </div>
                  <div className="padding-x w-full ">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
