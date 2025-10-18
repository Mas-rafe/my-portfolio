import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-50 via-lime-100 to-green-200 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Name */}
        <div className="text-2xl font-bold text-green-700">Masrafe</div>

        {/* Middle: Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-green-700 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-700 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-700 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Social Links */}
        <div className="flex gap-5 text-green-700 text-xl">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <FaFacebook />
          </a>
          <a href="mailto:masrafe@example.com" className="hover:scale-110 transition-transform">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-green-200 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-green-700">Masrafe</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
