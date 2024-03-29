import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";

import "../../assets/sass/main.scss";
import { projects_new } from "../../data/projects";

const Main = () => {
  const hero = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const credit = useRef(null);

  const heroInView = useInView(hero);
  const aboutInView = useInView(about);
  const projectsInView = useInView(projects);
  const creditInView = useInView(credit);

  return (
    <main className="main">
      <nav className="main--nav">
        <NavMarker
          href="#hero"
          style={{ backgroundColor: heroInView ? "#9c9faa" : "#202740", transition: "background-color 0.2s" }}
        />
        <NavMarker
          href="#about"
          style={{
            backgroundColor: !heroInView && aboutInView ? "#9c9faa" : "#202740",
            transition: "background-color 0.2s",
          }}
        />
        <NavMarker
          href="#projects"
          style={{
            backgroundColor: !aboutInView && projectsInView && !creditInView ? "#9c9faa" : "#202740",
            transition: "background-color 0.2s",
          }}
        />
        <NavMarker
          href="#credit"
          style={{ backgroundColor: creditInView ? "#9c9faa" : "#202740", transition: "background-color 0.2s" }}
        />
      </nav>
      <div>
        <section
          className="main--hero"
          ref={hero}
          id="hero">
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
          ref={about}
          id="about">
          <header className="main--section-header">About me</header>
          <div>
            <p>
              I&apos;m a recent CS graduate from UC San Diego with a firm understanding of fundamental CS principles,
              such as <span>algorithms</span>, <span>data structures</span>, and <span>software development </span>
              practices. Moreover, I&apos;ve extensive experience in <span>code documentation</span>,{" "}
              <span> version control</span>, <span>collaborative team projects</span>, and several languages, such as
              <span> Java</span> and <span>JavaScript</span>.
            </p>
            <p>
              I&apos;ve also tackled various personal projects that focus on <span>full-stack development</span>. Most
              are built using the <span>MERN Stack</span>, in which I use multiple frameworks and packages, including
              <span> React Query</span>, <span>React Router Dom</span>, and <span>Sass</span>.
            </p>
            <p>
              When it comes to non-techy things, I enjoy <span>eating food</span>, <span>playing volleyball</span>, and
              <span> spending time with friends and family</span>. I also have an <span>adorable, shy cat</span> named
              Nori!
            </p>
          </div>
        </section>
        <section
          className="main--projects"
          ref={projects}
          id="projects">
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
          ref={credit}
          id="credit">
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

const NavMarker = ({ href, style }) => {
  return (
    <a href={href}>
      <motion.div
        className="main--nav-marker"
        whileHover={{ scale: 1.4, cursor: "pointer" }}
        transition={{ duration: 0.3 }}
        style={style}
      />
    </a>
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
