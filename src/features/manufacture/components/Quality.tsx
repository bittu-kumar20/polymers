import machineIcon from "@assets/manufacture/icon1.png";
import machineIcon1 from "@assets/manufacture/icon.png";
import machineIcon2 from "@assets/manufacture/icon4.png";
import machineIcon3 from "@assets/manufacture/icon.png";
import machineIcon4 from "@assets/manufacture/icon3.png";

const features = [
  {
    id: 1,
    icon: machineIcon,
    title: "Raw Material Check",
    desc: "Purity and moisture content verification before processing starts.",
  },
  {
    id: 2,
    icon: machineIcon1,
    title: "Mold Accuracy",
    desc: "Micrometer-precision measurements to ensure design fidelity.",
  },
  {
    id: 3,
    icon: machineIcon2,
    title: "Product Strength",
    desc: "Destructive and non-destructive stress testing for durability..",
  },
  {
    id: 4,
    icon: machineIcon3,
    title: "Surface Finish",
    desc: "Visual and haptic inspection for cosmetic excellence.",
  },
  {
    id: 5,
    icon: machineIcon4,
    title: "Final Batch Verification",
    desc: "A comprehensive audit of the entire production batch before dispatch to ensure 100% compliance with client specifications.",
  },
   
];



export function Quality() {
  const firstThree = features.slice(0, 4);
const lastTwo = features.slice(4, 5);


  
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Quality Control & Assurance
          </h2>

          <div className="flex justify-center mt-3 mb-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Cards */}
       <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
  {firstThree.map((item) => (
    <div
      key={item.id}
      className="bg-[#F3F4F6] p-6 rounded-2xl card-hover transition"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[#FF7A001A] rounded-lg mb-4">
        <img src={item.icon} alt="icon" className="w-5 h-5" />
      </div>

      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm">{item.desc}</p>
    </div>
  ))}

  {/* 5th card full width */}
  {lastTwo.map((item) => (
    <div
      key={item.id}
      className="bg-[#F3F4F6] p-6 rounded-2xl card-hover transition sm:col-span-1 md:col-span-2 lg:col-span-2"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[#FF7A001A] rounded-lg mb-4">
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
