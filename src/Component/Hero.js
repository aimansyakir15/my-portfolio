import React from "react";
import "./Hero.css";
import profile_img from "../assets/profilePic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV-MUHAMMAD AIMAN SYAKIR.pdf";
    link.download = "CV-MUHAMMAD AIMAN SYAKIR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGitHub = () => {
    window.open("https://github.com/aimansyakir15", "_blank");
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/muhammad-aiman-syakir-mohd-zulkifli-9a617622a/",
      "_blank"
    );
  };

  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="Profile" className="profile-img" />
      <h1>
        <span>I'm Muhammad Aiman Syakir Bin Mohd Zulkifli,</span>
      </h1>
      <p>
        I am a recent graduate looking for an entry/junior-level Front-end
        Developer position. I have just completed a 6-month internship at MIMOS
        Berhad under the Artificial Intelligence Department.
      </p>
      <div className="hero-action">
        <button onClick={handleDownload} className="hero-resume">
          My Resume
          <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "10px" }} />
        </button>
        <button onClick={handleGitHub} className="hero-git">
          GitHub
          <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }} />
        </button>
        <button onClick={handleLinkedIn} className="hero-contact">
          Let's Connect!
          <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
