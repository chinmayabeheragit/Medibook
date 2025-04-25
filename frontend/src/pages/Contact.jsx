import React from "react";
import { assets } from "../assets/assets";
import "../Styles/Contact.css";
const Contact = () => {
  return (
    <div className="mt-[5rem]">
      <section className="bg-[#061c3f] text-white px-6 py-16 md:px-16 lg:px-32 rounded-b-[60px] min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold leading-snug"
            id="contact-head"
          >
            Get in Touch with MediBook
            <br className="hidden md:block" />
            We're Here to Support Your Healthcare Journey
          </h2>
        </div>
      </section>
      <div className="py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 text-justify">
          <p id="contact-para">
            At MediBook, we believe that seamless communication is at the heart
            of quality healthcare. Whether you're a patient, healthcare
            provider, or administrative staff, we’re here to support your
            journey every step of the way. Our team is dedicated to ensuring
            that your experience with our hospital management system is smooth,
            efficient, and hassle-free.
          </p>
          <p id="contact-para">
            If you have questions about using MediBook, need assistance with
            appointments, technical support, or want to explore how our platform
            can benefit your healthcare facility, don’t hesitate to get in
            touch. We’re just a call or message away.
          </p>
          <p id="contact-para">
            You can reach us via phone, email, or by filling out the contact
            form below. Our support team is available Monday through Saturday,
            from 9:00 AM to 6:00 PM, to provide timely and reliable assistance.
            We strive to respond to all inquiries within 24 hours.
          </p>
          <p id="contact-para">
            Visit our office, drop us an email, or speak with a customer service
            representative—we’re here to help! At MediBook, your care and
            convenience are our top priorities. Let us know how we can serve you
            better.
          </p>
          <p id="contact-para">Together, let’s build a healthier future.</p>
        </div>
      </div>
      {/* last form */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl bg-white text-[#333] shadow-[0_0_60px_5px_rgba(0,0,0,0.4)] rounded-md p-6 sm:p-8 custom-arrow">
          <p className="text-center text-xl font-bold tracking-widest mb-6">
            Get In Touch with Medibbok
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full mb-4 border-b border-gray-300 bg-transparent py-2 px-2 text-sm focus:outline-none focus:border-[#0d095e]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            className="w-full mb-4 border-b border-gray-300 bg-transparent py-2 px-2 text-sm focus:outline-none focus:border-[#0d095e]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            className="w-full mb-6 border-b border-gray-300 bg-transparent py-2 px-2 text-sm focus:outline-none focus:border-[#0d095e]"
          />

          <p>MediBook Headquarters India Bengaluru, India</p>
          <p>
            Call Us:Customer Support: ‪+91-9348374145‬ Mon - Sat | 9:00 AM -
            6:00 PM
          </p>

          <div className="absolute right-[-10px] bottom-[-20px] bg-[#0f0092] hover:bg-[#07013d] text-white py-3 px-6 text-xs font-bold tracking-widest rounded-l-full cursor-pointer shadow-lg transition-all duration-200">
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
