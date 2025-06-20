import React from "react";
import SectionWrapper from "./sectionwrapper";

const Profile = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Image + Name/Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={`${process.env.PUBLIC_URL}/profile-surya.jpg`}
            alt="Surya Allam"
            className="w-36 h-36 object-cover rounded-full shadow-lg border-4 border-blue-500 dark:border-blue-300 mb-4"
          />

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Surya Allam</h1>
          <p className="text-lg text-blue-600 dark:text-blue-400">React & Redux Developer</p>
        </div>

        {/* Right: About Me */}
        <div className="text-gray-700 dark:text-gray-300 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-base leading-relaxed">
            I'm a frontend developer passionate about building scalable, high-performance web apps.
            My expertise includes React.js, Redux, TypeScript, and Tailwind CSS.
            I've worked on enterprise-level applications like CTMS and EQMS, focusing on reusable components,
            efficient state management, and improving UX with responsive, accessible design.
            I also have experience with RTK, API integrations, and frontend architecture.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Profile;