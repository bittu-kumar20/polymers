import inject from "@assets/manufacture/inject.png"
import testing from "@assets/manufacture/test.png"
import cool from "@assets/manufacture/cool.png"
import mold from "@assets/manufacture/mold.png";
const cards = [
  {
    title: "Injection Molding Machines",
    desc: "100T to 1500T clamping force",
    img: inject,
  },
  {
    title: "Industrial Precision Molds",
    desc: "Hardened steel multi-cavity molds",
    img: mold,
  },
  {
    title: "Automated Cooling Systems",
    desc: "Closed-loop water chillers",
    img: cool,
  },
  {
    title: "Advanced Testing Equipment",
    desc: "Ultrasonic & tensile testers",
    img: testing,
  },
];

export default function MachineryTechnology() {
  return (
    <div className="bg-[#EDE7E3] py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Machinery & <br /> Technology
          </h2>

           <div className="w-20 h-1 bg-gradient-primary rounded-md mb-8"></div>

          <p className="text-light text-sm leading-relaxed mb-6 max-w-md">
            We invest in the future. Our technology stack includes the latest in
            automated production and digital monitoring.
          </p>

          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF7A00] rounded-full"></span>
              Industry 4.0 Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Real-time Performance Tracking
            </li>
          </ul>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group h-44 md:h-52 shadow-sm"
            >
              <img
                src={`${card.img}?auto=format&fit=crop&w=600&q=80`}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-semibold leading-tight">
                  {card.title}
                </h4>
                <p className="text-xs opacity-80">{card.desc}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}