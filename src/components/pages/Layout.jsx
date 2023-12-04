import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;

  height: 100vh;

  @media (min-width: 822px) {
  }
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
