import h1 from "@assets/household/h1.png"
import h2 from  "@assets/household/h2.png"
 import h3 from "@assets/household/h3.png"
import h4 from "@assets/household/h4.png"
import h5 from "@assets/household/h5.png"
import h6 from "@assets/household/h6.png"
import h7 from "@assets/household/h7.png"
import h8 from "@assets/household/h8.png"


 const products = [
  {
    id: 1,
    title: "Plastic Stool",
     image: h1,
  },
  {
    id: 2,
    title: "Shopping Basket",
    image: h2,
  },
 {
    id: 3,
    title: "Plastic Basin",
    image: h3,
  },
   {
    id: 4,
    title: "Waste Paper Basket",
    image: h4,
  },
    {
    id: 1,
    title: "Water Bucket",
     image: h5,
  },
  {
    id: 2,
    title: "Sugar Can",
    image: h6,
  },
 {
    id: 3,
    title: "Plastic Jug",
    image: h7,
  },
   {
    id: 4,
    title: "Plastic Glass",
    image: h8,
  },
]

function HouseHold() {
  return (
    <section className="py-20 bg-[#f4f4f4]">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Household Plastic Products</h2>

           <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>
          <p>Durable essentials for everyday home life</p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-1  md:grid-cols-4  justify-items-center gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className=" p-6  transition max-w-sm"
            >

              <img
                src={item.image}
                alt={item.title}
                className="rounded-md mb-4"
              />

              <h3 className="text-[18px] lg:text-[22px] text-center font-semibold mb-2">
                {item.title}
              </h3>

           

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HouseHold