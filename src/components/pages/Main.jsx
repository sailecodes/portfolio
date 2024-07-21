import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";

import "../../assets/sass/main.scss";
import catGif from "../../assets/gifs/cat-gif.gif";
import projects from "../../data/projects";
import experience from "../../data/experience";

const Main = () => {
  return (
    <main className="main">
      <div className="main--left-half">
        <section className="main--hero">
          <p className="main--hero-greetings">Hi, I&apos;m Elias 👋</p>
          <p className="main--hero-tagline">
            an aspiring software engineer with a passion to use software as a medium to help others.
          </p>
          <div className="main--hero-links">
            <a href="https://www.linkedin.com/in/elias-iv-roman/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={23} />
            </a>
            <a href="https://github.com/sailecodes" target="_blank" rel="noopener noreferrer">
              <FaGithub size={23} />
            </a>
          </div>
        </section>
        <section className="main--about">
          <header className="main--section-header">About me</header>
          <p>
            I&apos;m a CS graduate from UC San Diego with a firm understanding of fundamental CS principles, such as{" "}
            <span>algorithms</span>, <span>data structures</span>, and <span>software development </span>
            practices. Moreover, I&apos;ve extensive experience in <span>code documentation</span>,
            <span> version control</span>, <span>collaborative team projects</span>, <span>agile methodologies</span>,
            and several languages, such as
            <span> Java</span> and <span>JavaScript</span>.
          </p>
          <p>
            I&apos;ve also tackled various personal projects that focus on <span>full-stack development</span>. Most are
            built using the <span>MERN Stack</span>, in which I use multiple frameworks and packages, including
            <span> React Query</span>, <span>React Router Dom</span>, and <span>Sass</span>. In addition, I&apos;ve
            hosted <span>Postgres</span> databases on Railway, especially for my project Shoe Szn.
          </p>
          <p>
            When it comes to non-techy things, I enjoy <span>eating food</span>, <span>playing volleyball</span>, and
            <span> spending time with friends and family</span>. At home, I find comfort in my
            <span> adorable, shy cat</span> named Nori!
          </p>
          <img src={catGif} alt="Animated cat massaging another cat" />
        </section>
      </div>
      <div className="main--right-half">
        <section className="main--experience">
          <header className="main--section-header">Experience</header>
          <div>
            {experience.map((exp, ind) => (
              <Experience
                key={exp.description + ind}
                date={exp.date}
                position={exp.position}
                company={exp.company}
                description={exp.description}
              />
            ))}
          </div>
        </section>
        <section className="main--projects">
          <header className="main--section-header">Projects</header>
          <div>
            {projects.map((project, ind) => (
              <Project
                key={project.description + ind}
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
        <section className="main--credit">
          <header className="main--section-header">Credit</header>
          Inspired by Brittany Chiang&apos;s beautiful{" "}
          <a href="https://brittanychiang.com/?ref=hackernoon.com" target="_blank" rel="noopener noreferrer">
            portfolio
          </a>
          . Built with <span>React.js</span>, designed with <span>Sass</span>, and deployed on <span>Netlify</span>.
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
          <a href={links[0]} target="_blank" rel="noopener noreferrer">
            <FaGithub size={23} />
          </a>
          {links[1] !== "#" && (
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={23} />
            </a>
          )}
        </div>
      </div>
      <div className="main--projects-project-description">
        <p>{intro}</p>
        <p>{description}</p>
      </div>
      <div className="main--projects-project-skills">
        {skills.map((skill, ind) => (
          <p key={`${title} ${skill} ${ind}`}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

const Experience = ({ date, position, company, description }) => {
  return (
    <div className="main--experience-experience">
      <p className="main--experience-experience-date">{date}</p>
      <p className="main--experience-experience-position">{`${position}, ${company}`}</p>
      <p className="main--experience-experience-description">{description}</p>
    </div>
  );
};

export default Main;
