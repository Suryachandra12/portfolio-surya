import React from "react";
import SectionWrapper from "./sectionwrapper";


const skills = ["React.js", "javascript", "typescript ", "tailwind css ", "HTML", "CSS", "Git & Github", "Redux"]

const Skills = () => {
    return (
        <SectionWrapper id="skills">
        
        <section id="skills" className="py-10 px-4 bg-white dark:bg-[#0f172a]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">
                    Skills
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md transition"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </SectionWrapper>
    )
};
export default Skills;