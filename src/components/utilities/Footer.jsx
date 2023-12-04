import styled from "styled-components";

const FooterWrapper = styled.footer`
  grid-row: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    color: var(--color-white);

    font-size: var(--font-sm-1);
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1264px) {
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Footer
      {/* <a
        href="https://github.com/sailecodes"
        target="_blank"
        rel="noopener noreferrer">
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/elias-roman-38440028b/"
        target="_blank"
        rel="noopener noreferrer">
        LinkedIn
      </a> */}
    </FooterWrapper>
  );
};
export default Footer;
