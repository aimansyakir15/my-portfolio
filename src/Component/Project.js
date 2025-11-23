import React from "react";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "E-Tanah System",
      description:
        "Enterprise web application for land administration and management. Involved in full-stack development, maintenance, and implementation of new features for this critical government platform.",
      url: "#",
      linkText: "Confidential",
    },
    {
      name: "MyLand System",
      description:
        "Government land management system focused on data accuracy and user satisfaction. Worked on bug fixes, data patching, and code quality improvements using SonarQube standards.",
      url: "https://myland.gov.my/myland-sso/login?service=https%3A%2F%2Fmyland.gov.my%2Fmyland-landing%2Flogin%2Fcas",
      linkText: "Live System",
    },
    {
      name: "E-Portfolio Content Management System (Final Year Project)",
      description:
        "This web application enables users/lecturers to digitally record and store their teaching portfolios. It serves as a repository where users/lecturers can manage their teaching and learning content in an e-portfolio system.",
      url: "https://github.com/aimansyakir15/E-Portfolio-Content-Management-System.git",
      linkText: "GitHub",
    },
    {
      name: "REST Countries API with color theme switcher",
      description:
        "This project showcases a responsive web application that utilizes the REST Countries API to fetch and display comprehensive information about countries around the world. Users can explore details such as country names, flags, population, and more, all presented in a visually appealing format.",
      url: "https://github.com/aimansyakir15/REST-Countries-API",
      linkText: "GitHub",
    },
    {
      name: "Discount Calculator",
      description:
        "This program is designed to calculate the discount and final price for purchases at Coffee Outlet. The outlet offers various discount tiers based on the total purchase amount.",
      url: "https://github.com/aimansyakir15/discount-calculator",
      linkText: "GitHub",
    },
  ];

  return (
    <div
      id="project"
      ref={projectRef}
      className={`flex flex-col items-center my-20 mx-10 md:mx-40 transition-opacity duration-1000 ease-out ${
        projectInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold">Project</h1>
      <hr className="title-line mx-auto md:mx-0 my-4 md:my-6" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white text-lg flex items-center">
          Some of the projects I have developed are listed below. There will be
          more in the future!
        </p>
        <div className="mt-4 overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-700 bg-[#161513]">
            <thead className="bg-[#161513]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-sm font-medium text-white font-bold capitalize tracking-wider border border-white"
                >
                  Project
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-sm font-medium text-white font-bold capitalize tracking-wider border border-white"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-sm font-medium text-white font-bold capitalize tracking-wider border border-white"
                >
                  URL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {projects.map((project, index) => (
                <tr key={index} className="bg-[#161513]">
                  <td className="px-6 py-4 text-center text-sm font-medium text-white border border-white">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-white border border-white">
                    {project.description}
                  </td>
                  <td className="px-6 py-4 text-sm border border-white text-center">
                    {project.url !== "#" ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {project.linkText}
                      </a>
                    ) : (
                      <span className="text-gray-400">{project.linkText}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
