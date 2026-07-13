import Button from "../../../ui/Button";
import factory from "@assets/factory.png";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
   <section className="bg-gradient-secondary py-16 mt-8 lg:py-20 shadow-sm">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

    {/* Left Content */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Reliable <span className="text-gradient">Plastic</span>
        <br />
        <span className="text-gradient">Injection</span> Molding
        <br />
        Manufacturer in Ethiopia
      </h1>

      <p className="text-gray-500 mt-6 max-w-lg mx-auto md:mx-0">
        Manufacturing high-quality paint buckets and household plastic
        products with precision and durability. We serve industrial partners
        across Addis Ababa and beyond.
      </p>

      <div className="flex flex-col md:flex-row  gap-4 mt-8 justify-center md:justify-start">
        <Link to="/products">
          <Button size="lg" className="  md:px-4" >
            View Products
          </Button>
        </Link>
        
        <Link to="/contact">
          <Button variant="outline" size="lg" className="md:px-4 hover:bg-primary">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>

  {/* Right Image */}
<div className="relative rounded-lg ">
  <img
    src={factory}
    className="w-full h-75 sm:h-100 lg:h-125 object-cover rounded-lg"
    alt="factory"
  />

  <div className="absolute bottom-3 md:bottom-6 -left-4 bg-white shadow-lg rounded-lg px-5 py-3">
    <h3 className="text-primary font-bold text-lg">15+</h3>
    <p className="text-xs text-gray-500">YEARS EXPERIENCE</p>
  </div>
</div>

  </div>
</section>
  );
}
