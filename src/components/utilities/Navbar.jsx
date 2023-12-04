import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarWrapper = styled.nav`
  position: relative;

  background-color: var(--color-primary);
  color: var(--color-black);

  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 2rem;

  a {
    font-size: var(--font-sm-3);
    font-weight: 500;
  }

  a.active {
    color: var(--color-blue);

    font-weight: 600;
  }

  .navbar--logo {
    width: 7rem;
    letter-spacing: -1px;

    font-size: var(--font-md-3);
    font-weight: 500;
  }

  > a:last-child {
    background-color: var(--color-primary-3);

    display: grid;
    place-items: center;

    font-weight: 600;

    width: 8rem;
    height: 3rem;
    border-radius: 5px;

    transition: background-color 0.3s;
  }

  > a:last-child:hover {
    background-color: var(--color-primary-2);
  }

  .navbar--main-container,
  .navbar--social-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .navbar--social-container {
    width: 7rem;
  }

  .navbar--social-container > a {
    display: grid;
    place-items: center;
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1264px) {
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
      <div className="navbar--social-container">
        <a
          href="https://github.com/sailecodes"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/elias-roman-38440028b/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
