import Button from "../../../ui/Button";
import factory from "@assets/products/facial.png";

export default function Hero() {
  return (
    <section className="bg-gradient-secondary py-16 mt-8 lg:py-20 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="text-center space-y-2 md:text-left">
         
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed">
            Our Plastic
            <br />
            <span className="text-gradient">Product Range</span>
          </h1>

          <p className="text-light mt-6 max-w-lg mx-auto md:mx-0">
            Manufacturing high-quality, durable paint buckets and essential
            household products with precision and industrial- grade durability.
          </p>
        
            <div className="w-20 h-1 bg-gradient-primary rounded-md mx-auto md:mx-0"></div>
        

          <div className="flex flex-col md:flex-row  gap-4 mt-8 justify-center md:justify-start">
            <Button  size="lg" className=" rounded-md bg-linear-to-r from-[#FF7A00] via-[#FF4A4A] to-[#FF007A] text-white  md:px-4">
              Explore Products
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[] md:px-4 hover:bg-primary"
            >
              Download Catalog
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src={factory}
            className="rounded-xl w-full h-75 sm:h-100 lg:h-125 object-cover"
            alt="factory"
          />
        </div>
      </div>
    </section>
  );
}
