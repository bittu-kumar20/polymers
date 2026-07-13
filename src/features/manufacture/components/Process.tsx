import machineIcon from "@assets/manufacture/m1.png";
import machineIcon1 from "@assets/manufacture/m2.png";
import machineIcon2 from "@assets/manufacture/m3.png";
import machineIcon3 from "@assets/manufacture/m4.png";

const features = [
  {
    id: 1,
    num:"01",
    icon: machineIcon,
    title: "Raw Material Selection",
    desc: "Sourcing premium polymers for durability and performance.",
  },
  {
    id: 2,
      num:"02",
    icon: machineIcon1,
    title: "Injection Molding",
    desc: "Sourcing premium polymers for durability and performance.",
  },
  {
    id: 3,
      num:"03",
    icon: machineIcon2,
    title: "Cooling & Shaping",
    desc: "Sourcing premium polymers for durability and performance..",
  },
  {
    id: 4,
      num:"04",
    icon: machineIcon3,
    title: " Finishing",
    desc: "Sourcing premium polymers for durability and performance.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">Manufacturing Process</h2>

          <div className="flex justify-center mt-3 mb-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
          <p className="text-light">
            We specialize in manufacturing high-quality plastic products
            designed to withstand industrial demands and enhance home
            organization.
          </p>
        </div>

        {/* Cards */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6">
          {features.map((item) => (
           <div
  key={item.id}
  className="relative bg-[#F3F4F6] p-6 pt-10 rounded-2xl card-hover transition"
>
  {/* Number Circle */}
 <div className="absolute -top-2 left-10 -translate-x-1/2 w-6 h-6 flex items-center justify-center bg-gradient-primary text-white text-[10px] font-medium rounded-full">
  {item.num}
</div>

  {/* Icon */}
  <div className="w-12 h-12 p-2 flex items-center justify-center bg-[#FF7A001A] rounded-lg mb-4">
    <img src={item.icon} alt="icon" className="w-5 h-5" />
  </div>

  <h3 className="font-semibold mb-2">{item.title}</h3>
  <p className="text-gray-500 text-sm">{item.desc}</p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
