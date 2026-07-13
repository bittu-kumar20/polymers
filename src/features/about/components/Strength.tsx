import machineIcon from "@assets/factory/ic.png"
import machineIcon1 from "@assets/factory/ic1.png"
import machineIcon2 from "@assets/factory/ic2.png"
import machineIcon3 from "@assets/factory/ic3.png"

const features = [
  {
    id: 1,
    icon: machineIcon,
    title: "Modern Injection Machines",
    desc: "State-of-the-art automated equipment for maximum precision.",
  },
  {
    id: 2,
    icon: machineIcon1,
    title: "Skilled Technical Workforce",
    desc: "Expert engineers and technicians with deep industry knowledge.",
  },
  {
    id: 3,
    icon: machineIcon2,
    title: "Strong Production Capacity",
    desc: "High-volume manufacturing capabilities to meet large demands.",
  },
  {
    id: 4,
    icon: machineIcon3,
    title: "Consistent Product Quality",
    desc: "Rigorous quality control processes at every production stage.",
  },
]

export function Strength() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold">
            Our Core Strengths
          </h2>

           <div className="flex justify-center mt-3 mb-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>

          <p className="text-gray-500 text-sm">
            Leveraging advanced technology and human expertise to deliver excellence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.id}
              className="bg-[#F3F4F6] p-6 rounded-xl card-hover transition"
            >

              <img
                src={item.icon}
                alt="icon"
                className="w-8 h-8 mb-4"
              />

              <h3 className="font-semibold mb-2">
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