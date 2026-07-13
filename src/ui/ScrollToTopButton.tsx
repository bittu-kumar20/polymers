import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation(); // detect route change

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 👇 Show / Hide button on scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  // 👇 Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-500 transform
      ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
      `}
    >
      <IoIosArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;