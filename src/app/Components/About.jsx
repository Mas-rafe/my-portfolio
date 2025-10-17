"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
    return (
        <section className="py-20 bg-green-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">

                {/* Left Side: Square Photo */}
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full md:w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] bg-green-100 relative overflow-hidden shadow-xl">
                        <Image
                            src="/assets/Masrafe.jpg"
                            alt="Masrafe Khan"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side: About Text */}
                <motion.div
                    className="md:w-1/2 flex flex-col justify-between"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-green-700">
                            Let me introduce <span className="text-lime-900 font-extrabold">Myself!</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            I am <span className="text-xl font-bold text-green-700">Masrafe Khan</span>,
                            a passionate Software Engineering student at Daffodil International University, deeply focused on crafting impactful digital experiences through modern web technologies. As a  Full-Stack Developer, I specialize in building dynamic, user-centered applications that combine clean architecture, efficient backend logic, and seamless frontend design.

                            My journey has been driven by curiosity and dedication — from developing full-stack projects like job portals and parcel delivery systems, to continuously learning emerging tools that enhance scalability and performance. I take pride in writing code that not only works but tells a story of precision, innovation, and purpose.

                            With a mindset rooted in continuous growth, collaboration, and problem-solving, I aim to contribute to projects that push the boundaries of technology while making a real-world impact.
                        </p>
                    </div>

                    {/* Stats Inline with Borders */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-6 text-center text-green-600  font-bold text-2xl">
                        <motion.div
                            className="flex-1 border-t-2 border-b-2 py-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <CountUp end={6} duration={2} delay={0} className="font-extrabold text-3xl text-lime-900" />
                            <p className="mt-2 text-lg font-semibold">Completed Projects</p>
                        </motion.div>
                        <motion.div
                            className="flex-1 border-t-4 border-b-4 py-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <CountUp end={11} duration={2} delay={0.5} className="font-bold text-3xl text-lime-900" />
                            <p className="mt-2 text-lg font-semibold">Broken Pencils</p>
                        </motion.div>
                        <motion.div
                            className="flex-1 border-t-6 border-b-6 py-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <CountUp end={18} duration={2} delay={1} className="font-semibold text-3xl text-lime-900" />
                            <p className="mt-2 text-lg font-semibold ">Failed Attempts</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
