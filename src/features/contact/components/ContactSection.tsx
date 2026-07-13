import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import view from "@assets/contact/view.png";

function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Note: Replace these with your actual EmailJS credentials
  const SERVICE_ID = "service_nnium49";
  const TEMPLATE_ID = "template_o18wuh8";
  const PUBLIC_KEY = "lK-M7xYBumiOprOVu";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", { id: toastId });
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message: " + error.text, { id: toastId });
        }
      );
  };

  return (
    <section className="bg-[#FFFFFF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-15">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-200">
            {/* LEFT: FORM */}
            <div className="p-8 bg-[#FFFFFF]">
              <h2 className="text-[30px] font-bold mb-2">
                Send us an Inquiry
              </h2>

              <div className="w-20 h-1 rounded-md bg-linear-to-r from-orange-500 to-pink-500 mb-4"></div>

              <p className="text-[15px] text-gray-500 mb-6">
                Fill out the form below and our procurement team will get back
                to you within 24 hours.
              </p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      name="full_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none focus:border-orange-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none focus:border-orange-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Bulk Order Inquiry"
                    required
                    className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none focus:border-orange-400"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us more about your project requirements..."
                    required
                    className="w-full p-3 rounded-xl border border-orange-200 focus:outline-none focus:border-orange-400"
                  />
                </div>



                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-90 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-200">
            {/* RIGHT: IMAGE */}
            <div className="h-full">
              <img
                src={view}
                alt="support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
