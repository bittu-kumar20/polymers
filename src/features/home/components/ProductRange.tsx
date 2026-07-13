import bucket1 from "@assets/products/buck.png";
import bucket from "@assets/products/polish.png";
// import bg from "./assets/products/Background.png";
import bg from "@assets/products/nut.png";
import { Link } from "react-router-dom";


 const products = [
  {
    id: 1,
    title: "Paint Buckets",
    desc: "Heavy-duty industrial grade buckets ranging from 1L to 20L with secure airtight seals.",
    image: bucket1,
  },
  {
    id: 2,
    title: "Household Products",
    desc: "Daily use items including containers, crates, and storage solutions for modern homes..",
    image: bucket,
  },
  {
    id: 3,
    title: "Custom Injection Molded",
    desc: "Tailor-made industrial solutions based on your specific requirements and molds.",
    image: bg,
  },
]

function ProductRange() {
  return (
    <section className="py-20 bg-[#f4f4f4]">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Product Range</h2>

          <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-1  md:grid-cols-3  justify-items-center gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow card-hover transition max-w-sm"
            >

              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4"
              />

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-light text-sm mb-4">
                {item.desc}
              </p>

              <Link to="/products" className="text-primary font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
                Explore Category →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ProductRange