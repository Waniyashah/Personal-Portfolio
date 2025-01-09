import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="border-t border-gray-700 w-full my-6"></div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <a href="/contact" className="flex items-center space-x-2 hover:text-teal-400">
            <AiOutlinePhone size={20} />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/waniya-shah-b766522b4/"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-400 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Waniyashah"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-400 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          
        </div>

        {/* Terms and Privacy */}
        <div className="text-sm">
          <a href="#" className="hover:text-teal-400">
            Terms of Service
          </a>
          <span className="mx-2">-</span>
          <a href="#" className="hover:text-teal-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
