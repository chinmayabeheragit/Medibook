import React from "react";
import v6 from "../assets/v6.mp4";

const VideoSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto gap-10">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Where you’re <br className="hidden sm:block" />
          treated is your <br className="hidden sm:block" />
          choice, a big <br className="hidden sm:block" />
          one.
        </h2>
        <p className="text-gray-700 mt-6 text-lg">
          You might be one of the millions of people in the UK who are covered
          by private medical insurance, but do you know where you’re treated is
          your choice?
        </p>
        <p className="text-gray-700 mt-4 text-lg">
          With over 3000 specialists across our hospitals, outpatients and
          medical centres, we give our patients the gold standard in care from
          consultations through to treatment.
        </p>
        <p className="text-gray-700 mt-4 text-lg">
          So choose the private hospital network that’s focused on you.
        </p>
      </div>

      {/* Autoplay Video */}
      <div className="w-full lg:w-2/3">
        <video
          src={v6}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[400px] rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
