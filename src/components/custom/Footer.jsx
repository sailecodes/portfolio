import styled from "styled-components";

const FooterWrapper = styled.footer`
  grid-row: 3;

  background-color: var(--color-black);
  color: var(--color-white);

  display: grid;
  place-items: center;

  font-size: var(--font-footer-text-sm);
  font-weight: 600;

  padding: 0 2rem;

  @media (min-width: 510px) {
    font-size: var(--font-footer-text-lg);
  }
`;

const Footer = () => {
  return <FooterWrapper>Copyright &copy; {new Date().getFullYear()}. All rights are reserved</FooterWrapper>;
};
export default Footer;
