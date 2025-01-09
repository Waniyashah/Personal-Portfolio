"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import Aos from "aos";




export default function RecentWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay:100,
      offset:160
  
    });
    Aos.refresh()
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
        <div className="bg-gray-800/50 bg-blend-color-dodge p-4 rounded-lg shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/project1.png" 
            alt="Work 1"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">Amazon Home Page Clone</h3>
        </div>

        {/* Work 2 */}
        <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/project2.png" 
            alt="Work 2"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">Dynamic Resume Builder</h3>
        </div>

        {/* Work 3 */}
        <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/project3.png" 
            alt="Work 3"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">Simple Quote Generator</h3>
        </div>

        {/* Work 4 */}
        <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/e commerce.png" 
            alt="Work 4"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">E-Commerce Site</h3>
        </div>

        {/* Work 5 */}
        <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/project4.png" 
            alt="Work 5"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center text-teal-400 text-lg font-semibold mt-4">Todo List App</h3>
        </div>
      </div>
    </div>
  
  );
}
