import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-sky-100">
      <Navbar />
      <div className="min-h-[calc(100vh-116px)] flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
