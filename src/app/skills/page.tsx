import React from "react";
import { FaNodeJs, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrShieldSecurity } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";




export default function Skills() {
  return (
    
    <div className="bg-gray-900 text-white px-6 py-16 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10">
        My <span className="text-teal-400">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Skill 1 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <SiNextdotjs size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Next.js</h3>
        </div>

        {/* Skill 2 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <FaNodeJs size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Node.js</h3>
        </div>

        {/* Skill 3 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <GrShieldSecurity size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Website Security Researcher</h3>
        </div>

        {/* Skill 4 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <FaHtml5 size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">HTML</h3>
        </div>

        {/* Skill 5 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <FaCss3Alt size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">CSS</h3>
        </div>

        {/* Skill 6 */}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <SiTypescript size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Typescript</h3>
        </div>
        {/* Skill 7*/}
        <div className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <RiTailwindCssFill size={40} className="text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold">Tailwind css</h3>
        </div>
      </div>
    </div>
   
  );
}
