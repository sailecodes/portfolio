import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.nav`
  grid-row: 1;

  position: relative;

  background-color: var(--color-primary);
  color: var(--color-black);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 2rem;

  .navbar--logo {
    letter-spacing: -1px;

    font-size: var(--font-md-3);
    font-weight: 500;
  }

  .navbar--main-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a {
    font-size: var(--font-sm-3);
    font-weight: 500;
  }

  a.active {
    color: var(--color-blue);

    font-weight: 600;
  }

  @media (min-width: 769px) {
    .navbar--logo {
      font-size: var(--font-lg-1);
    }

    a {
      font-size: var(--font-sm-4);
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <p className="navbar--logo">elias</p>
      <div className="navbar--main-container">
        <NavLink
          to="/"
          end>
          Home
        </NavLink>
        <NavLink
          to="/projects"
          end>
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          end>
          Contact
        </NavLink>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
