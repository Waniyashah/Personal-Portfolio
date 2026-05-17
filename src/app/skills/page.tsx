"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion } from "framer-motion";

// Icons
import { FaHtml5, FaCss3Alt, FaPython, FaCode, FaJava, FaBug, FaCloud } from "react-icons/fa";
import { SiTypescript, SiOpenai, SiNextdotjs, SiTailwindcss, SiC } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={32} /> },
  { name: "CSS", icon: <FaCss3Alt size={32} /> },
  { name: "JS / TS", icon: <SiTypescript size={32} /> },
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Agentic AI", icon: <SiOpenai size={32} /> },
  { name: "SpeckitPlus", icon: <FaCode size={32} /> },
  { name: "Bug Testing", icon: <FaBug size={32} /> },
  { name: "Java", icon: <FaJava size={32} /> },
  { name: "C", icon: <SiC size={32} /> },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-transparent text-white px-6 md:px-12 py-20 min-h-screen overflow-hidden flex items-center relative">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Heading & Text */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left z-20 mb-16 md:mb-0 md:pr-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              My <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Skills
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
              className="text-gray-400 mt-6 max-w-md text-base sm:text-lg mx-auto md:mx-0 font-light"
            >
              A constantly evolving toolkit of modern web technologies, frameworks, and programming languages that I use to build scalable, high-performance applications.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side: Cloud Orbit */}
        <motion.div 
          className="flex-1 w-full relative h-[450px] sm:h-[500px] md:h-[600px] flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          
          {/* Gradient Definition for Icons */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#06b6d4" offset="0%" />   {/* Cyan */}
                <stop stopColor="#3b82f6" offset="50%" />  {/* Blue */}
                <stop stopColor="#a855f7" offset="100%" /> {/* Purple */}
              </linearGradient>
            </defs>
          </svg>

          {/* Central Cloud Background Glow Effect */}
          <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-blue-500/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>

          {/* Central Cloud Logo */}
          <motion.div 
            className="absolute z-10 flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full glass-card border-[3px] border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-black/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <FaCloud className="text-white drop-shadow-md text-4xl sm:text-5xl md:text-6xl" />
            </div>
          </motion.div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            // Calculate circular positions
            const angle = (index / skills.length) * (2 * Math.PI);
            
            // Adjust radius for right side fit
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const radiusX = isMobile ? 120 : 210; 
            const radiusY = isMobile ? 160 : 230;
            
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            return (
              <SkillBadge key={index} skill={skill} initialX={x} initialY={y} index={index} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SkillBadge({ skill, initialX, initialY, index }: { skill: any, initialX: number, initialY: number, index: number }) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setPosition({ x: initialX, y: initialY });
  }, [initialX, initialY]);

  const handleHover = () => {
    setIsHovered(true);
    // Scatter the icon randomly away from its origin
    const randomAngle = Math.random() * 2 * Math.PI;
    const distance = 70 + Math.random() * 60; // Scatter distance
    
    setPosition({
      x: initialX + Math.cos(randomAngle) * distance,
      y: initialY + Math.sin(randomAngle) * distance,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Wait a tiny bit before returning to original spot
    setTimeout(() => {
      setPosition({ x: initialX, y: initialY });
    }, 400);
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center z-20 cursor-pointer"
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        x: position.x, 
        y: position.y, 
        opacity: 1,
        scale: 1
      }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 10, 
        mass: 0.8,
        scale: { duration: 0.8, delay: index * 0.1 },
        opacity: { duration: 0.8, delay: index * 0.1 },
        x: { type: "spring", stiffness: 120, damping: 10 },
        y: { type: "spring", stiffness: 120, damping: 10 }
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleHover}
    >
      <motion.div 
        className="relative flex items-center justify-center"
        animate={{ 
          y: isHovered ? 0 : [0, -12, 0] // continuous float when not hovered
        }}
        transition={{ 
          duration: 3 + (index % 3), // random stagger
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 ${isHovered ? "bg-blue-500/20 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-110" : "glass-card hover:bg-white/10"}`}>
          {React.cloneElement(skill.icon, { style: { fill: "url(#iconGradient)" } })}
        </div>
        
        {/* Label */}
        <span className={`absolute -bottom-8 md:-bottom-10 text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full text-white whitespace-nowrap transition-all duration-300 ${isHovered ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.6)] translate-y-2" : "bg-black/60 opacity-80 pointer-events-none"}`}>
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
