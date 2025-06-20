import React from "react";
import SectionWrapper from "./sectionwrapper";

const projects = [
  {
    title: "Chatbox Dashboard",
    company: "Freelance (Remote)",
    duration: "Oct 2024 - Present",
    description:
      "Built a powerful dashboard to manage chatbot configurations, monitor real-time user interactions, and analyze performance with visual insights.",
    techStack: ["React", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    title: "Clinical Trial Management System (CTMS)",
    company: "Smart IMS Pvt Ltd, Hyderabad",
    duration: "Dec 2022 - Sep 2024",
    description:
      `• Developed a full-featured web app to manage clinical trials efficiently.
* Used Redux to manage application state for performance and scalability.
* Leveraged RTK Query to simplify API handling and ensure data consistency.
* Built reusable UI components to speed up development and maintain consistency.
* Merged 3 apps into a single platform, improving user experience.`,
    techStack: ["React", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
  },
  {
    title: "Electronic Quality Management System (EQMS)",
    company: "Smart IMS Pvt Ltd, Hyderabad",
    duration: "Dec 2022 - Sep 2024",
    description:
      `• Built EQMS to store/manage key documents during drug trials.
* Created admin tools to manage users, file inventory, and audit trails.
* Added custom role-based permissions and authentication.`,
    techStack: ["React", "Redux", "Tailwind CSS", "RTK"],
  },
  {
  title: "Personal Portfolio Website",
  company: "Self Project",
  duration: "Jun 2025 - Present",
  description:
    `• Designed and developed a responsive personal portfolio using React and Tailwind CSS.\n• Showcases projects, skills, and professional experience with a clean UI.\n• Implemented dark mode toggle and responsive layout for mobile and desktop views.\n• Focused on accessibility, modern UI design, and performance optimization.`,
  techStack: ["React", "Tailwind CSS", "Vite", "Dark Mode"],
},
];

const Projects = () => {
  return (
    <SectionWrapper id="project">
    <section id="projects" className="py-10 px-4 bg-white dark:bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm italic mb-1">{project.company}</p>
              <p className="text-xs mb-3 text-gray-500 dark:text-gray-300">{project.duration}</p>
              <p className="text-sm mb-3 whitespace-pre-line leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default Projects;