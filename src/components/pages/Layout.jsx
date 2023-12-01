import { Outlet } from "react-router-dom";

import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
