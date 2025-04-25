import React from "react";
import { motion } from "framer-motion";
import bannerabout from "../assets/bannerabout.jpg";
import AboutHospital from "./AboutCard";

const NewAbout = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="flex justify-center items-center min-h-screen px-4 py-12 bg-primary">
        <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
          {/* Text Section on Top */}
          <motion.div
            className="w-full md:w-1/2 px-4 md:px-8 py-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold text-white mb-4">
              About Medibook
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-xl">
              Empowering Healthcare with Technology
            </p>
          </motion.div>

          {/* Image Section Below */}
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-64 md:h-[400px] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={bannerabout}
                alt="About Medibook"
                className="w-full h-full object-cover"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-white opacity-10 clip-shape pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
      <AboutHospital />
    </div>
  );
};

export default NewAbout;
