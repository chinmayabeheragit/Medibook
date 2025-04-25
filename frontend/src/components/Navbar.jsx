import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import mainlogo from "../assets/mainlogo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="flex items-center justify-between text-sm py-2 px-6">
        {/* Logo + MediBook Text */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img className="w-20" src={mainlogo} alt="logo" />
          <h1 className="text-xl font-bold text-[#0c2141] hidden sm:block">
            MediBook
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex items-start gap-5 font-medium hidden text-black">
          <NavLink to="/">
            <li className="py-1 hover:text-primary">HOME</li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 hover:text-primary">ABOUT</li>
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1 hover:text-primary">ALL DOCTORS</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 hover:text-primary">CONTACT</li>
          </NavLink>
          <NavLink to="/service">
            <li className="py-1 hover:text-primary">SERVICE</li>
          </NavLink>
          <NavLink to="/medicine">
            <li className="py-1 hover:text-primary">
              <FaCartArrowDown fontSize={20} />
            </li>
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-12 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-white/80 backdrop-blur-md rounded shadow-md p-3 flex flex-col gap-3">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
          )}

          {/* Mobile Menu Button */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-[100vh] z-40 transition-all duration-300 ease-in-out ${
            showMenu ? "w-full" : "w-0 overflow-hidden"
          }`}
        >
          <div className="h-full bg-[white] text-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/30">
              <div className="flex items-center gap-2">
                <img src={mainlogo} className="w-12" alt="logo" />
                <h1 className="text-lg font-bold text-[#0c2141]">MediBook</h1>
              </div>
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                className="w-7 cursor-pointer"
                alt="close"
              />
            </div>

            {/* Links */}
            <ul className="flex flex-col justify-center flex-grow items-center gap-6 px-6 py-10 text-lg font-semibold bg-[#0c2141]">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  HOME
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  ABOUT
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  ALL DOCTORS
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/service">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  SERVICE
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/medicine">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  <FaCartArrowDown fontSize={20} />
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-5 py-2 rounded-full hover:text-yellow-300 transition">
                  CONTACT
                </p>
              </NavLink>

              {!token && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/login");
                  }}
                  className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-yellow-300 hover:text-indigo-800 transition"
                >
                  Create Account
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
