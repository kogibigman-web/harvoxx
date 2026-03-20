import React from "react";
import Img from "../assets/stb.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  return (
    <section className="bg-[#2f4b5f] w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-16 sm:py-20 gap-12 lg:gap-16 ">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-once="false"
          className="w-full lg:w-1/2 text-[#cfd8df] text-center lg:text-left data-aos-slide-right"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight lg:leading-[1.1]">
            A whole awesome
            <br />
            experience with
            <br />
            Harvoxx Tech. Hub.
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-[#d6e0e7]">
            Right here is an organized hub of seasoned and aspiring
            techpreneurs, developers, graphics designers and innovators with
            strong passion for technology and entrepreneurship.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#d6e0e7]">
            It is a great platform for people to grow, develop amazing
            programming and business development skills.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#d6e0e7]">
            It is a community that has a fast growing alliances with Angel
            investors, VCs, NGOs and other tech communities.
          </p>

          <button className="mt-8 sm:mt-10 bg-[#fdc134] text-[#213b52] px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#213b52] hover:text-white transition duration-300">
            Get Started
          </button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-once="false"
          className="w-full lg:w-1/2 flex justify-center "
        >
          <img
            src={Img}
            alt="Summer Tech Bootcamp"
            className="w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[650px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
