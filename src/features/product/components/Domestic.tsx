import { useState } from "react";
import bucket from "@assets/household/left.png";
import icon from "@assets/household/1.png";
import icon1 from "@assets/household/2.png";
import icon2 from "@assets/household/3.png";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../../../ui/Button";

const products = [
  {
    id: 1,
    img: icon,
    title: "3 Liter Paint Bucket",
    capacity: "3.5L",
  },
  {
    id: 2,
    img: icon1,
    title: "4 Liter Paint Bucket",
    capacity: "4L",
  },
  {
    id: 3,
    img: icon2,
    title: "5 Liter Paint Bucket",
    capacity: "5L",
  },
  {
    id: 4,
    img: icon2,
    title: "16 Liter Paint Bucket",
    capacity: "16L",
  },
  {
    id: 5,
    img: icon2,
    title: "20 Liter Paint Bucket",
    capacity: "20L",
  },
];

function Domestic() {
 const [open, setOpen] = useState<number | null>(1);

  return (
    <>
      <section className="py-20 bg-linear-to-b from-[#FFF5ED] to-[#F8F9F8]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800">
              Industrial & Domestic Solutions
            </h2>

             <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-gradient-primary rounded-md"></div>
          </div>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We specialize in manufacturing high-quality plastic products
              designed to withstand industrial demands and enhance home
              organization.
            </p>
          </div>

          {/* Product Accordion */}
          <div className="space-y-4">
            {products.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm ">
                {/* Accordion Header */}
                <div
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className="flex items-center justify-between p-5 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
                      <img src={item.img} className="w-full max-w-50" />
                    </div>

                    <div>
                      <p className="text-xs text-orange-500 font-semibold">
                        INDUSTRIAL GRADE
                      </p>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="flex items-center gap-6">
                    {/* Capacity */}
                    <div className="text-right">
                      <p className="text-xs text-light uppercase tracking-wider">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold ">{item.capacity}</p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="text-[#FF7A00]">
                      {open === item.id ? (
                        <BiChevronUp size={20} />
                      ) : (
                        <BiChevronDown size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Accordion Content */}
                {open === item.id && (
                  <div className=" grid md:grid-cols-3 gap-8 p-6">
                    {/* Image */}
                    <div>
                      <img src={bucket} className="w-full max-w-70" />
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-primary mb-5">
                        3.5 Liter Paint Bucket
                      </h4>

                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Durable design
                        </li>

                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Suitable for filling
                        </li>

                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Industrial strength
                        </li>

                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Heat resistant
                        </li>

                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Rust proof coating
                        </li>

                        <li className="flex items-center gap-2">
                          <AiOutlineCheckCircle className="text-orange-500 text-lg" />
                          Easy handling
                        </li>
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    <div className="px-4">
                      <h4 className="font-semibold mb-3 ">
                        TECHNICAL SPECIFICATIONS
                      </h4>

                      <div className="text-sm text-light space-y-6">
                        <p className="flex justify-between">
                          <span className="text-light">Material</span>
                          <span className="font-semibold text-[#1A1A1A]">
                            High Impact Plastic
                          </span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-light">Weight</span>
                          <span className="font-semibold text-[#1A1A1A]">120g</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-light">Lid Type</span>
                          <span className="font-semibold text-[#1A1A1A]">
                            Screw Tight Ring Lid
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-center py-8">

                         <Button className="">Request Quote</Button>
                      </div>

                     
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Domestic;
