import { IoIosArrowForward } from "react-icons/io";
import h1 from "@assets/household/d1.png";
import h2 from "@assets/household/d2.png";
import h3 from "@assets/household/d3.png";
import h4 from "@assets/household/d4.png";
import h5 from "@assets/household/d5.png";
import h6 from "@assets/household/d6.png";
import h7 from "@assets/household/d7.png";
import h8 from "@assets/household/d8.png";

const products = [
  {
    id: 1,
    title: "Modern Stool",
    image: h1,
  },
  {
    id: 2,
    title: "Laundry Basket",
    image: h2,
  },
  {
    id: 3,
    title: "Multi-use Basin",
    image: h3,
  },
  {
    id: 4,
    title: "Waste  Basket",
    image: h4,
  },
  {
    id: 5,
    title: "Water Bucket",
    image: h5,
  },
  {
    id: 6,
    title: "Sugar Can",
    image: h6,
  },
  {
    id: 7,
    title: "Water Jug",
    image: h7,
  },
  {
    id: 8,
    title: "Plastic Glass Set",
    image: h8,
  },
];

function HouseHold() {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold">Household Products</h2>
            <p className="text-gray-500">
              Everyday essentials crafted with durability in mind.
            </p>
          </div>

          {/* Right Side */}
          <button className="flex gap-2 items-center rounded-md text-primary hover:text-pink-600 transition-colors duration-300">
            View Collection
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-2">
          {products.map((item) => (
            <div
              key={item.id}
              className="p-6 w-full md:max-w-sm shadow-md rounded-xl bg-white
                         transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4 w-full transform transition-transform duration-500 hover:scale-105"
              />

              <h3 className="text-[18px] lg:text-[22px] text-center font-semibold mb-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HouseHold;