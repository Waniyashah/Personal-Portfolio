"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

export default function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      offset: 160,
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white px-6 py-16 flex flex-col space-y-12 md:space-y-0 md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ">
          Got a project in <span className="text-teal-400">Mind?</span>
        </h2>
        <div className="relative w-48 sm:w-60 md:w-64 lg:w-72 animate-pulse">
          <Image
            src="/images/pic9.png"
            alt="Project Illustration"
            width={255}
            height={348}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg w-full">
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
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
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
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
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
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-400 text-gray-900 p-3 rounded-lg font-semibold hover:bg-teal-500 transition-colors flex items-center justify-center"
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
