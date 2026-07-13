import bg from "@assets/gallery/p1.png";
import bg1 from "@assets/gallery/p2.png";
import bg2 from "@assets/gallery/p3.png";
import bg3 from "@assets/gallery/p4.png";
import bg4 from "@assets/gallery/p5.png";

const products = [
  {
    id: 1,
    title: "3.5 L PaintBucket",
    desc: "Industrial Grade Polymer",
    image: bg,
  },
  {
    id: 2,
    title: "4 L Paint Bucket",
    desc: "High-Density Polyethylene",
    image: bg1,
  },
  {
    id: 3,
    title: "5 L Paint Bucket",
    desc: "Custom Branding Available",
    image: bg2,
  },
  {
    id: 4,
    title: "16 L Paint Bucket ",
    desc: "Heavy Duty Reinforcement",
    image: bg3,
  },
  {
    id: 5,
    title: "20 L Paint Bucket",
    desc: "Max Capacity Storage",
    image: bg4,
  },
];

function IndustryRange() {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className=" mb-12">
          <h2 className="text-[#EC5B13] font-semibold">Industrial Solutions</h2>
          <h2 className="text-3xl pb-2 font-bold">Paint Bucket Products</h2>

          
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-1  md:grid-cols-5  justify-items-center gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="px-6  max-w-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4 sm:w-full"
              />

              <h3 className="text-[28px] md:text-[25px] font-semibold mb-2">{item.title}</h3>

              <p className="text-light text-sm mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryRange;
