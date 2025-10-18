"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

;


export default function Hero() {
  return (
  <section className="relative min-h-screen md:h-screen flex items-center justify-center  overflow-hidden  text-gray-800">
      {/* Animated Gradient Background */}
      
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-lime-50 to-green-100 bg-[length:400%_400%] animate-[gradientMove_15s_ease_infinite]" />

      {/* Blurred Glowing Orbs */}
      <div className="absolute top-20 left-24 w-84 h-84 bg-green-200/40 rounded-full blur-2xl" />
      <div className="absolute bottom-24 right-32 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-0 w-full py-16 md:py-0">
        {/* Left Side: Text */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Masrafe Khan
            </h1>
            

            <TypeAnimation
              sequence={[
                "Frontend Developer", 2000,
                "Full Stack Developer", 2000,
                "Tech Enthusiast", 2000,
              ]}
              wrapper="span"
              speed={50}
              className="block text-2xl md:text-3xl text-green-800 font-semibold mt-2"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 max-w-md leading-relaxed">
            An enthusiastic entrepreneur and young professional with a thirst for
            knowledge and a passion for growth. Constantly exploring new
            opportunities to learn and innovate.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-5 text-2xl mt-3">
            <a href="#" className="hover:text-indigo-600 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaGithub /></a>
          </div>

          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
            Explore More
          </button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] flex items-center justify-center"
          >
            <Image
              src="/assets/Masrafe-2.jpg"
              alt="Masrafe Khan"
              fill
              className="rounded-full object-cover shadow-2xl border-6  border-green-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-100/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
