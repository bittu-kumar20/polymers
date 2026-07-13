import machine from "@assets/factory/machine.png";

export const Hero = () => {
  return (
    <section className="bg-gradient-secondary py-14 md:py-16 lg:py-20 mt-16 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-3 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed">
            About Modo <br />
            <span className="text-gradient">Polymers</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg lg:text-[20px] max-w-xl mx-auto md:mx-0">
            Reliable Plastic Injection Molding Manufacturer in Ethiopia, driving
            industrial excellence through precision engineering. Reliable
            Plastic Injection Molding Manufacturer in Ethiopia, driving
            industrial excellence through precision engineering.
          </p>

          {/* Gradient Line */}

          <div className="w-20 h-1 bg-gradient-primary rounded-md mx-auto md:mx-0"></div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={machine}
            className="rounded-2xl w-full h-75 sm:h-100 lg:h-125 object-cover"
            alt="factory"
          />

          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg px-5 py-3">
            <h3 className="text-primary font-bold text-lg">15+</h3>
            <p className="text-xs text-gray-500 tracking-wide">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
