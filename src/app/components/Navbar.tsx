"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 2.5 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "glass-card py-4" : "bg-transparent py-6"
        } px-6 md:px-12 flex justify-between items-center`}
      >
        <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-wider text-white hover:text-teal-400 transition-colors">
          WANIYA<span className="text-teal-400">.</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="group relative text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 border border-teal-400/50 rounded-full text-teal-400 hover:bg-teal-400 hover:text-black transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white/80 hover:text-white transition-colors">
          <GiHamburgerMenu size={28} />
        </button>
      </motion.nav>

      {/* Sidebar/Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            className="fixed top-0 right-0 h-full w-full sm:w-80 glass-card z-50 p-10 flex flex-col justify-center shadow-2xl backdrop-blur-2xl bg-black/60"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition-colors focus:outline-none"
            >
              ✕
            </button>
            <ul className="space-y-8 mt-10">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.path}
                    className="text-3xl font-bold text-white/70 hover:text-teal-400 transition-colors uppercase tracking-widest block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
