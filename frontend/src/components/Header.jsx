import React from "react";
import { assets } from "../assets/assets";
import "../Styles/Header.css";
import logoui from "../assets/logoui2.webp";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="mt-[7rem] flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden mx-4 sm:mx-[7%]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* --------- Header Left --------- */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw]"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Get expert treatment,
          <br /> focused on you
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> Where you’re treated is your
            choice, a big one.
          </p>
        </div>
        <div className="relative inline-block group overflow-hidden rounded-full shadow-lg mt-[2rem]">
          <button className="relative z-10 w-full px-4 py-3 bg-white text-black font-bold tracking-widest text-sm transition-colors duration-50 group-hover:text-[#183153] rounded-full overflow-hidden">
            <span className="flex items-center gap-2 relative z-10 block w-full text-center animate-none group-hover:animate-scaleUp">
              <a href="#speciality">Book Appointment</a>
              <img className="w-3" src={assets.arrow_icon} alt="" />
            </span>
            <span className="absolute inset-0 w-0 h-full bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-full z-0 rounded-full"></span>
          </button>
        </div>
      </motion.div>

      {/* --------- Header Right --------- */}
      <motion.div
        className="md:w-1/2 relative flex justify-center items-end"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }} // <- repeat animation
      >
        <img
          className="w-[90%] sm:w-[70%] md:w-full h-auto md:absolute md:top-1/2 md:translate-y-[-50%] rounded-lg object-contain"
          src={logoui}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
