import React, { useState } from "react";
import { motion } from "framer-motion";
import tabsData from "../pages/Meditabdata";
import { FaIndianRupeeSign } from "react-icons/fa6";

const TabsWithCards = () => {
  const tabs = Object.keys(tabsData);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full px-4 mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full border ${
                selectedTab === tab
                  ? "bg-[#1f2937] text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-300"
              } hover:bg-[#c084fc] hover:text-white transition duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        {selectedTab && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {tabsData[selectedTab].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: "linear",
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                className="w-full max-w-[290px] h-[390px] bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 rounded-2xl shadow-md overflow-hidden relative transition-all duration-300"
              >
                {/* Image section */}
                <div className="h-2/3 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content section */}
                <div className="p-4 flex flex-col justify-between h-[130px]">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{card.text}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold text-xl text-black-500 flex items-center">
                      <FaIndianRupeeSign className="mr-1" /> 499.49
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsWithCards;
