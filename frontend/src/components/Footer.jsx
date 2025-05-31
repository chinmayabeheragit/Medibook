import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mainlogo from "../assets/mainlogo.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-800 to-slate-900 text-white px-6 py-8 rounded-t-[60px] shadow-inner"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Top Row */}
      <motion.div
        className="flex flex-col items-center gap-6"
        variants={itemVariants}
      >
        {/* Logo + Text */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <img src={mainlogo} alt="Logo" className="w-16 mb-2" />
          <p className="text-lg font-semibold text-cyan-200">
            MediBook Hospital.
          </p>
        </motion.div>

        {/* Centered Nav Links Row */}
        <motion.ul
          className="flex flex-wrap justify-center items-center gap-5"
          variants={itemVariants}
        >
          {[
            { name: "Home", to: "/" },
            { name: "About us", to: "/about" },
            { name: "Delivery", to: "/medicine" },
            { name: "Career", to: "/career" },
            { name: "Privacy", to: "/privacypolicy" },
          ].map((link, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              <Link
                to={link.to}
                className="text-cyan-300 hover:text-white transition duration-300"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Bottom Section */}
      <motion.div className="mt-8 text-center" variants={itemVariants}>
        <hr className="border-t border-slate-600 mb-3" />
        <p className="text-sm text-slate-400">
          © 2025 Medibook.com — All Rights Reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
