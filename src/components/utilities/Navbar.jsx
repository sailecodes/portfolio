import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarWrapper = styled.nav`
  position: relative;

  background-color: var(--color-primary-4);
  color: var(--color-white);

  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 2rem;

  a {
    font-size: var(--font-sm-1);
  }

  a.active {
    color: var(--color-primary-0);

    font-weight: 600;
  }

  p {
    font-size: var(--font-md-2);

    width: 6.5rem;
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
    width: 6.5rem;
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
      <p>IV</p>
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
      </div>
      <div className="navbar--social-container">
        <a
          href="https://github.com/sailecodes"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub size={21} />
        </a>
        <a
          href="https://www.linkedin.com/in/elias-roman-38440028b/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={21} />
        </a>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
