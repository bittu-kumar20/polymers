import machine from "@assets/factory/machine.png"


 const manufacturingFeatures = [
  {
    id: 1,
    title: "Modern Machinery",
    desc: "High-precision European and Asian manufacturing equipment.",
  },
  {
    id: 2,
    title: "Modern Machinery",
    desc: "High-precision European and Asian manufacturing equipment.",
  },
  {
    id: 3,
    title: "Modern Machinery",
    desc: "High-precision European and Asian manufacturing equipment.",
  },
]

function Manufacturing() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src={machine}
            alt="Manufacturing Machine"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Advanced Manufacturing Capabilities
          </h2>

          <p className="text-gray-500 mb-6">
            Our facility in Addis Ababa is equipped with the latest injection
            molding technology to ensure high-speed production without
            compromising on quality standards.
          </p>

          <div className="space-y-5">

            {manufacturingFeatures.map((item) => (
              <div key={item.id} className="flex gap-3">

                <span className="text-orange-500 text-lg">✔</span>

                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Manufacturing