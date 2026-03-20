import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#213b52]">
      <div className="flex justify-between md:justify-around items-center px-6 md:px-0 h-16 md:h-22">
        <h1 className="text-2xl font-bold text-white">
          HARVOXX <span className="text-[#fdc134]">TECH HUB</span>
        </h1>

       
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-5 text-[#adc7de] items-center">
          <a href="" className="active text-white">
            Home
          </a>
          <a href="" className="hover:text-white">
            About US
          </a>
          <a href="" className="hover:text-white">
            Services
          </a>
          <a href="" className="hover:text-white">
            Contact Us
          </a>
          <button className="border-[2.5px] border-[#fdc134] w-[120px] h-[30px] rounded-[20px] text-white hover:bg-[#fdc134] hover:text-[#213b52]">
            Get Started
          </button>
        </nav>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 pb-6 text-[#adc7de] md:hidden">
          <a href="" className="active text-white">
            Home
          </a>
          <a href="" className="hover:text-white">
            About US
          </a>
          <a href="" className="hover:text-white">
            Services
          </a>
          <a href="" className="hover:text-white">
            Contact Us
          </a>
          <button className="border-[2.5px] border-[#fdc134] w-[120px] h-[30px] rounded-[20px] text-white hover:bg-[#fdc134] hover:text-[#213b52]">
            Get Started
          </button>
        </nav>
      )}
    </div>
  );
}

export default Header;
