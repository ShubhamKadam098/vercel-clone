import Logo from "../Header/Logo";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Logo />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
