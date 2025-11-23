// Enhanced Navbar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "project"];
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <li className="md:mx-4 my-2 md:my-0">
      <a
        href={href}
        className={`hover:text-[#FFD700] transition-colors duration-300 ${
          activeSection === href.replace("#", "")
            ? "text-[#FFD700] font-bold"
            : ""
        }`}
      >
        {children}
      </a>
    </li>
  );

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#FFD700] bg-clip-text text-transparent">
          Aiman Syakir
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        <ul
          className={`md:flex md:items-center ${
            isOpen
              ? "block absolute top-16 left-0 w-full bg-gray-900 p-4"
              : "hidden"
          } w-full md:w-auto transition-all duration-300`}
        >
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#project">Projects</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
