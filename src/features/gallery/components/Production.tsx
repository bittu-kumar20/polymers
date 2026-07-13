import pro from "@assets/factory/con1.png";
import pro1 from "@assets/factory/cont2.png";
import pro2 from "@assets/factory/cont3.png";
import pro3 from "@assets/factory/contain3.png";
import pro4 from "@assets/factory/cont4.png";
import pro5 from "@assets/factory/cont5.png";
import machineIcon from "@assets/factory/ic.png"
import machineIcon1 from "@assets/factory/ic1.png"

function Production() {
  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="flex items-center  gap-2 font-semibold text-lg">
                 <img
                src={machineIcon}
                alt="icon"
                className="w-4 h-4 "
              />
              <h2>Factory Production</h2>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <img src={pro} className="w-1/2 h-50 object-cover rounded-xl" />
                <img
                  src={pro1}
                  className="w-1/2 h-50 object-cover rounded-xl"
                />
              </div>

              <img src={pro2} className="w-full h-45 object-cover rounded-xl" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="flex items-center gap-2 font-semibold text-lg">
                   <img
                src={machineIcon1}
                alt="icon"
                className="w-4 h-4 "
              />
              <h2>Advanced Machinery</h2>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <img src={pro3} className="w-full h-45 object-cover rounded-xl" />

              <div className="flex gap-4">
                <img
                  src={pro4}
                  className="w-1/2 h-50 object-cover rounded-xl"
                />
                <img
                  src={pro5}
                  className="w-1/2 h-50 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Production;
