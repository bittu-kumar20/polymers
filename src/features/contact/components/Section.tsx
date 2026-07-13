import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Section() {
  return (
    <section className="bg-[#F3F4F6] py-12 sm:py-14 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {/* Address */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4
                          transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-orange-100 p-3 rounded-lg shrink-0
                            transform transition-transform duration-500 hover:scale-110">
              <FaMapMarkerAlt className="text-orange-500 text-lg sm:text-xl" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Our Address
              </p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Akaki Industry Zone, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4
                          transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-orange-100 p-3 rounded-lg shrink-0
                            transform transition-transform duration-500 hover:scale-110">
              <FaPhoneAlt className="text-orange-500 text-lg sm:text-xl" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Call Us
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                +251 11 123 4567
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                +251 11 123 4567
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4
                          transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-orange-100 p-3 rounded-lg shrink-0
                            transform transition-transform duration-500 hover:scale-110">
              <FaEnvelope className="text-orange-500 text-lg sm:text-xl" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Email Us
              </p>
              <p className="text-xs sm:text-sm text-gray-500 wrap-break-word">
                info@modopolymersplc.com
              </p>
              <p className="text-xs sm:text-sm text-gray-500 wrap-break-word">
                sales@modopolymers.com
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}