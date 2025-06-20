import React from "react";
import SectionWrapper from "./sectionwrapper";

const skills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Redux",
  "RTK",
  "REST APIs",
  "Git & GitHub",
  "React Native",
  "Express.js",
  "MongoDB",
  "Node.js"
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white px-4 py-1 rounded-full shadow-sm transition hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
