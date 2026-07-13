import Domestic from "../features/product/components/Domestic";
import Hero from "../features/product/components/Hero";
import HouseHold from "../features/product/components/Household";
import ProductSection from "../features/product/components/ProductSection";








import SEO from "../ui/SEO";

export default function Product() {
  return (
    <>
      <SEO 
        title="Household Plastic Product Supplier Gujarat - Modo Polymers" 
        description="We are a leading supplier of household and domestic plastic products in Gujarat, India. Browse our high-quality polymer products." 
        keywords={["Household plastic supplier Gujarat", "Domestic plastic products Ahmedabad", "Plastic items manufacturer India", "Modo Polymers Products"]}
        url="https://modopolymersplc.com/products"
        schemas={[
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Household & Domestic Plastics",
            "image": "https://modopolymersplc.com/preview.jpg",
            "description": "High-quality household and domestic plastic products manufactured in Ahmedabad.",
            "brand": {
              "@type": "Brand",
              "name": "Modo Polymers PLC"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "125"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://modopolymersplc.com/" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://modopolymersplc.com/products" }
            ]
          }
        ]}
      />
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ProductSection/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Domestic/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <HouseHold/>
      </div>
     
    </>
  )
}