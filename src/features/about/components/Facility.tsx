import facility from "@assets/facilty.png";

export default function Facility() {
  return (
    <section className="py-10">
      <div className=" mx-auto px-4 ">
        <div className="relative rounded-xl overflow-hidden">
          {/* Image */}
          <img
            src={facility}
            alt="facility"
            className="w-full h-112.5 md:h-137.5 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center  px-6">
            <div className="text-white   md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Plastic Manufacturing Facility
              </h2>

              <p className="text-[#CBD5E1] text-[20px] mb-6">
                Our facility is equipped with the latest generation of injection
                molding machines, ensuring energy efficiency and waste reduction
                while maintaining the highest precision in every product we
                manufacture.
              </p>

              <button className=" bg-white text-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Tour Our Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
