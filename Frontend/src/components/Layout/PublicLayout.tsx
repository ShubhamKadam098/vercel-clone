import Logo from "../Header/Logo";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Logo />
      <div className="flex-1 my-4">
        <Outlet />
      </div>
      <Toaster position="bottom-right" />
      <Footer />
    </div>
  );
};

export default PublicLayout;
