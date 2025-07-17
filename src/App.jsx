import React from "react";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import Navbar from "./components/Navbar.jsx";
import LogoSection from "./sections/Logosection.jsx";
import Featurecard from "./sections/Featurecard.jsx";
import Experience from "./sections/Experience.jsx";
import Tech from "./sections/Tech.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
      <Hero></Hero>
      <Showcase />
      <LogoSection></LogoSection>
      <Featurecard></Featurecard>
      <Experience></Experience>
      <Tech />
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
