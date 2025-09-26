import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ReactTyped } from "react-typed";
import { scrollToSection } from "../utils/helpers";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center relative 
                 px-6 sm:px-12 lg:px-24 
                 bg-gradient-to-b from-gray-100 to-white 
                 dark:from-gray-900 dark:to-gray-800 
                 transition-colors duration-500
                 pt-24 sm:pt-28 md:pt-32"
    >
      {/* Left Side: Text */}
      <div className="flex-1 text-center md:text-left space-y-6 mt-12 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          Hi, I'm <span className="gradient-text">Niranjan Singh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold"
        >
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Software Developer",
              "RPA Specialist",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          Passionate about creating innovative web solutions and automating
          business processes. I build modern applications that make a
          difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-gray-400 dark:border-gray-600 
                       hover:bg-gray-100 dark:hover:bg-gray-700 
                       px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/niranjansingh0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Github className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/niranjan-singh-56541126b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Linkedin className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </a>
          <a
            href="mailto:ns916169@gmail.com"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Mail className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </a>
        </div>

        {/* Resume Download */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1Hv8rutkSET8Sybno9WU579kAF8H-MJEM"
            download
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side: Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="relative group w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Gradient Border Wrapper */}
          <div className="p-[4px] rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400">
            <img
              src="/NiranjanPhoto.jpg"
              alt="Niranjan Singh"
              className="w-full h-full object-cover rounded-full 
                       shadow-2xl 
                       animate-[float_4s_ease-in-out_infinite]
                       transition-transform duration-500 
                       group-hover:scale-105 group-hover:rotate-2"
            />
          </div>

          {/* Glow Effect */}
          {/* <div
            className="absolute inset-[-18px] rounded-full 
                     bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 
                     opacity-40 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
          ></div> */}
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md 
               hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-gray-600 dark:text-gray-400 animate-bounce"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
