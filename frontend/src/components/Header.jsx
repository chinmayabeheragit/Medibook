import React from "react";
import { assets } from "../assets/assets";
import "../Styles/Header.css";
import { motion } from "framer-motion";
import videoone from "../assets/v1.mp4";

const Header = () => {
  return (
    <motion.div
      className="relative h-[100vh] w-full overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* --------- Background Video --------- */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={videoone}
      />

      {/* --------- Overlay --------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* --------- Centered Content --------- */}
      <motion.div
        className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-3xl md:text-4xl lg:text-7xl text-white font-semibold leading-tight tracking-wide md:tracking-normal">
          Get expert treatment,
          <br /> focused on you
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white text-sm font-light mt-6 max-w-3xl">
          <img
            className="w-24 md:w-28"
            src={assets.group_profiles}
            alt="Group"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> Where you’re treated is your
            choice, a big one.
          </p>
        </div>

        <div className="relative inline-block group overflow-hidden rounded-full shadow-lg mt-10 md:mt-14 lg:mt-20">
          <button className="relative z-10 w-full px-6 py-3 bg-white text-black font-bold tracking-widest text-sm transition-colors duration-50 group-hover:text-[#183153] rounded-full overflow-hidden">
            <span className="flex items-center gap-2 relative z-10 block w-full text-center animate-none group-hover:animate-scaleUp">
              <a href="#speciality">Book Appointment</a>
              <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
            </span>
            <span className="absolute inset-0 w-0 h-full bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-full z-0 rounded-full"></span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
