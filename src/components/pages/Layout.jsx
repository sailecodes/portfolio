import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "../utilities/Navbar";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;

  height: 100vh;

  @media (min-width: 767px) {
  }

  @media (min-width: 1264px) {
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
