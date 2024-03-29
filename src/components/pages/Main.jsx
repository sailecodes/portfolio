import { motion, useAnimationControls, useInView } from "framer-motion";
import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";

import "../../assets/sass/main.scss";
import { projects_new } from "../../data/projects";
import { useEffect, useRef } from "react";

const Main = () => {
  const hero = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const credit = useRef(null);

  const heroInView = useInView(hero);
  const aboutInView = useInView(about);
  const projectsInView = useInView(projects);
  const creditInView = useInView(credit, { amount: 0.25 });

  return (
    <main className="main">
      <nav className="main--nav">
        <motion.div
          className="main--nav-marker"
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: heroInView ? "#9c9faa" : "#202740" }}
        />
        <motion.div
          className="main--nav-marker"
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: !heroInView && aboutInView ? "#9c9faa" : "#202740" }}
        />
        <motion.div
          className="main--nav-marker"
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: !aboutInView && projectsInView && !creditInView ? "#9c9faa" : "#202740" }}
        />
        <motion.div
          className="main--nav-marker"
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: creditInView ? "#9c9faa" : "#202740" }}
        />
        {/* {Array.from(Array(4)).map((_, ind) => (
          <motion.div
            key={ind}
            className="main--nav-marker"
            whileHover={{ scale: 1.4, cursor: "pointer", color: "#e6e7ea" }}
            transition={{ duration: 0.3 }}
          />
        ))} */}
      </nav>
      <div>
        <section
          className="main--hero"
          ref={hero}>
          <p>Hi, I&apos;m Elias 👋</p>
          <p>an aspiring software engineer with a passion to use software as a medium to help others.</p>
          <div>
            <a
              href="https://www.linkedin.com/in/elias-iv-roman/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/sailecodes"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub size={22} />
            </a>
          </div>
        </section>
        <section
          className="main--about"
          ref={about}>
          <header className="main--section-header">About me</header>
          <p>
            I&apos;m a recent CS graduate from UC San Diego with a firm understanding of fundamental CS principles, such
            as algorithms, data structures, and software development practices. Moreover, I have extensive experience in
            code documentation, version control, collaborative team projects, and several languages, such as Java and
            JavaScript. I&apos;ve also tackled several personal projects that focus on full-stack development.
          </p>
        </section>
        <section
          className="main--projects"
          ref={projects}>
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
        <section
          className="main--credit"
          ref={credit}>
          <header className="main--section-header">Credit</header>
          Inspired by Brittany Chiang&apos;s beautiful{" "}
          <a
            href="https://brittanychiang.com/?ref=hackernoon.com"
            target="_blank"
            rel="noopener noreferrer">
            portfolio
          </a>
          . Built with <span>React.js</span>, designed with <span>Sass</span>, animated with <span>Framer Motion</span>,
          and deployed on <span>Netlify</span>.
        </section>
      </div>
    </main>
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
        {skills.map((skill, ind) => (
          <p key={`${title} ${skill} ${ind}`}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Main;