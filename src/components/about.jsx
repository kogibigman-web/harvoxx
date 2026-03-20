import React from "react";
import Img from "../assets/harvoxx6.jpeg";
import { IoReceipt, IoShieldOutline } from "react-icons/io5";
import { BiCubeAlt } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row justify-center gap-12 lg:gap-[10%] items-center lg:items-start py-16 sm:py-20 px-4 sm:px-6">
      <div className="rounded-lg shadow w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <img
          src={Img}
          alt="Harvoxx Tech Hub"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-[50%]">
        <h1
          data-aos="fade-up"
          className="text-[#213b52] text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left"
        >
          About Harvoxx Tech Hub
        </h1>
        <p
          data-aos="fade-up"
          className="mt-4 text-[#6c757d] text-sm sm:text-base text-center lg:text-left"
        >
          HTH is an Innovative Hub designed to be a business growing community.
          It is a great set-up where ideas and opportunities are maximized. We
          have an enabling environment that guarantees seamless execution of
          ideas, encourages creativity, entrepreneurship, and leadership
          mindset.
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row gap-8 mt-8"
        >
          <div className="flex gap-4">
            <IoReceipt className="text-[#fdc134] text-4xl shrink-0" />
            <div>
              <h2 className="text-[#213b52] text-lg sm:text-xl md:text-2xl font-bold hover:text-[#fdc134] transition">
                Diversity
              </h2>
              <p className="text-[#6c757d] text-sm sm:text-base">
                We celebrate differences and encourage every member to be proud
                of their unique qualities and skills.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <BiCubeAlt className="text-[#fdc134] text-4xl shrink-0" />
            <div>
              <h2 className="text-[#213b52] text-lg sm:text-xl md:text-2xl font-bold hover:text-[#fdc134] transition">
                Impact
              </h2>
              <p className="text-[#6c757d] text-sm sm:text-base">
                We are determined to create meaningful impact in our society
                through dedication and service.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row gap-8 mt-8"
        >
          <div className="flex gap-4">
            <GrGallery className="text-[#fdc134] text-4xl shrink-0" />
            <div>
              <h2 className="text-[#213b52] text-lg sm:text-xl md:text-2xl font-bold hover:text-[#fdc134] transition">
                Commitment To Client
              </h2>
              <p className="text-[#6c757d] text-sm sm:text-base">
                Commitment to clients is essential for success. We go above and
                beyond to deliver satisfaction.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoShieldOutline className="text-[#fdc134] text-4xl shrink-0" />
            <div>
              <h2 className="text-[#213b52] text-lg sm:text-xl md:text-2xl font-bold hover:text-[#fdc134] transition">
                Integrity
              </h2>
              <p className="text-[#6c757d] text-sm sm:text-base">
                We stay true to our culture and uphold principles that earn
                trust and respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
