"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate the timeline fill smoothly on scroll
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educations = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      year: "2022 - Present",
      side: "left",
      logo: "/assets/diu-logo.png",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Azizul Haque College,Bogura",
      year: "2019 - 2021",
      side: "right",
      logo: "/assets/ahc-logo.png",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bogura zilla School,Bogura",
      year: "2011 - 2019",
      side: "left",
      logo: "/assets/zilla-scl-logo.png",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-green-50 py-24 text-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-700">
          Educational Background
        </h2>
        <p className="mb-6 text-lime-900">I pursued my Secondary School Certificate at Bogura Zilla School,Bogura in 2019, 
          followed by my Higher Secondary School Certificate at Govt. Azizul Haque College in 2021. Currently,
           I’m pursuing a Bachelor of Science in Software Engineering at Daffodil International University, with an expected graduation in April 2026.</p>

        <div className="relative flex flex-col md:flex-row md:items-start md:justify-center">
          {/* Timeline line */}
          <div className="absolute md:left-1/2 md:-translate-x-1/2 left-4 md:w-1 w-[3px] bg-green-200 rounded-full h-full overflow-hidden">
            <motion.div
              style={{ height }}
              className="absolute bottom-0 left-0 w-full bg-green-600"
            />
          </div>

          {/* Education cards */}
          <div className="space-y-16 md:space-y-28 relative w-full">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start w-full`}
              >
                {/* Card container */}
                <div
                  className={`w-full md:w-[48%] bg-white shadow-md rounded-xl p-6 md:p-8 transition-transform hover:scale-[1.02] duration-300 ${edu.side === "left"
                    ? "md:text-right md:pr-10 md:ml-auto"
                    : "md:text-left md:pl-10 md:mr-auto"
                    }`}
                >
                  <div className="flex items-center mb-3">
                    {edu.logo && (
                      <div className="w-52   ">
                        <Image
                          src={edu.logo}
                          alt="logo"
                          width={96}
                          height={56}
                          className="object-contain items-center"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-green-700">{edu.degree}</h3>
                  </div>
                  <p className="text-gray-600 mt-2 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                </div>
             

                {/* Graduation icon */ }
              < motion.div
                  className = "absolute md:left-1/2 left-4 md:-translate-x-1/2 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  initial = {{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.3, duration: 0.5 }}
                >
            <FaGraduationCap className="text-xl" />
          </motion.div>
        </motion.div>
            ))}
      </div>
    </div>
      </div >
    </section >
  );
};

export default Education;
