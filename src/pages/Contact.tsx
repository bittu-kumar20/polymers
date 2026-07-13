import ContactSection from "../features/contact/components/ContactSection";
import Faq from "../features/contact/components/Faq";
import Hero from "../features/contact/components/Hero";
import { Section } from "../features/contact/components/Section";

import SEO from "../ui/SEO";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Modo Polymers - Plastic Supplier in Ahmedabad" 
        description="Contact Modo Polymers in Ahmedabad, Gujarat for business inquiries concerning plastic products, industrial materials, and manufacturing capabilities." 
        keywords={["Contact Modo Polymers", "Plastic Manufacturer Contact India", "Polymer Supplier Phone Number Gujarat"]}
        url="https://modopolymersplc.com/contact"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Modo Polymers",
            "url": "https://modopolymersplc.com/contact"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://modopolymersplc.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://modopolymersplc.com/contact" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is Modo Polymers located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Modo Polymers is located in Ahmedabad, Gujarat, India."
                }
              },
              {
                "@type": "Question",
                "name": "What type of plastic products do you manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We manufacture a wide range of domestic, household, and industrial plastic products."
                }
              }
            ]
          }
        ]}
      />
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Section />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ContactSection />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Faq />
      </div>
    </>
  );
}
