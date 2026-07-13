
import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Header";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;