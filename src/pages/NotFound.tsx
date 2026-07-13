// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import SEO from "../ui/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <SEO 
        title="404 - Page Not Found | Modo Polymers PLC" 
        description="The page you are looking for doesn't exist. Return to Modo Polymers home for high-quality plastic and polymer solutions." 
      />
      
      {/* Animated 404 Illustration */}
      <div 
        data-aos="fade-down" 
        className="text-9xl font-extrabold tracking-widest text-[#FF007A] opacity-20 select-none mb-8"
      >
        404
      </div>

      <div data-aos="fade-up" className="z-10 -mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Something's Missing...
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been moved, deleted, or never existed in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-8 py-3 bg-linear-to-r from-[#FF7A00] via-[#FF4A4A] to-[#FF007A] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-lg"
          >
            Back to Home
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-[#FF4A4A] border-2 border-[#FF4A4A] rounded-xl font-bold hover:bg-gray-50 transition-all text-lg"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
