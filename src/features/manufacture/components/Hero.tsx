import machine from "@assets/manufacture/moldingmachine.png";

export default function Hero() {
  return (
    <section className="bg-gradient-secondary py-16 mt-8 lg:py-20 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="text-center space-y-2 md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal">
            Unmatched Efficiency in
            <br />
            <span className="text-gradient">Plastic Production</span>
          </h1>

          <p className="text-light mt-6 md:text-xl max-w-lg mx-auto md:mx-0">
            At Modo Polymers PLC, we leverage cutting-edge technology to deliver
            high-quality plastic components. Our facility is designed for
            maximum throughput without compromising on the microscopic accuracy
            required for industrialapplications.
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl">
          <img
            src={machine}
            className="rounded-2xl w-full h-75 sm:h-100 lg:h-125 object-cover"
            alt="factory"
          />
        </div>
      </div>
    </section>
  );
}
