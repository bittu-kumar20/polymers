import client1 from "@assets/clients/company1.png"
import client2 from "@assets/clients/company2.png"
import client3 from "@assets/clients/company3.png"
import client4 from "@assets/clients/company4.png"
import client5 from "@assets/clients/company5.png"

const clients = [
  { id: 1, logo: client1, name: "Client 1" },
  { id: 2, logo: client2, name: "Client 2" },
  { id: 3, logo: client3, name: "Client 3" },
  { id: 4, logo: client4, name: "Client 4" },
  { id: 5, logo: client5, name: "Client 5" },
]

function Clients() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className=" max-w-7xl  mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl text-light">
            Trusted by Paint Manufacturers and Industrial Customers Across Ethiopia
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee  gap-12">

            {[...clients, ...clients, ...clients].map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-25 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Clients