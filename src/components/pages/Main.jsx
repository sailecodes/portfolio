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
        <section className="main--hero">
          <p>Hi, I&apos;m Elias 👋</p>
          <p>an aspiring software engineer with a passion to use software as a medium to help others.</p>
        </section>
        <section className="main--about">
          <header className="main--section-header">About me</header>
          <p>
            I&apos;m a recent CS graduate from UC San Diego with a firm understanding of fundamental CS principles, such
            as algorithms, data structures, and software development practices. Moreover, I have adequate experience in
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam enim commodi omnis animi rerum ipsum!
            Nam debitis magni vitae id. Vitae dicta iste cum porro, perferendis quos molestias modi.
          </p>
        </section>
        <section className="main--projects">
          <header className="main--section-header">Projects</header>
          <div className="main--projects-container">
            <div className="main--projects-project">
              <header>
                Shoe Szn <span>January 2024</span>
              </header>
              <p></p>
            </div>
          </div>
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
