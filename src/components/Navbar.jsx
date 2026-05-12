import React, { useEffect } from "react";
import { useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const resumeUrl = new URL("../../MUSAB BIN UBAID.pdf", import.meta.url).href;

  useEffect(()=>{
    const handleScroll=()=>{
        const isScrolled = window.scrollY > 10;
        setScrolled(true);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className="inner">
          <a className="logo" href="#hero">
            Musab Bin Ubaid
          </a>
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li className="group" key={name}>
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
                        <a
                href={resumeUrl}
                download="Muhammad-Musab-Bin-Ubaid-Resume.pdf"
                className="cta-wrapper"
                title="Download Resume"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">Download Resume</p>
                  <div className="arrow-wrapper">
                    <img src="/images/download.svg" alt="download" />
                  </div>
                </div>
              </a>
        </div>
      </header>
    </>
  );
}
