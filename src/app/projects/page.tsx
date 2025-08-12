"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div
      className="bg-gray-900 text-white px-6 py-16 flex flex-col items-center"
      style={{
        backgroundImage: "url('/images/projectbg.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10" data-aos="zoom-in">
        My recent <span className="text-teal-400">works</span>
      </h2>

      {/* Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Work 1 */}
        <div
          className="bg-gray-800/50 bg-blend-color-dodge p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project1.png"
            alt="Work 1"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://waniyashah-file-converter-file-converter-z70kkl.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              File Converter and Cleaner
            </a>
          </h3>
        </div>

        {/* Work 2 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project2.png"
            alt="Work 2"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://hackathon-milestone-5-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Dynamic Resume Builder
            </a>
          </h3>
        </div>

        {/* Work 3 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project3.png"
            alt="Work 3"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://simple-quote-generator-olive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Simple Quote Generator
            </a>
          </h3>
        </div>

        {/* Work 4 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/e commerce.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://hackathon-chair-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              E-commerce Website
            </a>
          </h3>
        </div>

        {/* Work 5 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project4.png"
            alt="Work 5"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://todo-app-two-drab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Todo List App
            </a>
          </h3>
        </div>
        {/* Work 7 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project7.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://waniyashahweatheragent.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Weather Agent
            </a>
          </h3>
        </div>
          {/* Work 8 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project8.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">
            <a
              href="https://code-alpha-age-calculator-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
               Age Calculator
            </a>
          </h3>
        </div>

          {/* Work 9 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project9.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-8">
            <a
              href="https://github.com/Waniyashah/inventory_management_system/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Inventory Management System
             </a>
          </h3>
        </div>

           {/* Work 11 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project10.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-16">
            <a
              href="https://password-strength-generator-bywaniyashah.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Password Strength Generator
             </a>
          </h3>
        </div>


         {/* Work 11 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project10.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-8">
            <a
              href="https://personalibrarymanager.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Personal Library Manager
             </a>
          </h3>
        </div>

          {/* Work 12 */}
        <div
          className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src="/images/project12.png"
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-20">
            <a
              href="https://waniyashah-unit-converter-unit-converter-dt5mnw.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Unit Converter
             </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
