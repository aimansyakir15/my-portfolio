import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`about ${aboutInView ? "fade-in" : ""} p-4 md:p-8`}
    >
      <div className="about-title text-center md:text-center">
        <h1 className="text-2xl md:text-4xl font-bold">About me</h1>
        <hr className="title-line mx-auto md:mx-0 my-4 md:my-6" />
      </div>
      <div className="main-container flex flex-col md:flex-row items-center md:items-start md:gap-10 mt-6 md:mt-12">
        <div className="about-content w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold">Get to know me!</h3>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            A fresh graduate from Management & Science University (MSU) who is
            eager to learn and passionate about software development, especially
            front-end technologies. I am a team player that is reliable in
            completing the tasks assigned. I have just finished my internship at
            MIMOS Berhad, looking for an opportunity to start my career for the
            purpose of gaining meaningful experience and useful knowledge.
          </p>
        </div>
        <div className="about-skills w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold">Technical Skills</h3>
          <ul className="skills-list flex flex-wrap gap-2 mt-4">
            {[
              "HTML & CSS",
              "Java",
              "JavaScript",
              "React.js",
              "Angular",
              "Chart.js",
              "Apache ECharts",
              "D3.js",
              "Bootstrap",
              "Tailwind CSS",
              "Python",
              "Flask",
              "Data Collection",
              "Model Training",
              "Secure Shell (SSH)",
              "C++",
              "Figma",
            ].map((skill) => (
              <li
                key={skill}
                className="skill-item px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm md:text-base"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
