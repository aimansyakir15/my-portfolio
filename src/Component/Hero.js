import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../assets/profilePic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Application Developer";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV-MUHAMMAD AIMAN SYAKIR.pdf";
    link.download = "CV-MUHAMMAD AIMAN SYAKIR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <div className="profile-container">
          <img src={profile_img} alt="Profile" className="profile-img" />
          <div className="profile-glow"></div>
        </div>

        <div className="hero-text">
          <h1>
            <span className="hero-greeting">Hi, I'm Muhammad Aiman Syakir</span>
            <br />
            <span className="hero-title">{displayText}</span>
            <span className="cursor">|</span>
          </h1>

          <p className="hero-description">
            Application Developer at Protech Digital Sdn Bhd, actively involved
            in the development and maintenance of enterprise web applications. I
            contribute to government projects such as E-Tanah and MyLand System,
            focusing on feature development, system optimization, bug fixes, and
            overall platform reliability.
          </p>

          <div className="hero-action">
            <button onClick={handleDownload} className="btn btn-primary">
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/aimansyakir15", "_blank")
              }
              className="btn btn-secondary"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/muhammad-aiman-syakir-mohd-zulkifli-9a617622a/",
                  "_blank"
                )
              }
              className="btn btn-secondary"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
