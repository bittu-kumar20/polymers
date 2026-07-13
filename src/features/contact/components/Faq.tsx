import { useState } from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const faqData = [
  {
    id: 1,
    question: "What is the minimum order quantity?",
    answer:
      "Standard production cycles range from 7 to 14 business days depending on order volume and customization requirements.",
  },
  {
    id: 2,
    question: "What is the minimum order quantity?",
    answer:
      "Standard production cycles range from 7 to 14 business days depending on order volume and customization requirements.",
  },
  {
    id: 3,
    question: "What is the minimum order quantity?",
    answer:
      "Standard production cycles range from 7 to 14 business days depending on order volume and customization requirements.",
  },
  {
    id: 4,
    question: "What is the minimum order quantity?",
    answer:
      "Standard production cycles range from 7 to 14 business days depending on order volume and customization requirements.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(4); // last one open like UI

  return (
    <section className="py-20 bg-linear-to-b from-[#FFF5ED] to-[#F8F9F8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-orange-500 rounded-md"></div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-orange-200 overflow-hidden"
            >
              {/* Header */}
              <div
                onClick={() =>
                  setOpen(open === item.id ? null : item.id)
                }
                className="flex items-center justify-between p-5 cursor-pointer"
              >
                <p className="text-sm  font-semibold text-gray-800">
                  {item.question}
                </p>

                <div className="text-orange-500">
                  {open === item.id ? (
                    <BiChevronUp size={22} />
                  ) : (
                    <BiChevronDown size={22} />
                  )}
                </div>
              </div>

              {/* Content */}
              {open === item.id && (
                <div className="border-t border-orange-100 p-6 grid md:grid-cols-3 gap-6 items-center">
                  {/* Image */}
                

                  {/* Text */}
                  <p className="md:col-span-4 text-sm text-gray-600">
                    {item.answer}
                    </p>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;