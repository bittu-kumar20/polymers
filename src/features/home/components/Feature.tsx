
import machineIcon from "@assets/factory/1.png"
import machineIcon1 from "@assets/factory/2.png"
import machineIcon2 from "@assets/factory/3.png"
import machineIcon3 from "@assets/factory/4.png"
 const features = [
  {

    id: 1,
    icon: machineIcon,
    title: "High Quality Plastic",
    desc: "We use premium grade materials to ensure durability and reliability.",
  },
  {
    id: 2,
    icon: machineIcon1,
    title: "Modern Manufacturing",
    desc: "Advanced injection molding machines ensure precision production.",
  },
  {
    id: 3,
    icon: machineIcon2,
    title: "Industrial Expertise",
    desc: "More than 15 years of experience serving industrial partners.",
  },
  {
    id: 4,
    icon: machineIcon3,
    title: "Reliable Delivery",
    desc: "Fast and dependable supply chain for all customers.",
  },
]

export function Feature() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-orange-500">Modo Polymers?</span>
          </h2>

           <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm card-hover transition text-center"
            >

              {/* Circle Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-pink-500">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-7 h-7"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
