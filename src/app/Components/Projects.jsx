"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Study Platform",
    desc: "An e-learning web app with interactive lessons, course management, and student progress tracking.",
    live: "https://study-platform-f9af6.firebaseapp.com/",
    github: "https://github.com/Mas-rafe/study-platform-client",
    image: "/assets/study-platform.png",
    tech: ["React", "Express", "MongoDB", "JWT"],
  },
  {
    name: "Roommate Finder",
    desc: "Find compatible roommates with verified profiles, location filters, and secure chat system.",
    live: "#",
    github: "#",
    image: "/projects/roommate-finder.png",
    tech: ["MERN", "Socket.io", "JWT"],
  },
  {
    name: "AthleticHub",
    desc: "A sports event management system connecting athletes, teams, and organizers seamlessly.",
    live: "#",
    github: "#",
    image: "/projects/athletichub.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    name: "Job Portal",
    desc: "A role-based job marketplace with advanced search, application tracking, and admin dashboard.",
    live: "#",
    github: "#",
    image: "/projects/job-portal.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Profast (Parcel Delivery)",
    desc: "Parcel delivery platform with smart pricing, real-time tracking, and Stripe payment integration.",
    live: "#",
    github: "#",
    image: "/projects/profast.png",
    tech: ["React", "Express", "Stripe", "Leaflet"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          A selection of projects that reflect my expertise in MERN stack
          development, clean UI design, and real-world problem-solving.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition"
                  >
                    <FaExternalLinkAlt className="text-lg" /> <span>Live</span>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition"
                  >
                    <FaGithub className="text-lg" /> <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-16"
        >
          ⚡ Built with modern technologies & real-world workflows.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
