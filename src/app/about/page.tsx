"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white px-6 sm:px-10 py-10 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="relative">
          <Image
            src="/images/pic6.png"
            alt="Music Icon"
            priority
            className="absolute -top-10 left-4 sm:-top-16 sm:left-10 w-12 h-auto"
            width={61}
            height={47}
          />
          <Image
            src="/images/pic7.png"
            alt="Light Bulb Icon"
            priority
            className="absolute -top-10 right-8 sm:-top-16 sm:right-16 w-12 h-auto"
            width={57}
            height={88}
          />
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-aos="fade-right"
          >
            About <span className="text-teal-400">me</span>
          </h1>
          <p
            className="text-gray-300 mb-6 leading-relaxed font-light text-sm sm:text-base lg:text-lg"
            data-aos="fade-right"
          >
            My name is Waniya Shah, and I transitioned from being a medical
            student to pursuing my passion for computer science. I am currently
            pursuing a BS in Cyber Security at SMIU and working as a Sales
            Representative at 408 Solutions. Alongside my degree, I am enrolled
            in a specialized course at GIAIC focused on Agentic AI and Robotic
            Engineering. With strong determination to learn, I actively work on
            projects, explore innovative ideas, and embrace challenges to grow
            both technically and professionally. My goal is to build a
            successful career in the ever-evolving field of technology.
          </p>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center">
          <div className="relative w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md">
            {/* Front Illustration */}
            <div className="absolute top-0 left-0 z-10 animate-pulse">
              <Image
                src="/images/pic4.png"
                alt="Creative UI Designer"
                priority
                className="w-full h-auto"
                width={400}
                height={472.65}
              />
            </div>
            {/* Background Illustration */}
            <div className="relative z-0">
              <Image
                src="/images/pic5.png"
                alt="Background Illustration"
                priority
                className="w-full h-auto"
                width={665}
                height={499}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
