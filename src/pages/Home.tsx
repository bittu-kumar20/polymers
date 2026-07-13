import Clients from "../features/home/components/Clients";
import { Feature } from "../features/home/components/Feature";
import Gallery from "../features/home/components/Gallery";
import Hero from "../features/home/components/Hero";



import Manufacturing from "../features/home/components/Manufacturing";
import ProductRange from "../features/home/components/ProductRange";
import SEO from "../ui/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Plastic Manufacturer in Ahmedabad - Modo Polymers" 
        description="Top-rated plastic and polymer manufacturer in Ahmedabad, Gujarat. Supplying high-quality domestic, household, and industrial plastic products across India." 
        keywords={["Plastic manufacturer in Ahmedabad", "Household plastic supplier Gujarat", "Industrial plastics India", "Modo Polymers PLC"]}
        url="https://modopolymersplc.com/"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Modo Polymers PLC",
            "image": "https://modopolymersplc.com/preview.jpg",
            "url": "https://modopolymersplc.com/",
            "telephone": "+91-9999999999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Changodar",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "382213",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://modopolymersplc.com/"
            }]
          }
        ]}
      />
      <div data-aos="fade-up" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <Clients />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ProductRange />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Manufacturing />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Feature />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Gallery />
      </div>
    </>
  );
}
