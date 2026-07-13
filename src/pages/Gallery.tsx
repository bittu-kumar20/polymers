import Hero from "../features/gallery/components/Hero";
import HouseHold from "../features/gallery/components/Household";
import IndustryRange from "../features/gallery/components/Industry";
import Logistic from "../features/gallery/components/Logistic";
import Production from "../features/gallery/components/Production";








import SEO from "../ui/SEO";

export default function Gallery() {
  return (
    <>
      <SEO 
        title="Gallery - Modo Polymers Gujarat" 
        description="View our gallery to see our production processes, logistics, household, and industrial capabilities in Gujarat." 
        keywords={["Modo Polymers Gallery", "Production Images", "Logistics Images", "Gujarat Factory Images"]}
        url="https://modopolymersplc.com/gallery"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://modopolymersplc.com/" },
              { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://modopolymersplc.com/gallery" }
            ]
          }
        ]}
      />
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <IndustryRange/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <HouseHold/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Production/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Logistic/>
      </div>
     
    </>
  )
}
