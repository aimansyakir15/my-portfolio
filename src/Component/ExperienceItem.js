import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({ experience }) => {
  console.log("Rendering ExperienceItem component", experience);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="experience"
      ref={ref}
      className={`flex items-start mb-12 transform transition-transform duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex-shrink-0 w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>
      <div className="ml-8">
        <h2 className="text-1xl md:text-2xl font-bold">{experience.title}</h2>
        <p className="text-sm md:text-base text-blue-700">{experience.date}</p>
        <ul className="list-disc pl-5 mt-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-sm md:text-base mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
