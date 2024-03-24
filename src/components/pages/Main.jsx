import { motion } from "framer-motion";
import "../../assets/sass/main.scss";
import JavaIcon from "../icons/JavaIcon";
import JavaScriptIcon from "../custom/icons/JavaScriptIcon";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import ReactIcon from "../icons/ReactIcon";
import NodeIcon from "../icons/NodeIcon";

const Main = () => {
  return (
    <div className="main--container">
      <nav className="main--nav">
        {Array.from(Array(3)).map((_, ind) => (
          <motion.div
            key={ind}
            whileHover={{ scale: 1.2, cursor: "pointer" }}
            transition={{ duration: 0.3 }}
            className="main--nav-marker"
          />
        ))}
      </nav>
      <main className="main--content">
        <header className="main--header">elias.</header>
        <section className="main--hero">
          An aspiring software engineer with a passion to use software as a medium to help others.
        </section>
        <section className="main--skills">
          <header className="main--skills-header">Skills</header>
          <div className="main--skills-icons">
            <HtmlIcon />
            <CssIcon />
          </div>
        </section>
        <section className="main--projects"></section>
        <section className="main--contact"></section>
      </main>
    </div>
  );
};
export default Main;
