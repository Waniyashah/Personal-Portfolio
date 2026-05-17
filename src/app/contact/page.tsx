"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div className="bg-transparent text-white px-6 py-20 flex flex-col space-y-12 md:space-y-0 md:flex-row items-center justify-between min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 " data-aos="fade-right">
          Got a project in <span className="text-gradient">Mind?</span>
        </h2>
        <div className="relative w-48 sm:w-60 md:w-64 lg:w-72 animate-[float_6s_ease-in-out_infinite]" data-aos="fade-right" data-aos-delay="200">
          <Image
            src="/images/pic9.png"
            alt="Project Illustration"
            width={255}
            height={348}
            className="w-full h-auto mix-blend-screen"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 glass-card p-8 rounded-2xl w-full" data-aos="fade-left">
        <form
          action="https://formspree.io/f/xvgqdgqe"
          method="POST"
          className="space-y-6"
        >
          {/* Optional subject for your email inbox */}
          <input type="hidden" name="_subject" value="New portfolio contact" />

          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                autoComplete="name"
                className="w-full p-4 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                autoComplete="email"
                className="w-full p-4 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-4 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-primary text-white p-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300 flex items-center justify-center translate-y-0 hover:-translate-y-1"
          >
            Send Message
            <span className="ml-2">✈️</span>
          </button>

          {/* Optional: simple success note for Formspree's default thank-you page */}
          <p className="text-xs text-gray-400 text-center">
            After submitting, you’ll see a confirmation page.
          </p>
        </form>
      </div>
    </div>
  );
}
