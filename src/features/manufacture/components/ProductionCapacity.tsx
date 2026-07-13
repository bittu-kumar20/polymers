

const features = [
  {
    title: "Bulk Orders",
    desc: "Optimized for high-quantity runs",
    bg: "bg-[#FF7A001A]",
  },
  {
    title: "Custom Molds",
    desc: "Engineered for unique designs",
    bg: "bg-[#FF007A1A]",
  },
  {
    title: "Fast Turnaround",
    desc: "Rapid manufacturing cycles",
    bg: "bg-[#FF007A1A]",
  },
  {
    title: "Consistent Output",
    desc: "Precision in every batch",
    bg: "bg-[#FF7A001A]",
  },
];

const stats = [
  { value: "5M+", label: "Parts per Year", color: "text-orange-500" },
  { value: "50+", label: "Active Machines", color: "text-red-500" },
  { value: "24/7", label: "Support Cycle", color: "text-pink-500" },
  { value: "<1%", label: "Rejection Rate", color: "text-gray-800" },
];

export default function ProductionCapacity() {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-sm max-w-6xl w-full p-10 grid md:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Production <br /> Capacity
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-md mb-4"></div>

          <p className=" text-sm leading-relaxed mb-8">
            Whether it's a one-off prototype or high-volume recurring orders,
            our production lines are flexible enough to adapt to your specific
            timeline and volume needs.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className={`text-xl font-bold ${item.color}`}>
                  {item.value}
                </h3>
                <p className="text-light text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-5 flex flex-col justify-center`}
            >
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}