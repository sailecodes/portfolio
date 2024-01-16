import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const ContactWrapper = styled.main`
  background-color: var(--color-main-bg);
  color: var(--color-black);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  padding: 4rem 2rem;

  .contact--container {
    display: flex;
    flex-direction: column;

    gap: 5rem;
  }

  p:nth-child(1) {
    font-size: 2rem;
    font-weight: 500;
  }

  p:nth-child(2) {
    color: var(--color-gray);

    font-size: 1.4rem;
  }

  .contact--email,
  .contact--number {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact--email svg,
  .contact--number svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (min-width: 510px) {
    p:nth-child(1) {
      font-size: 2.2rem;
    }

    p:nth-child(2) {
      font-size: 1.6rem;
    }

    .contact--email svg,
    .contact--number svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  @media (min-width: 860px) {
    .contact--container {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact--container">
        <div className="contact--email">
          <MdEmail />
          <div>
            <p>Email</p>
            <p>eliasiv.codes@gmail.com</p>
          </div>
        </div>
        <div className="contact--number">
          <MdLocalPhone />
          <div>
            <p>Phone number</p>
            <p>1 (714)-721-7244</p>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};
export default Contact;
