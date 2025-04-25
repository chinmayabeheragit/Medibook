import React from "react";
import { motion } from "framer-motion";
import servicel3 from "../assets/aboutusscrollcard.jpg";
import servicel2 from "../assets/whychosus.jpg";

const aboutData = [
  {
    text: {
      title: "Your Trusted Partner in Smarter Hospital Management",
      desc: "At Medibook, we believe that technology should empower healthcare, not complicate it. We are a leading provider of smart, secure, and scalable Hospital Management System (HMS) solutions designed to streamline operations, enhance patient care, and simplify administration for hospitals, clinics, and medical institutions of all sizes.Whether you're managing outpatient appointments, inpatient records, pharmacy inventories, diagnostics, or billing workflows – Medibook brings it all together in one powerful platform.",
    },
    img: servicel3,
    reverse: false,
  },
  {
    text: {
      title: "Why Choose Medibook?",
      desc: "Our system is designed to put patients at the heart of every operation, ensuring accurate records, better communication, and efficient service.From doctor scheduling to digital prescriptions, Medibook automates every corner of your hospital’s ecosystem.With end-to-end encryption and HIPAA-compliant data management, your sensitive information stays protected.Whether you’re a small clinic or a multi-specialty hospital, Medibook grows with your needs.Access Medibook from anywhere or host it securely on-site – the choice is yours.",
    },
    img: servicel2,
    reverse: true,
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -80, skew: -5 },
  visible: { opacity: 1, x: 0, skew: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80, skew: 5 },
  visible: { opacity: 1, x: 0, skew: 0 },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const AboutHospital = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 mt-36">
      {aboutData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse ${
            item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center justify-between gap-12 mb-24`}
        >
          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            variants={item.reverse ? fadeInRight : fadeInLeft}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-playfair">
              {item.text.title}
            </h2>
            <p className="text-lg text-gray-600 text-justify">
              {item.text.desc}
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            variants={imageReveal}
            transition={{ duration: 1.2, ease: "backOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <img
                src={item.img}
                alt={item.text.title}
                className="w-full rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl p-1 bg-gradient-to-br from-gray-100 to-white"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AboutHospital;
