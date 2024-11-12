import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({ experience }) => {
  console.log("Rendering ExperienceItem component", experience);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <li ref={ref} className="mb-10 ml-4">
      <div
    id="experience"
        className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-white dark:bg-blue-700 transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`transition-transform duration-700 ease-out ${
          inView ? "transform bounce-in" : "opacity-0"
        }`}
      >
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-blue-700">
          {experience.date}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {experience.title}
        </h3>
        <ul className="list-disc pl-5 mt-2 text-base font-normal">
          {experience.description.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceItem;
