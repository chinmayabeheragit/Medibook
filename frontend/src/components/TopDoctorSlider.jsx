import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/TopDoctorsty.css";
import hser1 from "../assets/hser.jpg";
import hser2 from "../assets/hser2.jpg";
import hser3 from "../assets/hser3.jpg";
import hser4 from "../assets/hser4.jpg";
import hser5 from "../assets/hser5.png";
import hser6 from "../assets/hser6.jpg";

import { Pagination } from "swiper/modules";

const Card = ({ image, id }) => {
  return (
    <div className="card animate-card">
      <img src={image} alt={`Card ${id}`} />
    </div>
  );
};

const CardSlider = () => {
  const cards = [
    { id: 1, image: hser1 },
    { id: 2, image: hser2 },
    { id: 3, image: hser3 },
    { id: 4, image: hser4 },
    { id: 5, image: hser5 },
    { id: 6, image: hser6 }, // fixed duplicate id
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
