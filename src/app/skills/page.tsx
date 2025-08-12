"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiTypescript, SiOpenai, SiNextdotjs } from "react-icons/si";
import { GrShieldSecurity } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white px-6 py-16 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10">
        My <span className="text-teal-400">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Skill 1 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SiNextdotjs size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Next.js</h3>
        </div>

        {/* Skill 2 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FaNodeJs size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Node.js</h3>
        </div>

        {/* Skill 3 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <GrShieldSecurity size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Website Security Researcher</h3>
        </div>

        {/* Skill 4 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FaHtml5 size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">HTML</h3>
        </div>

        {/* Skill 5 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FaCss3Alt size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">CSS</h3>
        </div>

        {/* Skill 6 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SiTypescript size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">TypeScript</h3>
        </div>

        {/* Skill 7 */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <RiTailwindCssFill size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Tailwind CSS</h3>
        </div>

        {/* Skill 8 - Python */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FaPython size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Python</h3>
        </div>

        {/* Skill 9 - Agentic AI */}
        <div
          className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SiOpenai size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Agentic AI</h3>
        </div>
      </div>
    </div>
  );
}
