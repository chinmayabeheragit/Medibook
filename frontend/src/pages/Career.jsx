import React, { useRef, useState } from "react";
import vd from "../assets/vd2.mp4";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import carelogo from "../assets/careesim.jpg";
import "../Styles/Career.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          playsInline
          muted={isMuted}
        >
          <source src={vd} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full w-full px-20 text-left">
          <h1
            className="text-2xl md:text-2xl font-bold text-white mb-4"
            id="medi-small"
          >
            Medibook India Career
          </h1>
          <p className=" text-gray-200 max-w-xl mb-2" id="medibolspara">
            <span>
              Shape Tomorrow’s <span className="medicon-span">Healthcare</span>
            </span>
            <br />
            Explore Career Opportunities at MediBook
          </p>

          {/* Centered Input Section */}
          <div className="w-full flex justify-center ">
            <div className="flex items-center justify-center gap-4 bg-transparent px-4 py-6 flex-wrap md:flex-nowrap w-full max-w-3xl">
              {/* Input + icon */}
              <div className="flex items-center bg-white rounded-full px-3 py-6 flex-grow shadow-md min-w-0 mt-[3rem]">
                <FiSearch className="text-gray-500 mr-2 text-xl shrink-0" />
                <input
                  type="text"
                  placeholder="Search for a keyword or role e.g ‘staff nurse’"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
              </div>

              <button className="bg-[#5DC9C5] hover:bg-[#4bb4b0] text-white font-medium text-sm px-12 py-5 rounded-full shadow-md transition duration-200 whitespace-nowrap mt-[3rem]">
                Search roles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="career-container">
        <div className="career-content">
          {/* Text Section */}
          <div className="career-text">
            <h3 id="care-cardhead">Career Growth</h3>
            <p id="care-cardpara">
              At MediBook, we’re transforming healthcare through innovation and
              technology. Join our passionate team of professionals dedicated to
              improving patient care and hospital efficiency. Explore
              opportunities to grow your career, make a real impact, and help
              shape the future of digital healthcare.
            </p>
          </div>

          {/* Image Section */}
          <div className="career-image">
            <img src={carelogo} alt="Career" className="image-cri" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
