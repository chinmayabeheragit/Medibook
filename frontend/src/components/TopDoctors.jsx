import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      <h1 className="text-3xl font-medium">
        Discover Our Hospital Management Services
      </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Explore our comprehensive hospital management services to streamline
        operations and enhance patient care.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-[#EAEFFF]" src={item.image} alt="" />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></p>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-[#262626] text-lg font-medium">{item.name}</p>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button
        onClick={() => {
          navigate("/service");
          scrollTo(0, 0);
        }}
        className="bg-[#EAEFFF] text-gray-600 px-12 py-3 border-r-[#0b0606] rounded-full mt-10"
      >
        More
      </button> */}
      <div className="m-4 inline-block">
        <button
          style={{ borderRadius: "50px" }}
          onClick={() => {
            navigate("/service");
            scrollTo(0, 0);
          }}
          className="relative px-6 py-3 text-lg tracking-wide text-[#725AC1] bg-transparent border-2 border-[#725AC1] rounded-[10px] transition duration-500 ease-out hover:text-white hover:bg-gray-400  active:scale-90 shadow-[inset_0_0_0_0_#725AC1] hover:shadow-[inset_0_-100px_0_0_#725AC1]"
        >
          More Medicine
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
