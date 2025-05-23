import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/TopDoctorsty.css";

import { Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";

const Card = ({ image, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="card"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <img src={image} alt={`Card ${id}`} />
    </motion.div>
  );
};

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://www.redlandsdailyfacts.com/wp-content/uploads/2021/01/OCR-L-VIRUS-HOSPITALS-0627-09TP-1.jpg?w=1600&resize=1600,900",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/174979146/photo/ambulance-in-front-of-emergency-entrance-to-hospital.jpg?s=612x612&w=0&k=20&c=SrPpmNSt589PChRdGmZxHLSUGK7ONADrPmDy58BagoA=",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1432121066/photo/female-nurse-adjusting-the-blood-pressure-monitor-on-female-hospital-patient.jpg?s=612x612&w=0&k=20&c=QyRo483NPNRgYHZuabkCkGKBbDXsShHvOsDI5desu-g=",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1432121066/photo/female-nurse-adjusting-the-blood-pressure-monitor-on-female-hospital-patient.jpg?s=612x612&w=0&k=20&c=QyRo483NPNRgYHZuabkCkGKBbDXsShHvOsDI5desu-g=",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1432121066/photo/female-nurse-adjusting-the-blood-pressure-monitor-on-female-hospital-patient.jpg?s=612x612&w=0&k=20&c=QyRo483NPNRgYHZuabkCkGKBbDXsShHvOsDI5desu-g=",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card image={card.image} id={card.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
