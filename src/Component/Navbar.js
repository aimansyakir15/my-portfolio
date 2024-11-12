import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify items-center">
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#hero" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#experience" className="hover:text-gray-400">
              Experience
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#project" className="hover:text-gray-400">
              Project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
