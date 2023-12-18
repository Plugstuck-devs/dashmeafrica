// src/components/Forgotpassword
import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "./assets/frame.png";
import logo from "./assets/logo.png";
import google from "./assets/google.png";
import apple from "./assets/apple.png";

const Forgotpassword = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4  text-black">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="mr-2 " />
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button with Hidden Border */}
          <button
            className={`${
              activeTab === "login"
                ? "border-b-2 border-transparent"
                : "border-b-2 border-white"
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange("login")}
          >
            <Link to="/Login">Login</Link>
          </button>
          {/* Signup Button with Border */}
          <div className="mr-8">
            <button className="inline-block font-lg  mr-8 rounded-lg border border-solid border-[#568203] p-2 w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark">
              <Link to="/Signup2">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex">
        <div className="w-1/2 p-8">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-black-600 mb-8 text-center">
            Forgotten your password?
          </h2>

          <div className="grid gap-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer block w-full px-4 py-2 mb-10 text-[#568302] bg-white border rounded-md focus:border-[#568302] focus:bg-green-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your email"
              />
              
            </div>
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border mb-20 border-transparent font-semibold bg-[#568302] text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Continue
            </button>
          </div>

          {/* Footer */}
          <div className="text-center w-full p-4 mt-20">
            <p className="text-gray-600">
              <a href="#" className="text-[#568203]">
                Having trouble?
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 h-98 mr-8 rounded-md mb-10 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-20 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
