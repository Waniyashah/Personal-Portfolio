"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import IconCloud from "../components/IconCloud";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.8, // Wait for preloader to finish
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-transparent text-white min-h-screen flex items-center justify-center relative px-4 md:px-8 overflow-hidden pt-20 pb-20">
      {/* Icon Cloud Background for Entire Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-full max-w-4xl opacity-70 scale-125 md:scale-150">
          <IconCloud />
        </div>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 relative z-10 w-full max-w-7xl">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center md:text-left space-y-8 flex-1 px-4 mt-10 md:mt-0"
        >
          <div className="absolute -left-10 md:-left-20 top-10 hidden md:block z-0">
            <motion.div variants={itemVariants}>
              <Image
                src="/images/pic3.png"
                alt="arrow graphic"
                width={90}
                height={222}
                className="z-0 opacity-50"
              />
            </motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              Creative <br className="hidden md:block" />
              <span className="text-gradient">
                Digital Experience
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed mx-auto md:mx-0">
              Hi, I’m Waniya Shah. Blending design, security, and AI to craft impactful, modern web solutions that drive results.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Start a Project</span>
              <div className="absolute inset-0 h-full w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </Link>
            <Link
              href="/projects"
              className="text-white/70 hover:text-white uppercase tracking-widest text-sm font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Explore Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 3.2 }}
          className="relative flex-1 flex justify-center items-center px-4 min-h-[350px] sm:min-h-[400px] md:min-h-[600px] w-full"
        >
          <div className="relative z-20 animate-[float_6s_ease-in-out_infinite]">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(45,212,191,0.15)] flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <Image
                src="/images/pic2.png"
                alt="Profile or abstract graphic"
                priority
                fill
                className="object-cover opacity-90 mix-blend-lighten scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
