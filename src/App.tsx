import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import ScrollToTopButton from "./ui/ScrollToTopButton";
import Manufacture from "./pages/Manufacture";
import NotFound from "./pages/NotFound";
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <BrowserRouter>
        <MainLayout>
           <ScrollToTopButton/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manufacture" element={<Manufacture />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
