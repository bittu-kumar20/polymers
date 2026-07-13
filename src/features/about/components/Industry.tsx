import container from "@assets/products/cont.png";
import container1 from "@assets/products/cont1.png";
import container2 from "@assets/products/cont2.png";
import container3 from "@assets/products/cont3.png";

const products = [
  {
    id: 1,
    title: "Paint Manufacturers",
    desc: "Durable industrial-grade buckets and containers for various finishes.",
    image: container,
  },
  {
    id: 2,
    title: "Consumer Market",
    desc: "High-quality household items designed for durability and utility..",
    image: container1,
  },
  {
    id: 3,
    title: "Construction Companies",
    desc: "Essential plastic components and materials for building projects.",
    image: container2,
  },
  {
    id: 4,
    title: "Packaging Industry",
    desc: "Versatile packaging solutions for food, chemicals, and goods.",
    image: container3,
  },
];

function Industry() {
  return (
    <>
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12 text-center md:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Industries We Serve
            </h2>

            <div className="w-20 sm:w-15 h-1 bg-gradient-primary mx-auto md:mx-0 rounded-md"></div>

            <p className="text-base sm:text-lg lg:text-xl text-light max-w-2xl">
              Our specialized plastic products power growth across Ethiopia's
              key economic sectors.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500 max-w-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 transform transition-transform duration-500 hover:scale-105"
                />

                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>

                <p className="text-light text-sm mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Industry;