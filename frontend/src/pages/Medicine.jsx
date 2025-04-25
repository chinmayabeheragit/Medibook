import React, { useState } from "react";
import "../Styles/Medicine.css";
import logo from "../assets/medicinelogo.jpg";
import MyMediput from "./Mymediput";
import { motion, AnimatePresence } from "framer-motion";
import TabsWithCards from "./Medicitab";

const cardsData = [
  {
    id: 1,
    title: "Card One",
    text: "This is the content for Card One.",
    image: "",
  },
  {
    id: 2,
    title: "Card Two",
    text: "This is the content for Card Two.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Card Three",
    text: "This is the content for Card Three.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Card Four",
    text: "This is the content for Card Four.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Card Five",
    text: "This is the content for Card Five.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Card Six",
    text: "This is the content for Card Six.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Medicine = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <div className="medicinepage-card-container">
        <div className="medicinepage-left-side">
          <h1 className="medicinepage-heading">
            Order Trusted Medicines Online — Directly from Your Hospital
          </h1>
          <p className="medicinepage-description">
            Get genuine, doctor-prescribed medicines delivered to your doorstep.
            Fast, safe, and reliable. From cold & flu to chronic care — we’ve
            got you covered.
          </p>
          <div className="medicinepage-search-container">
            <MyMediput />
          </div>
        </div>
        <div className="medicinepage-right-side">
          <img src={logo} alt="Healthcare" className="medicinepage-image" />
        </div>
      </div>
      {/* card */}
      <TabsWithCards />
    </>
  );
};
export default Medicine;
