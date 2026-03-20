import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-700 tracking-wide">
            CONTACT
          </h2>

          <div className="relative flex justify-center mt-4">
            <div className="w-32 sm:w-40 h-[2px] bg-gray-300"></div>
            <div className="absolute w-10 sm:w-12 h-[4px] bg-yellow-500 top-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-8">
            <div
              data-aos="fade-up"
              className="bg-white p-6 sm:p-10 shadow-lg rounded"
            >
              <div className="flex justify-center mb-4">
                <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">
                Our Address
              </h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                Elzazi complex, Opposite Westharm petrol station along
                gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                data-aos="fade-up"
                className="bg-white p-6 sm:p-8 shadow-lg rounded text-center"
              >
                <FaEnvelope className="text-yellow-500 text-2xl mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Email Us
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Hello@harvoxx.com
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Help@harvoxx.com
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Admin@harvoxx.com
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white p-6 sm:p-8 shadow-lg rounded text-center"
              >
                <FaPhoneAlt className="text-yellow-500 text-2xl mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Call Us
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  +2349011684637
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  +2349065308024
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  +2349030643105
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="bg-white p-6 sm:p-10 shadow-lg rounded"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-3 w-full outline-none focus:border-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-3 w-full outline-none focus:border-yellow-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 w-full outline-none focus:border-yellow-500"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="border border-gray-300 p-3 w-full outline-none focus:border-yellow-500"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-8 sm:px-10 py-3 font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
