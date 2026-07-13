import l1 from "@assets/gallery/buck.png";
import l2 from "@assets/gallery/box.png";
import l3 from "@assets/gallery/truck.png";



 const products = [
  {
    id: 1,
    title: "Inventory Management",
    desc: "Organized storage of various bucket sizes ready for distribution.",
    image: l1,
  },
  {
    id: 2,
    title: "Packing & Quality Check",
    desc: "Every batch undergoes rigorous quality inspection before dispatch.",
    image: l2,
  },
  {
    id: 3,
    title: "Global Distribution",
    desc: "Efficient logistics network serving domestic and international markets.",
    image: l3,
  },
]

function Logistic() {
  return (
    <section className="py-20 bg-[#f4f4f4]">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-8">
            <div className="space-y-2" >
          <h2 className="text-3xl font-bold">Finished Products <br /> & Logistics</h2>
           
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
         
            </div>
      

       <p className="max-w-lg text-[#FF7A00]">
            Our warehouse maintains a high volume of inventory to ensure rapid
            fulfillment for our industrial and retail partners.
          </p>
  </div>
        {/* Product Cards */}
        <div className="grid sm:grid-cols-1  md:grid-cols-3  justify-items-center gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl  shadow hover:shadow-lg transition max-w-sm"
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

             

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Logistic