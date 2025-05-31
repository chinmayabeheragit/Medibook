import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const PatienceStories = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const cards = [
    {
      id: 1,
      title: "Fertility Journey",
      image: s1,
      description:
        "When Steve found out his breathlessness was caused by a narrowed aortic valve...",
    },
    {
      id: 2,
      title: "Knee Surgery Success",
      image: s2,
      description:
        "Discover how a patient recovered from a complex knee operation.",
    },
    {
      id: 3,
      title: "Heart Care Experience",
      image: s3,
      description:
        "A real story of surviving a heart condition with timely care.",
    },
    {
      id: 4,
      title: "Cancer Recovery",
      image: s4,
      description:
        "Inspirational recovery from cancer through determination and support.",
    },
    {
      id: 5,
      title: "Pediatric Care",
      image: s5,
      description:
        "How expert pediatricians made a difference in a young life.",
    },
    {
      id: 6,
      title: "Neurology Triumph",
      image: s6,
      description:
        "A neurological disorder treated with expert precision and care.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.15,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 sm:px-6 py-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
              Patient Stories
            </h2>
            <p className="text-gray-600 text-base mt-5 max-w-xl">
              From fertility journeys to knee surgery, read the personal
              accounts from some of our patients whose experiences may help
              others undergoing medical treatment.
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollLeft}
              className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
            >
              <GrLinkPrevious className="text-xl" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollRight}
              className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
            >
              <GrLinkNext className="text-xl" />
            </motion.button>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="rounded-xl p-6"
          style={{ willChange: "transform" }}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="rounded-xl shadow-lg flex-shrink-0 snap-start w-full max-w-[300px] mx-auto transition-all duration-300 hover:shadow-xl"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                style={{
                  willChange: "transform, opacity",
                  background: `linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)`,
                }}
              >
                <div className="flex flex-col h-full rounded-xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col justify-between h-[250px]">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 text-sm line-clamp-5">
                        {card.description}
                      </p>
                    </div>
                    <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition w-fit">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatienceStories;
