import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "../custom/Navbar";
import Footer from "../custom/Footer";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 7rem 1fr 5rem;

  height: 100vh;
`;

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
