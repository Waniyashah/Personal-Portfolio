"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const projectsData = [
  {
    title: "Health & Wellness Agent",
    image: "/images/project15.png",
    link: "https://health-wellness-agent-eight.vercel.app/",
    description: "An AI-driven assistant designed to provide personalized health plans and dietary suggestions.",
    tags: ["AI", "Next.js", "HealthTech"]
  },
  {
    title: "InvesTax Trading Web",
    image: "/images/project16.png",
    link: "https://investax-topaz.vercel.app/",
    description: "A comprehensive trading and taxation platform tailored for modern investors.",
    tags: ["Finance", "Trading", "Web App"]
  },
  {
    title: "E-commerce Website",
    image: "/images/e commerce.png",
    link: "https://hackathon-chair-site.vercel.app/",
    description: "A modern, fully functional e-commerce storefront with seamless product browsing and checkout.",
    tags: ["E-commerce", "React", "Storefront"]
  },
  {
    title: "Inventory Management System",
    image: "/images/project9.png",
    link: "https://github.com/Waniyashah/inventory_management_system/tree/main",
    description: "A robust system to track, manage, and optimize business inventory operations.",
    tags: ["Python", "Management", "System"]
  },
  {
    title: "Company Portfolio Website",
    image: "/images/project13.png",
    link: "https://web-agentix.vercel.app",
    description: "A sleek, professional portfolio to showcase company services and past works.",
    tags: ["Portfolio", "Corporate", "UI/UX"]
  },
  {
    title: "Physical AI and Robotics Book",
    image: "/images/project14.png",
    link: "https://physical-ai-book-rho.vercel.app/",
    description: "An interactive digital book exploring the intersection of physical AI and robotics.",
    tags: ["Education", "Digital Book", "Robotics"]
  },
  {
    title: "File Converter & Cleaner",
    image: "/images/project1.png",
    link: "https://waniyashah-file-converter-file-converter-z70kkl.streamlit.app/",
    description: "A handy tool for converting file formats and cleaning up messy datasets instantly.",
    tags: ["Utility", "Python", "Data"]
  },
  {
    title: "Weather Agent",
    image: "/images/project7.png",
    link: "https://waniyashahweatheragent.streamlit.app/",
    description: "Real-time weather tracking and forecasting using advanced APIs.",
    tags: ["API", "Weather", "Streamlit"]
  },
  {
    title: "Age Calculator",
    image: "/images/project8.png",
    link: "https://code-alpha-age-calculator-self.vercel.app/",
    description: "A simple yet precise tool to calculate exact age based on date of birth.",
    tags: ["Utility", "Web", "Calculator"]
  },
  {
    title: "Dynamic Resume Builder",
    image: "/images/project2.png",
    link: "https://hackathon-milestone-5-blond.vercel.app/",
    description: "Instantly generate professional resumes with customizable templates.",
    tags: ["Tool", "Career", "Generator"]
  },
  {
    title: "Password Strength Generator",
    image: "/images/project11.png",
    link: "https://password-strength-generator-bywaniyashah.streamlit.app/",
    description: "Secure your accounts with cryptographically strong password suggestions.",
    tags: ["Security", "Tool", "Python"]
  },
  {
    title: "Personal Library Manager",
    image: "/images/project10.png",
    link: "https://personalibrarymanager.streamlit.app/",
    description: "Organize and track your personal book collection effectively.",
    tags: ["Management", "App", "Library"]
  },
  {
    title: "Unit Converter",
    image: "/images/project12.png",
    link: "https://waniyashah-unit-converter-unit-converter-dt5mnw.streamlit.app/",
    description: "Convert seamlessly between various measurement units.",
    tags: ["Utility", "Converter", "Tool"]
  },
  {
    title: "Simple Quote Generator",
    image: "/images/project3.png",
    link: "https://simple-quote-generator-olive.vercel.app/",
    description: "Get inspired with randomized motivational and thoughtful quotes.",
    tags: ["Inspiration", "Web", "Generator"]
  },
  {
    title: "Todo List App",
    image: "/images/project4.png",
    link: "https://todo-app-two-drab.vercel.app/",
    description: "Keep track of your daily tasks and boost your productivity.",
    tags: ["Productivity", "App", "React"]
  }
];

// Reusable card component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project, index, total }: { project: any, index: number, total: number }) => {
  return (
    <div 
      className="sticky w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-[2rem] shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 overflow-hidden group"
      style={{ 
        top: `15vh`, 
        backgroundColor: '#0a0f18',
        zIndex: index + 10,
        marginBottom: index === total - 1 ? '15vh' : '50vh'
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

      {/* Content Side */}
      <div className="flex-1 space-y-6 z-10 w-full">
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-cyan-400">
            Project {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-lg max-w-md">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-colors duration-300"
          >
            View Live
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-[#050810]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-2 md:p-4 transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div className="bg-transparent text-white px-6 py-32 min-h-screen relative z-10 w-full overflow-visible">
      {/* Section Title */}
      <div className="text-center mb-24 sticky top-10 z-0">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight" data-aos="fade-down">
          My recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">works</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
          Scroll down to explore my projects one by one.
        </p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 pb-32">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            total={projectsData.length} 
          />
        ))}
      </div>
    </div>
  );
}
