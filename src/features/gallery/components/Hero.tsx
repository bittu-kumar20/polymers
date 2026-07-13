import factory from "@assets/gallery/production.png";

export default function Hero() {
  return (
    <section className="bg-gradient-secondary py-16 mt-8 lg:py-20 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="text-center space-y-2 md:text-left">
         
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed">
            Our Manufacturing &
            <br />
            <span className="text-gradient">Product Gallery</span>
          </h1>

          <p className="text-light mt-6 max-w-lg mx-auto md:mx-0">
            Explore our range of plastic paint buckets, household products, and
            manufacturing facilities. See how Modo Polymers PLC produces durable
            plastic products using modern injection molding technology.
          </p>
        
            <div className="w-20 h-1 bg-gradient-primary rounded-md mx-auto md:mx-0"></div>
          
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
