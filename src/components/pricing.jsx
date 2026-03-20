import React from "react";
import Img from "../assets/harvoxx_pricing.jpg";

function Pricing() {
  return (
    <section className="py-12 sm:py-16">
      <h1
        data-aos="fade-up"
        className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center text-center px-4"
      >
        Pricing
      </h1>

      <div
        data-aos="fade-up"
        className="relative flex justify-center mt-4 sm:mt-6 mb-8 sm:mb-10"
      >
        <div className="w-32 sm:w-40 md:w-48 h-[2px] bg-gray-300"></div>
        <div className="absolute w-10 sm:w-12 md:w-16 h-[4px] bg-yellow-500 top-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <img
          src={Img}
          alt="Harvoxx Pricing"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Pricing;
