import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import SectionWrapper from "./sectionwrapper";

const Contact = () => {
  return (
     <SectionWrapper id="contact">
    <section id="contact" className="py-10 px-4 bg-white dark:bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">
          Contact Me
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-800 dark:text-white">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:suryadeveloper@example.com" className="hover:underline">
              naniprasadsurya@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-800 dark:text-white">
            <FaPhone className="text-green-600" />
            <span>+91 7995253407</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800 dark:text-white">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://www.linkedin.com/in/surya-allam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/surya-allam
            </a>
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default Contact;