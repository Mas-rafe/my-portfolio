"use client";
import React from "react";
import { motion } from "framer-motion";
import { TiPhone } from "react-icons/ti";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsItalic = Poppins({
  weight: [ "700"], // regular and bold weights
  style: ["italic"],       // include italic style
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-yellow-50 via-lime-50 to-green-100 bg-[length:400%_400%] animate-[gradientMove_15s_ease_infinite] ">

      <nav className="w-full max-w-7xl mx-auto  px-4   md:px-12 lg:px-4 flex items-center justify-between h-16  bg-gradient-to-b from-green-50 via-lime-100 to-green-200  border-b border-2 shadow-2xl border-green-200 ">
        {/* Left: Brand */}
        <div className="flex items-center">
          <Image 
          src="/assets/letter-m.png" className=" "
          width={40}
          height={30}
          />
          
           <a href="/" className="text-xl font-bold text-slate-500  tracking-tighter">
            <span className="text-4xl font-bold text-lime-800 "> </span>asrafe...
          </a>
         
        </div>

        {/* Right: CTA */}
        <motion.div>
          <button className=" rounded-l-2xl px-2 py-2 bg-gradient-to-r from-green-700 to-green-400 text-white  shadow-md hover:scale-105 transition-transform duration-300">
       <span className="flex items-center"> Contact me <TiPhone /></span>     
          </button>
        </motion.div>
      </nav>

    </header>
  );
}
