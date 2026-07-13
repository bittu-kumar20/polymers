import pro1 from "@assets/products/pro1.png";
import pro2 from "@assets/products/pro2.png";

const products = [
  {
    id: 1,
    title: "Paint Bucket Range",
    desc: "Heavy-duty containers for industrial coatings and paints.",
    image: pro1,
  },
  {
    id: 2,
    title: "Household Plastic Products",
    desc: "Ergonomic and colorful plastic solutions for every home.",
    image: pro2,
  },
];

function ProductSection() {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Product Categories</h2>

           <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
          <p className="text-light text-[22px]">
            Explore our diverse range of high-performance plastic solutions
            designed for both industrial and domestic excellence.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-1  md:grid-cols-2  justify-items-center gap-20">
          {products.map((item) => (
            <div
              key={item.id}
              className="card-hover cursor-pointer"
            >
              
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-xl "
              />
              
  <div  className="bg-white p-6  shadow hover:shadow-lg  rounded-b-xl">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-light text-sm mb-4">{item.desc}</p>
              <div className="w-12 h-1 bg-primary rounded"></div>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
