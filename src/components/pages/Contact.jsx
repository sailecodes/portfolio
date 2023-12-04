import styled from "styled-components";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const ContactWrapper = styled.section`
  background-color: var(--color-secondary);
  color: var(--color-tertiary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  padding: 4rem 2rem;

  p:nth-child(1) {
    font-size: var(--font-md-1);
    font-weight: 500;
  }

  p:nth-child(2) {
    color: var(--color-quad);

    font-size: var(--font-sm-3);
  }

  .contact--texts,
  .contact--socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .contact--socials {
    gap: 3rem;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact--texts">
        <div className="contact--email">
          <p>Email</p>
          <p>eliasiv.codes@gmail.com</p>
        </div>
        <div className="contact--number">
          <p>Phone number</p>
          <p>1 (714)-721-7244</p>
        </div>
      </div>
      <div className="contact--socials">
        <a>
          <GithubIcon
            width="4rem"
            height="4rem"
          />
        </a>
        <a>
          <LinkedInIcon
            width="4rem"
            height="4rem"
          />
        </a>
      </div>
    </ContactWrapper>
  );
};
export default Contact;
