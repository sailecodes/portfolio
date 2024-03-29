import { motion } from "framer-motion";
import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";

import "../../assets/sass/main.scss";
import JavaIcon from "../icons/JavaIcon";
import JavaScriptIcon from "../custom/icons/JavaScriptIcon";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import ReactIcon from "../icons/ReactIcon";
import NodeIcon from "../icons/NodeIcon";
import { projects_new } from "../../data/projects";

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
          <div>
            <FaLinkedin size={22} />
            <FaGithub size={22} />
          </div>
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
          <div>
            {projects_new.map((project, ind) => (
              <Project
                key={ind}
                date={project.date}
                title={project.title}
                links={project.links}
                intro={project.intro}
                description={project.description}
                skills={project.skills}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const Project = ({ date, title, links, intro, description, skills }) => {
  return (
    <div className="main--projects-project">
      <p className="main--projects-project-date">{date}</p>
      <div className="main--projects-project-title">
        <p>{title}</p>
        <div>
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
          {links[1] !== "#" && (
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer">
              <FaTelegramPlane size={22} />
            </a>
          )}
        </div>
      </div>
      <p className="main--projects-project-description">
        <span>{intro}</span>
        {description}
      </p>
      <div className="main--projects-project-skills">
        {skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Main;
