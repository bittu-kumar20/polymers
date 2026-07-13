


import Facility from "../features/about/components/Facility";
import { Hero } from "../features/about/components/Hero";
import Industry from "../features/about/components/Industry";
import Machine from "../features/about/components/Machine";
import { Mission } from "../features/about/components/Mission";
import { Strength } from "../features/about/components/Strength";






import SEO from "../ui/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - Modo Polymers | Plastic Manufacturer Ahmedabad" 
        description="Learn about the strength, mission, and facilities of Modo Polymers located in Ahmedabad, India. We deliver top-notch machinery and processes for polymer manufacturing." 
        keywords={["About Modo Polymers", "Polymer Manufacturing Facility", "Our Mission", "Plastic Manufacturer in Ahmedabad"]}
        url="https://modopolymersplc.com/about"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Modo Polymers",
            "description": "Learn about the strength, mission, and facilities of Modo Polymers."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://modopolymersplc.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://modopolymersplc.com/about" }
            ]
          }
        ]}
      />
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Machine/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Mission/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Strength/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Facility/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Industry/>
      </div>
      
     
    
     
    </>
  )
}