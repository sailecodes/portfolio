import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

import ContactWrapper from "../../assets/wrappers/ContactWrapper";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact--container">
        <div className="contact--email">
          <MdEmail />
          <div>
            <p>Email</p>
            <p>eliasiv.roman@gmail.com</p>
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
