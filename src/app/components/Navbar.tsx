"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  children?: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Waniya Shah</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-gray-300">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <GiHamburgerMenu size={24} />
        </button>
      </nav>

      {/* Sidebar/Menu */}
      <div
        className={`bg-gray-900 text-white fixed top-0 left-0 h-full z-50 w-48 p-4 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          ✕
        </button>
        <ul className="space-y-4 font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-900 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-48" : "translate-x-0"
        }`}
      >
        <main className="p-6">{children}</main>
      </div>
    </>
  );
}
