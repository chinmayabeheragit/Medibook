import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      style={{ borderRadius: "4%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="mt-[4rem] flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10"
    >
      {/* ------- Left Side ------- */}
      <motion.div
        variants={fadeUp}
        className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5"
      >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          <p className="mt-2">
            Fully regulated online pharmacy <br /> trusted by 1 million patients
          </p>
        </div>

        <div className="relative inline-block group overflow-hidden rounded-full shadow-lg mt-[2rem]">
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="relative z-10 w-full px-8 py-3 bg-white text-[#595959] text-sm sm:text-base font-bold tracking-widest transition-colors duration-50 group-hover:text-[#183153] rounded-full overflow-hidden"
          >
            <span className="flex items-center justify-center gap-2 relative z-10 w-full text-center animate-none group-hover:animate-scaleUp">
              Create account
              <img className="w-3" src={assets.arrow_icon} alt="arrow" />
            </span>
            <span className="absolute inset-0 w-0 h-full bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-full z-0 rounded-full"></span>
          </button>
        </div>
      </motion.div>

      {/* ------- Right Side ------- */}
      <motion.div
        variants={fadeInRight}
        className="hidden md:block md:w-1/2 lg:w-[370px] relative"
      >
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="appointment"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
