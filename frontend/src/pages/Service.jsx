import React from "react";
import { motion } from "framer-motion";
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
  },
  {
    text: {
      title: "Expert Team of Specialist & Experienced Doctors",
      desc: "At MediBook Hospital, our strength lies in our team of highly experienced and board-certified specialists across all major medical fields. From cardiology to orthopedics, neurology to internal medicine, our doctors bring years of expertise, global training, and compassionate care to every patient. Working collaboratively, they deliver precise diagnoses and personalized treatment plans using the latest medical advancements. With a commitment to excellence and patient-first values, MediBook ensures you receive expert care from trusted hands—every step of the way.",
    },
    img: servicel2,
    reverse: true,
  },
  {
    text: {
      title: "Smart Medicine Search & Full Pharmacy Access",
      desc: "At MediBook Hospital, finding the right medicine is easier than ever. Our online pharmacy features a smart image-to-search tool, allowing users to upload a photo of a medicine and instantly find matches. With a wide inventory of trusted medications, all products are available for order directly through our website and mobile application. Whether it’s a prescription refill or over-the-counter need, MediBook ensures quick, convenient, and reliable access to the medicines you trust—anytime, anywhere.",
    },
    img: servicel1,
    reverse: false,
  },
  {
    text: {
      title: "Advanced Hospital Beds & Emergency Booking System",
      desc: "MediBook Hospital is equipped with high-tech, fully adjustable beds designed for maximum patient comfort and critical care support. From maternity to ICU, our beds ensure safety, hygiene, and advanced monitoring. In emergencies, our real-time bed booking system allows patients or families to reserve beds instantly through our website or app, ensuring timely admission without delays. With MediBook, urgent care starts with smart, swift, and seamless bed availability—because every second matters.",
    },
    img: servicel4,
    reverse: true,
  },
  {
    text: {
      title: "Comprehensive Lab Testing & Smart Report Access",
      desc: "At MediBook Hospital, we offer a full spectrum of diagnostic lab tests including blood tests, urine analysis, imaging, and advanced pathology—all conducted in our state-of-the-art laboratory. Our skilled technicians and modern equipment ensure fast, accurate, and reliable results. Patients can easily access their lab reports online or via our mobile app, making follow-ups and consultations seamless. Whether it’s routine health checks or specialized diagnostics, MediBook delivers trusted testing with total convenience.",
    },
    img: servicel5,
    reverse: false,
  },
  {
    text: {
      title: "24/7 Emergency Ambulance & SOS Support",
      desc: "MediBook Hospital provides round-the-clock emergency ambulance services equipped with life-saving equipment and trained paramedics to ensure immediate response and safe patient transport. Whether it’s a critical situation or urgent medical need, our SOS system, available on both website and mobile app, allows users to request an ambulance with a single tap. With GPS tracking, fast dispatch, and real-time updates, MediBook ensures swift, secure, and reliable emergency care when every second counts.",
    },
    img: servicel6,
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

const Service = () => {
  return (
    <div className="max-w-[1200px] px-4 py-12 mx-auto mt-36 overflow-hidden">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } items-center justify-between gap-10 mb-36`}
        >
          <motion.div
            className="w-full text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={item.reverse ? fadeInRight : fadeInLeft}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 font-playfair">
              {item.text.title}
            </h2>
            <p className="text-[1.125rem] text-gray-600 text-justify">
              {item.text.desc}
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            variants={imageReveal}
            transition={{ duration: 1.2, ease: "backOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={item.img}
              alt={item.text.title}
              className="rounded-[13px] p-1 bg-gradient-to-br from-[#f0f4ff] to-white transition-transform duration-500 ease-in-out hover:scale-105 shadow-md hover:shadow-xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Service;
