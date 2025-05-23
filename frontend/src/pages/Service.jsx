import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicel1 from "../assets/servicelogo1.jpg";
import servicel2 from "../assets/servicelogo2.jpg";
import servicel3 from "../assets/servicelogo3.jpg";
import servicel4 from "../assets/servicelogo4.jpg";
import servicel5 from "../assets/servicelogo5.jpg";
import servicel6 from "../assets/ambulance.jpg";

const serviceData = [
  {
    text: {
      title: "Childbirth & Newborn Care Services at MediBook Hospital",
      desc: "At MediBook Hospital, we offer comprehensive child delivery and newborn care with compassion and precision. Our expert team of obstetricians, pediatricians, and neonatal nurses ensure a safe and personalized birthing experience in modern, well-equipped delivery rooms. From prenatal check-ups to postnatal support and NICU services, we prioritize the health and comfort of both mother and baby. With round-the-clock care, advanced medical technology, and a family-friendly environment, MediBook is your trusted partner in welcoming new life.",
    },
    img: servicel3,
    reverse: false,
    link: "/doctors/Gynecologist",
    buttonText: "Explore Childbirth Services",
  },
  {
    text: {
      title: "Expert Team of Specialist & Experienced Doctors",
      desc: "At MediBook Hospital, our strength lies in our team of highly experienced and board-certified specialists across all major medical fields. From cardiology to orthopedics, neurology to internal medicine, our doctors bring years of expertise, global training, and compassionate care to every patient. Working collaboratively, they deliver precise diagnoses and personalized treatment plans using the latest medical advancements. With a commitment to excellence and patient-first values, MediBook ensures you receive expert care from trusted hands—every step of the way.",
    },
    img: servicel2,
    reverse: true,
    link: "/doctors",
    buttonText: "Meet Our Doctors",
  },
  {
    text: {
      title: "Smart Medicine Search & Full Pharmacy Access",
      desc: "At MediBook Hospital, finding the right medicine is easier than ever. Our online pharmacy features a smart image-to-search tool, allowing users to upload a photo of a medicine and instantly find matches. With a wide inventory of trusted medications, all products are available for order directly through our website and mobile application. Whether it’s a prescription refill or over-the-counter need, MediBook ensures quick, convenient, and reliable access to the medicines you trust—anytime, anywhere.",
    },
    img: servicel1,
    reverse: false,
    link: "/medicine",
    buttonText: "Browse Pharmacy",
  },
  {
    text: {
      title: "Advanced Hospital Beds & Emergency Booking System",
      desc: "MediBook Hospital is equipped with high-tech, fully adjustable beds designed for maximum patient comfort and critical care support. From maternity to ICU, our beds ensure safety, hygiene, and advanced monitoring. In emergencies, our real-time bed booking system allows patients or families to reserve beds instantly through our website or app, ensuring timely admission without delays. With MediBook, urgent care starts with smart, swift, and seamless bed availability—because every second matters.",
    },
    img: servicel4,
    reverse: true,
    link: "/beds",
    buttonText: "Check Bed Availability",
  },
  {
    text: {
      title: "Comprehensive Lab Testing & Smart Report Access",
      desc: "At MediBook Hospital, we offer a full spectrum of diagnostic lab tests including blood tests, urine analysis, imaging, and advanced pathology—all conducted in our state-of-the-art laboratory. Our skilled technicians and modern equipment ensure fast, accurate, and reliable results. Patients can easily access their lab reports online or via our mobile app, making follow-ups and consultations seamless. Whether it’s routine health checks or specialized diagnostics, MediBook delivers trusted testing with total convenience.",
    },
    img: servicel5,
    reverse: false,
    link: "/lab-reports",
    buttonText: "View Lab Services",
  },
  {
    text: {
      title: "24/7 Emergency Ambulance & SOS Support",
      desc: "MediBook Hospital provides round-the-clock emergency ambulance services equipped with life-saving equipment and trained paramedics to ensure immediate response and safe patient transport. Whether it’s a critical situation or urgent medical need, our SOS system, available on both website and mobile app, allows users to request an ambulance with a single tap. With GPS tracking, fast dispatch, and real-time updates, MediBook ensures swift, secure, and reliable emergency care when every second counts.",
    },
    img: servicel6,
    reverse: true,
    link: "/ambulance",
    buttonText: "Request Ambulance",
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
  hidden: { opacity: 0, scale: 0.9, rotate: -3 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const Service = () => {
  return (
    <div className="max-w-[1200px] px-4 py-16 mx-auto mt-36 space-y-28">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } items-center justify-between gap-y-12 md:gap-x-12 lg:gap-x-20`}
        >
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={item.reverse ? fadeInRight : fadeInLeft}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 font-playfair">
              {item.text.title}
            </h2>
            <p className="text-base md:text-[1.125rem] text-gray-600 text-justify mb-6 leading-relaxed">
              {item.text.desc}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`mt-4 ${
                item.reverse ? "md:text-right" : "md:text-left"
              }`}
            >
              <Link
                to={item.link}
                className="inline-block px-6 py-3 text-white bg-[#183153] hover:bg-[#1e3a8a] rounded-full shadow-md font-semibold transition duration-300 ease-in-out"
              >
                {item.buttonText}
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={imageReveal}
            transition={{ duration: 1.2, ease: "backOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={item.img}
              alt={item.text.title}
              className="w-full h-auto max-w-full rounded-xl p-1 bg-gradient-to-br from-[#f0f4ff] to-white shadow-md hover:shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Service;
