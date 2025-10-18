"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaUsers,
  FaLightbulb,
  FaComments,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const technicalSkills = [
    { icon: <FaReact className="text-sky-500 text-4xl" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-gray-800 text-4xl" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-600 text-4xl" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-700 text-4xl" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, name: "Tailwind CSS" },
    { icon: <SiFirebase className="text-amber-500 text-4xl" />, name: "Firebase" },
    { icon: <FaGithub className="text-gray-700 text-4xl" />, name: "Git & GitHub" },
    { icon: <SiJavascript className="text-yellow-500 text-4xl" />, name: "JavaScript (ES6+)" },
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600 text-4xl" />, name: "CSS3" },
  ];

  const softSkills = [
    { icon: <FaUsers className="text-green-600 text-3xl" />, name: "Teamwork" },
    { icon: <FaComments className="text-blue-600 text-3xl" />, name: "Communication" },
    { icon: <FaLightbulb className="text-yellow-500 text-3xl" />, name: "Problem Solving" },
    { icon: <FaUsers className="text-pink-500 text-3xl" />, name: "Leadership" },
    { icon: <FaLightbulb className="text-teal-500 text-3xl" />, name: "Creativity" },
  ];

  return (
    <section className="py-24 bg-green-50 text-gray-800 mt-[-26]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-10">
          My Skills
        </h2>

        {/* Tap Me Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowSkills(!showSkills)}
          className="relative bg-gradient-to-r from-yellow-50 via-green-50 to-green-100 border-4 border-green-400 text-green-800 font-semibold py-5 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto mb-12"
        >
          {showSkills ? "Hide Skills" : "Tap Me"}
          <span className="absolute inset-0 rounded-full animate-ping bg-green-300 opacity-30"></span>
        </motion.button>

        {/* Skills Section */}
        <AnimatePresence>
          {showSkills && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-16"
            >
              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-8">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-300"
                    >
                      {skill.icon}
                      <p className="mt-3 text-gray-700 font-medium text-sm md:text-base">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-8">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-300"
                    >
                      {skill.icon}
                      <p className="mt-3 text-gray-700 font-medium text-sm md:text-base">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
