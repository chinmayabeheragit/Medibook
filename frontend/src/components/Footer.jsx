import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Footer.css";
import mainlogo from "../assets/mainlogo.png";

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Top Row: Logo + Text + Nav */}
      <div className="footer-top-row">
        <div className="footer-left">
          <img className="footer-logo" src={mainlogo} alt="Logo" />
          <p className="footer-text">MediBook Hospital.</p>
        </div>

        <div className="footer-links">
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/medicine">Delivery</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/privacypolicy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <hr />
        <p id="footer-lastp">© 2025 Medibook.com — All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
