import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const ContactWrapper = styled.main`
  background-color: var(--color-secondary);
  color: var(--color-tertiary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  padding: 4rem 2rem;

  p:nth-child(1) {
    font-size: var(--font-sm-4);
    font-weight: 500;
  }

  p:nth-child(2) {
    color: var(--color-quad);

    font-size: var(--font-sm-2);
  }

  .contact--texts {
    display: flex;
    flex-direction: column;

    gap: 5rem;
  }

  .contact--email,
  .contact--number {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 510px) {
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

    .contact--texts {
      display: flex;
      flex-direction: column;

      gap: 5rem;
    }

    .contact--email,
    .contact--number {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .contact--texts {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact--texts">
        <div className="contact--email">
          <MdEmail size={40} />
          <div>
            <p>Email</p>
            <p>eliasiv.codes@gmail.com</p>
          </div>
        </div>
        <div className="contact--number">
          <MdLocalPhone size={40} />
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
