
import machine from "@assets/factory/frame.png";


function Machine() {

  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src={machine}
            alt="Manufacturing Machine"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-sm text-primary font-semibold uppercase mb-3">
            Introduction
          </h3>

          <h2 className="text-3xl font-bold mb-4">
            Excellence in the heart of Addis Ababa
          </h2>

          <p className="text-light mb-6">
            Located in the prestigious Kaliti Industrial Area of Addis Ababa,
            Modo Polymers PLC specializes in high-precision plastic
            manufacturing.
          </p>

          {/* Stats */}
          <div className="flex gap-6">
            <div className="flex items-center gap-3 px-5 py-3 rounded-md">
              <div className="w-1 h-10 bg-gradient-primary"></div>
              <div>
                <h4 className="text-xl font-bold">2010</h4>
                <p className="text-gray-500 text-sm">Founded</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-md">
              <div className="w-1 h-10 bg-gradient-primary"></div>
              <div>
                <h4 className="text-xl font-bold">50+</h4>
                <p className="text-gray-500 text-sm">Industrial Partners</p>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  );
}

export default Machine;