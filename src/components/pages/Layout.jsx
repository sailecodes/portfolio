import { Outlet } from "react-router-dom";

import LayoutWrapper from "../../assets/wrappers/LayoutWrapper";
import Navbar from "../custom/Navbar";
import Footer from "../custom/Footer";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
