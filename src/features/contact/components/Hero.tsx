import factory from "@assets/contact/facility.png";

export default function Hero() {
  return (
    <section className="bg-gradient-secondary py-16 mt-8 lg:py-20 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="text-center space-y-2 md:text-left">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal  flex flex-wrap sm:block">
  Get in <span className="text-gradient sm:block sm:px-2">Touch</span>
</h1>

          <p className="text-light mt-6 md:text-xl max-w-lg mx-auto md:mx-0">
            Have questions about our manufacturing capabilities or need a bulk
            order quote? <br />
            Our team is here to assist you with high-quality polymer solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl">
          <img
            src={factory}
            className="rounded-2xl w-full h-75 sm:h-100 lg:h-125 object-cover"
            alt="factory"
          />
        </div>
      </div>
    </section>
  );
}
