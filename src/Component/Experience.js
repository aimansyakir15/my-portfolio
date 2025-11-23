import React from "react";
import ExperienceItem from "./ExperienceItem";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  console.log("Rendering Experience component");

  const { ref: experienceTitleref, inView: experienceTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Application Developer at Protech Digital Sdn. Bhd.",
      date: "January 2025 - Present",
      description: [
        "Involved in the development, maintenance and improvement of E-Tanah and MyLand systems",
        "Worked on fixing system issues and implementing new features based on user requirements",
        "Performed data patching in production environments using SQL queries to maintain data accuracy",
        "Improved codebase quality by addressing SonarQube issues, ensuring compliance with clean code and security standards",
        "Participated in testing and debugging to ensure system reliability and user satisfaction",
      ],
    },
    {
      title: "TM Protégé at Telekom Malaysia Berhad",
      date: "October 2024 - January 2025",
      description: [
        "Assisted in conducting on-site cabling surveys to assess the infrastructure for network installation and maintenance.",
        "Collaborated with subcontractor to inspect, measure, and document cable routes, including power and data cables, ensuring compliance with safety standards and operational requirements.",
        "Identified potential obstacles and suggested optimal cabling solutions to minimize installation costs and improve network performance.",
        "Gained practical knowledge of structured cabling systems and site survey methodologies.",
      ],
    },
    {
      title: "Internship at MIMOS Berhad",
      date: "August 2023 - January 2024",
      description: [
        "Created and designed a variety of charts and plotted the charts into the widget library available inside ThingsBoard. Additionally, I applied the charts into the ThingsBoard dashboard using Echarts and D3.js.",
        "Performed comprehensive data collection and subsequent feature extraction. Assigned to collect electrical signals utilizing Sbench6 acquisition software, the focus was on capturing high sampling rates of instantaneous current and voltage magnitudes in preparation for lab experiments.",
        "Testing on HDF5 Converter for NILMTK: Conducted experiments to test the generated data in HDF5 format with NILMTK’s Experiment API.",
        "Involved in collecting seq2point experiment results. Responsibilities included handling one of the server ports used for model training experiments, as well as ensuring efficient data processing processes to enable AI algorithm development and optimization.",
        "Developed a simple interactive visualization for Non-Intrusive Load Monitoring (NILM) using Python's Flask framework, HTML, and Plotly to create interactive charts.",
        "Conducted research and evaluation of transcription software with AI meeting assistant functionalities which need to analysed features, language support, and affordability.",
        "Conducted preliminary surveys on Text to Speech (TTS), Automatic Speech Recognition (ASR), and AI Meeting Assistant technologies.",
      ],
    },
    {
      title: "Youth Football Player at Kedah FA",
      date: "January 2020 - December 2020",
      description: [
        "Representing Kedah FA U-19 for the Youth Cup tournament organized by Football Association of Malaysia (FAM) and Malaysian Football League (MFL).",
      ],
    },
    {
      title: "Development Football Player KPM/FAM",
      date: "January 2014 - December 2018",
      description: [
        "Undertook a football camp in Wales with the Cardiff City FC team in 2014.",
        "Represented Malaysia in international tournaments in Thailand (2015), China (2016), Japan (2016), Malaysia (2016) and India (2018).",
        "Represented the Pahang Malaysia Sports School team (2014-2016) to participate in various national and international football competitions.",
        "Represented the Kedah Sports School team (2017-2018) to participate in national football competitions.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center my-20 mx-10 md:mx-40">
      <div
        ref={experienceTitleref}
        className={`transition-opacity duration-1000 ease-out ${
          experienceTitleInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-bold">Experience</h1>
        <hr className="title-line mx-auto md:mx-0 my-4 md:my-6" />
      </div>
      <ol className="relative border-l border-[#FFD700] dark:border-[FFD700]">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
