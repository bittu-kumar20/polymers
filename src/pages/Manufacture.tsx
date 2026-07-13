import Hero from "../features/manufacture/components/Hero";
import MachineryTechnology from "../features/manufacture/components/MachineryTechnology";
import { Modern } from "../features/manufacture/components/Modern";
import { Process } from "../features/manufacture/components/Process";
import ProductionCapacity from "../features/manufacture/components/ProductionCapacity";
import { Quality } from "../features/manufacture/components/Quality";

import SEO from "../ui/SEO";

export default function Manufacture() {
  return (
    <>
      <SEO 
        title="Manufacturing Process - Plastic Supplier in Ahmedabad" 
        description="Discover our state-of-the-art machinery, modern technology, quality production, and process capacity at Modo Polymers in Gujarat." 
        keywords={["Manufacturing Process", "Polymer Machinery", "Production Capacity", "Quality Check India", "Plastic manufacturing machinery Ahmedabad"]}
        url="https://modopolymersplc.com/manufacture"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Manufacturing Process - Modo Polymers",
            "description": "State-of-the-art machinery and manufacturing process."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://modopolymersplc.com/" },
              { "@type": "ListItem", "position": 2, "name": "Manufacture", "item": "https://modopolymersplc.com/manufacture" }
            ]
          }
        ]}
      />
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Modern/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <MachineryTechnology/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Process/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ProductionCapacity/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Quality/>
      </div>
      
    </>
  );
}
