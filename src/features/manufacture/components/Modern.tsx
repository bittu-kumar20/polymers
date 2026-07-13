import machineIcon from "@assets/manufacture/vc1.png";
import machineIcon1 from "@assets/manufacture/vc2.png";
import machineIcon2 from "@assets/manufacture/vc3.png";
import machineIcon3 from "@assets/manufacture/vc4.png";
import machineIcon4 from "@assets/manufacture/vc5.png";

const features = [
  {
    id: 1,
    icon: machineIcon,
    title: "Modern Machines",
    desc: "Equipped with latest German injection technology.",
  },
  {
    id: 2,
    icon: machineIcon1,
    title: "High Capacity",
    desc: "Producing over 1 million units annually.",
  },
  {
    id: 3,
    icon: machineIcon2,
    title: "Skilled Team",
    desc: "Expert engineers and technicians.",
  },
  {
    id: 4,
    icon: machineIcon3,
    title: "Efficient Workflow",
    desc: "Lean manufacturing processes.",
  },
  {
    id: 5,
    icon: machineIcon4,
    title: "Safe Environment",
    desc: "Zero-accident safety culture.",
  },
];

export function Modern() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Built for Scale, Optimized for Safety
          </h2>

          <div className="flex justify-center mt-3 mb-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
  {features.map((item) => (
    <div
      key={item.id}
      className="bg-[#F3F4F6] w-full border border-secondary p-6 rounded-2xl card-hover transition"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-gradient-primary rounded-lg mb-4">
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
