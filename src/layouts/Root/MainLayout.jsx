import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import SubNav from "../../shared/Navbar/SubNav/SubNav";

const MainLayout = () => {
  return (
    <>
      {/* Main Navbar */}
      <Navbar />
      {/* Sub Navigation */}
      <SubNav />
      {/* // Main Content start */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
