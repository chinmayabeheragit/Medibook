import React, { useState, useRef } from "react";
import { FiSearch, FiCamera } from "react-icons/fi";
import Tesseract from "tesseract.js";

const MyMediput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    fileInputRef.current.click(); // trigger hidden file input
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    // OCR using Tesseract
    Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m), // optional: progress logs
    })
      .then(({ data: { text } }) => {
        console.log("Extracted text:", text);
        setSearchTerm(text.trim());
        // TODO: You can call your backend search API here
      })
      .catch((err) => {
        console.error("OCR Error:", err);
        alert("Failed to extract text from image.");
      })
      .finally(() => {
        setLoading(false);
        event.target.value = ""; // reset input
      });
  };

  const handleSearch = () => {
    console.log("Search:", searchTerm);
    // TODO: You can connect to your backend search API here
  };

  return (
    <div className="max-w-[1040px] mx-auto md:ml-[170px] mb-8 px-2">
      <div className="relative flex items-center justify-between gap-2 bg-white rounded-full w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search something"
          className="flex-1 border-none bg-white outline-none text-black text-[15px] py-[18px] pl-[26px] pr-[100px] rounded-full w-full placeholder-black"
        />
        <div className="absolute right-2 flex gap-2">
          <button
            onClick={handleSearch}
            className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#2af598] to-[#009efd] border-0 flex items-center justify-center text-white hover:bg-[#1a1a1a] hover:shadow-lg transform hover:-translate-y-[3px] active:shadow-none active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <FiSearch size={20} />
          </button>
          <button
            onClick={handleCameraClick}
            className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#2af598] to-[#009efd] border-0 flex items-center justify-center text-white hover:bg-[#1a1a1a] hover:shadow-lg transform hover:-translate-y-[3px] active:shadow-none active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <FiCamera size={20} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {loading && (
        <p className="text-center mt-4 text-sm text-gray-500 animate-pulse">
          Extracting text from image...
        </p>
      )}
    </div>
  );
};

export default MyMediput;
