import React, { useEffect } from "react";
import { useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
            Musab Joiya
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
          <a className="contact-btn group" href="#contact">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </header>
    </>
  );
}
