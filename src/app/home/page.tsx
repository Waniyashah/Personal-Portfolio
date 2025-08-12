"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 flex-1 px-4">
          <div className="absolute -left-10 md:-left-20 top-10 hidden md:block z-0">
            <Image
              src="/images/pic3.png"
              alt="arrow picture"
              width={90}
              height={222}
              className="z-0"
            />
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            data-aos="fade-right"
          >
            Hello, I’m Waniya Shah {" "}
            <span className="text-teal-400">
              Tech Learner, Developer &amp; AI Explorer
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Blending design, security, and AI to craft impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="bg-teal-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-teal-500 w-full sm:w-auto text-center"
            >
              Hire Me
            </Link>
       
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex-1 flex justify-center px-4">
          <div className="absolute top-10 left-0 md:left-40 z-0 animate-pulse">
            <Image
              src="/images/pic1.png"
              alt="Creative UI Designer"
              priority
              className="max-w-xs sm:max-w-sm md:max-w-md"
              width={300}
              height={354}
            />
          </div>
          <div className="relative z-0">
            <Image
              src="/images/pic2.png"
              alt="backimg"
              priority
              className="max-w-xs sm:max-w-sm md:max-w-lg"
              width={360}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
