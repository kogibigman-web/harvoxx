import React from "react";
import Img from "../assets/footer-bg.jpg";

function Footer() {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="absolute inset-0 bg-[#213b52]/90"></div>

      <div
        data-aos="fade-up"
        className="relative z-10 max-w-6xl mx-auto text-center px-6 py-24 flex flex-col items-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Harvoxx Tech. Hub.
        </h1>

        <div className="flex items-center justify-center w-full max-w-md mb-8">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <div className="w-10 h-[4px] bg-yellow-500 mx-3 rounded"></div>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        <p className="text-gray-200 max-w-2xl text-sm sm:text-base md:text-lg mb-10">
          Get latest info on our events, trainings, and tech presentations.
          Subscribe below
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-xl sm:max-w-2xl gap-4 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-1 px-6 py-4 rounded-full sm:rounded-l-full sm:rounded-r-none bg-gray-200 text-gray-700 focus:outline-none"
          />
          <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full sm:rounded-r-full sm:rounded-l-none transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/20 py-6 text-center text-white text-sm">
        © Copyright <span className="font-semibold">Harvoxx Tech. Hub.</span>{" "}
        All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
