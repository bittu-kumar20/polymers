import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FiPhone } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/image 1.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-linear-to-r from-orange-100 via-pink-100 to-pink-200"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between py-2  px-6  md:px-10">
          {/* Logo */}
          <img src={logo} className="h-10" alt="logo" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-light"
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-light"
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-light"
              }
            >
              PRODUCTS
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-light"
              }
            >
              GALLERY
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              CONTACT
            </NavLink>
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:flex justify-center items-center ">
            <a href="tel:+1112341234" className="flex gap-2 items-center px-6 py-2 bg-linear-to-r from-[#FF7A00] via-[#FF4A4A] to-[#FF007A] text-white rounded-md font-bold">
              <FiPhone className="text-xl" />
              <span className="text-lg">+11 1234 1234</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <RxCross2 size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
{open && (
  <>
    {/* Transparent overlay */}
    <div
      className="fixed inset-0  bg-opacity-20 z-40"
      onClick={() => setOpen(false)}
    ></div>

    {/* Sidebar */}
    <div className="fixed top-0 right-0 h-full w-[75%] sm:w-[50%] md:w-[40%] bg-white shadow-2xl z-50 px-6 py-8 flex flex-col items-start transition-transform duration-300">
      {/* Top Banner: Logo & Close Button */}
      <div className="flex justify-between items-center w-full mb-10">
        <img src={logo} className="h-10" alt="Modo Polymers Logo" />
        <RxCross2 
          size={28} 
          className="cursor-pointer text-gray-700 hover:text-[#FF007A] transition-colors" 
          onClick={() => setOpen(false)} 
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-6 text-lg font-semibold w-full tracking-wide">
        <NavLink 
          to="/" 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => `pb-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#FF007A]" : "text-gray-800 hover:text-[#FF007A]"}`}
        >
          HOME
        </NavLink>
        <NavLink 
          to="/about" 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => `pb-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#FF007A]" : "text-gray-800 hover:text-[#FF007A]"}`}
        >
          ABOUT
        </NavLink>
        <NavLink 
          to="/products" 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => `pb-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#FF007A]" : "text-gray-800 hover:text-[#FF007A]"}`}
        >
          PRODUCTS
        </NavLink>
        <NavLink 
          to="/gallery" 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => `pb-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#FF007A]" : "text-gray-800 hover:text-[#FF007A]"}`}
        >
          GALLERY
        </NavLink>
        <NavLink 
          to="/contact" 
          onClick={() => setOpen(false)} 
          className={({ isActive }) => `pb-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#FF007A]" : "text-gray-800 hover:text-[#FF007A]"}`}
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Phone Button */}
      <div className="mt-12 w-full">
        <a href="tel:+1112341234" className="flex justify-center w-full gap-2 items-center px-4 py-3 bg-linear-to-r from-[#FF7A00] via-[#FF4A4A] to-[#FF007A] text-white rounded-md font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all">
          <FiPhone className="text-xl shrink-0" />
          <span className="whitespace-nowrap">+11 1234 1234</span>
        </a>
      </div>
    </div>
  </>
)}
      </header>
    </>
  );
}
