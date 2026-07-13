import missionIcon from "@assets/factory/mission.png";
import visionIcon from "@assets/factory/vision.png";

export function Mission() {
  return (
    <section className="py-16 bg-[#F3ECE5]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-white p-8 rounded-xl shadow-sm relative border-t-10 border-orange-500
                        transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 mb-4
                          transform transition-transform duration-500 hover:scale-110">
            <img src={missionIcon} className="w-5 h-5" />
          </div>

          <h3 className="text-lg font-semibold mb-2">{/* same */}Our Mission</h3>

          <p className="text-gray-500 text-sm">
            To manufacture durable and high-quality plastic products that meet the evolving needs of our industrial and domestic partners, contributing to the self-reliance of Ethiopia's manufacturing sector through innovation and efficiency.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-xl shadow-sm relative border-t-10 border-orange-500
                        transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-100 mb-4
                          transform transition-transform duration-500 hover:scale-110">
            <img src={visionIcon} className="w-5 h-5" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>

          <p className="text-gray-500 text-sm">
            To become one of Ethiopia's most trusted and leading plastic manufacturing companies, recognized for our commitment to quality, technological advancement, and sustainable production practices.
          </p>
        </div>

      </div>
    </section>
  );
}