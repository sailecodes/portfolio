import styled from "styled-components";

const FooterWrapper = styled.footer`
  grid-row: 3;

  background-color: var(--color-black);
  color: var(--color-white);

  display: grid;
  place-items: center;

  font-weight: 600;

  @media (min-width: 767px) {
  }
`;

const Footer = () => {
  return <FooterWrapper>Copyright &copy; {new Date().getFullYear()}. All rights are reserved</FooterWrapper>;
};
export default Footer;
