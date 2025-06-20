import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Surya Portfolio
        </div>
        <div className="space-x-6">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;