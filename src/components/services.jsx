import React from "react";
import Img from "../assets/harvoxx7.JPG";
import Img2 from "../assets/harvoxx8.jpg";
import Img3 from "../assets/service3.jpg";
import Img4 from "../assets/harvoxx2.jpg";
import Img5 from "../assets/harvoxx4.jpg";
import Img6 from "../assets/harvoxx6.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  return (
    <section className="bg-[#f4f6f8] py-14 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto text-center mb-12 sm:mb-16"
      >
        <h2 className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-bold">
          OUR SERVICES
        </h2>

        <div
          data-aos="fade-up"
          className="relative flex justify-center mt-4 sm:mt-6"
        >
          <div className="w-32 sm:w-40 md:w-48 h-[2px] bg-gray-300"></div>
          <div className="absolute w-10 sm:w-12 md:w-16 h-[4px] bg-yellow-500 top-1/2 -translate-y-1/2"></div>
        </div>

        <p
          data-aos="fade-up"
          className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-6"
        >
          Our structure is designed to provide the following services
          professionally and efficiently. Our team (of programmers, Business
          developers, strategists, marketers, Angel investors, entrepreneurs,
          graphic designers) puts in their very best to ensure that our service
          delivery is top-notch.
        </p>
      </div>

      {/* FIRST ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          data-aos="slide-right"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img}
            alt="Harvoxx 7"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Website and mobile App Design & Development
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              <span className="text-[#fdc134] font-medium underline">
                Build With Harvoxx
              </span>{" "}
              designs & develops websites for interested clients (individuals,
              firms, companies, NGOs, government agencies etc) at an affordable
              rate.
            </p>

            <p className="text-gray-400 mt-4 sm:mt-6 text-center font-semibold tracking-wide cursor-pointer hover:text-[#213b52] transition text-sm sm:text-base">
              › READ MORE
            </p>
          </div>
        </div>

        <div
          data-aos="slide-left"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img2}
            alt="Harvoxx 8"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Branding and Marketing
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              It is no longer news that we have assembled the best hands to
              provide our clients the best branding services. We acknowledge
              that having top-notch design and branding is important for
              attracting customers to your business.
            </p>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-20"></div>

      {/* SECOND ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          data-aos="slide-right"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img3}
            alt="Service 3"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Website and mobile App Design & Development
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              <span className="text-[#fdc134] font-medium underline">
                Build With Harvoxx
              </span>{" "}
              designs & develops websites for interested clients (individuals,
              firms, companies, NGOs, government agencies etc) at an affordable
              rate.
            </p>

            <p className="text-gray-400 mt-4 sm:mt-6 text-center font-semibold tracking-wide cursor-pointer hover:text-[#213b52] transition text-sm sm:text-base">
              › READ MORE
            </p>
          </div>
        </div>

        <div
          data-aos="slide-left"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img4}
            alt="Harvoxx 4"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Branding and Marketing
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              It is no longer news that we have assembled the best hands to
              provide our clients the best branding services. We acknowledge
              that having top-notch design and branding is important for
              attracting customers to your business.
            </p>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-20"></div>

      {/* THIRD ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          data-aos="slide-right"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img5}
            alt="Harvoxx 4"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Website and mobile App Design & Development
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              <span className="text-[#fdc134] font-medium underline">
                Build With Harvoxx
              </span>{" "}
              designs & develops websites for interested clients (individuals,
              firms, companies, NGOs, government agencies etc) at an affordable
              rate.
            </p>

            <p className="text-gray-400 mt-4 sm:mt-6 text-center font-semibold tracking-wide cursor-pointer hover:text-[#213b52] transition text-sm sm:text-base">
              › READ MORE
            </p>
          </div>
        </div>

        <div
          data-aos="slide-left"
          data-aos-duration="700"
          data-aos-once="false"
          className="relative"
        >
          <img
            src={Img6}
            alt="Harvoxx 6"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          <div className="absolute left-1/2 -bottom-12 sm:-bottom-16 transform -translate-x-1/2 bg-white w-[92%] sm:w-[90%] p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#213b52] text-center">
              Branding and Marketing
            </h2>

            <p className="text-gray-600 mt-4 text-center leading-6 sm:leading-7 text-sm sm:text-base">
              It is no longer news that we have assembled the best hands to
              provide our clients the best branding services. We acknowledge
              that having top-notch design and branding is important for
              attracting customers to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
