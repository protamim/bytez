import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import SubNav from "../../shared/Navbar/SubNav/SubNav";
import Footer from "@/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Main Navbar */}
      <Navbar />
      {/* Sub Navigation */}
      <SubNav />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
