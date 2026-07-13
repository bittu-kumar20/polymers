import g1 from "@assets/gallery/g1.png"
import g2 from "@assets/gallery/g2.png"
import g3 from "@assets/gallery/g3.png"
import g4 from "@assets/gallery/g4.png"

 const gallery = [
  { id: 1, image: g1 },
  { id: 2, image: g2 },
  { id: 3, image: g3 },
  { id: 4, image: g4 },
]

function Gallery() {
  return (

    <>
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center space-y-2 mb-10">

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Facility Gallery
            </h2>

              
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          
          </div>

          <button className="text-orange-500 text-sm ">
            View Full Gallery →
          </button>

        </div>

        {/* Images */}
        <div >
            <div className="grid items-center md:grid-cols-4 gap-20 px-6">

          {gallery.map((item) => (
            <img
              key={item.id}
              src={item.image}
              className="rounded-xl  shadow hover:scale-105 transition"
            />
          ))}
          </div>

        </div>

      </div>

    </section>

  

      </>
  )
}

export default Gallery