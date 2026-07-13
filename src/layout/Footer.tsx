import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import logo from "../assets/image 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

    <>
       {/* CTA SECTION */}
      <section className="bg-gradient-primary text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Looking for a Reliable Plastic Product <br/>Supplier?
        </h2>

        <p className="max-w-sm mx-auto text-sm md:text-base mb-8 opacity-90">
          Contact us today for custom molding requirements or wholesale
          orders. Our team is ready to support your business goals.
        </p>

        <button className="bg-white text-[#FF7B00] font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition">
          CONTACT US NOW
        </button>
      </section>
    
    


<footer className="bg-linear-to-r from-orange-100 via-pink-100 to-pink-200 pt-12 pb-6 mt-15">


<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

  {/* Logo */}
  <div className="space-y-4 text-left">
    <img src={logo} className="h-10" alt="logo" />

    <p className="leading-relaxed text-[16px] sm:text-[18px] lg:text-[20px]">
      Leading Ethiopia's plastic manufacturing industry with innovative
      injection molding solutions and sustainable practices since 2010.
    </p>
  </div>

  {/* Quick Links */}
  <div className="text-left">
    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
      Quick Links
    </h3>
    <div className="w-24 sm:w-32 h-0.5 mt-2 mb-4 bg-gradient"></div>

    <ul className="space-y-2 text-[16px] sm:text-[18px]">
      <li><Link to="/manufacture" className="hover:text-pink-600">Manufacturing / Factory</Link></li>
      <li><Link to="/about" className="hover:text-pink-600">About Us</Link></li>
      <li><Link to="/products" className="hover:text-pink-600">Products</Link></li>
      <li><Link to="/gallery" className="hover:text-pink-600">Gallery</Link></li>
      <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
    </ul>
  </div>

  {/* Products */}
  <div className="text-left">
    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
      Our Products
    </h3>
    <div className="w-24 sm:w-32 h-0.5 mt-2 mb-4 bg-gradient"></div>

    <ul className="space-y-2 text-[16px] sm:text-[18px]">
      <li className="hover:text-pink-600">Industrial Buckets</li>
      <li className="hover:text-pink-600">Paint Packaging</li>
      <li className="hover:text-pink-600">Storage Containers</li>
      <li className="hover:text-pink-600">Custom Molding</li>
    </ul>
  </div>

  {/* Social */}
  <div className="text-left">
    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
      Connect With Us
    </h3>
    <div className="w-24 sm:w-32 h-0.5 mt-2 mb-4 bg-gradient"></div>

    <div className="flex justify-start space-x-3 mb-6">
      <div className="bg-gradient-primary text-white p-2 rounded"><FaFacebookF /></div>
      <div className="bg-gradient-primary text-white p-2 rounded"><FaTwitter /></div>
      <div className="bg-gradient-primary text-white p-2 rounded"><FaLinkedinIn /></div>
      <div className="bg-gradient-primary text-white p-2 rounded"><FaInstagram /></div>
    </div>

    <h4 className="font-semibold text-[18px] sm:text-[20px] lg:text-[22px]">
      Location
    </h4>
    <div className="w-24 sm:w-32 h-0.5 mt-2 mb-4 bg-gradient"></div>

    <p className="text-[16px] sm:text-[18px]">
      Kaliti Industrial Zone, Addis Ababa, Ethiopia
    </p>
  </div>

</div>



  {/* Bottom Bar */}
  <div className="mt-10 pt-6 mx-4 sm:mx-10 lg:mx-25 border-t text-sm text-gray-700">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 text-center">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <p>© 2026 Modo Polymers PLC. All rights reserved.</p>
        <p>
          Designed by <a href="https://www.urlwebwala.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FF007A] transition-colors">URLWEBWALA</a>
        </p>
      </div>
    </div>
  </div>

</footer>

    </>
  );
} 