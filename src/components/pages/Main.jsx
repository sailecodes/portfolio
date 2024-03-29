import { motion } from "framer-motion";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

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
          <div>
            <Project
              date="Present"
              title="Shoe Szn"
              links={["https://github.com/sailecodes/shoe-szn", "#"]}
              intro=""
              description="An e-commerce website that provides consumers with a selection of shoes handpicked by a community."
              skills={[
                "React.js",
                "Node.js",
                "Express.js",
                "styled-components",
                "MongoDB",
                "MERN",
                "E-commerce Application",
              ]}
            />
            <Project
              date="December 2023"
              title="InstaIV"
              links={["https://github.com/sailecodes/instaiv", "https://instaiv.up.railway.app/"]}
              intro="A social media application based on Instagram’s design and basic functionalities."
              description="This was a personal project that allowed me to reinforce my understanding of social media applications. I designed a React frontend based on Instagram's UI and incorporated the TanStack React Query, React Router, Axios, and styled-components frameworks. I also built a Node and Express backend to handle various operations, such as logging in or following other users, and integrated JSON Web Token authentication to restrict routes from unregistered users. Additionally, I utilized bcrypt hashing to protect passwords stored in the database. For data storage, I implemented the server to communicate with MongoDB and Cloudinary to store text-based information and pictures, respectively."
              skills={["React.js", "Node.js", "Express.js", "Sass", "MongoDB", "MERN", "Social Media Application"]}
            />
            <Project
              date="December 2022"
              title="Birds of a Feather"
              links={["https://github.com/CSE-110-Winter-2022/birds-of-a-feather-team-29", "#"]}
              intro="An Android application that allows students to connect with one another based on classes."
              description="This was a six-member project for my software engineering class at UCSD. It was developed with agile software methodologies to simulate or mimic a real-world work environment within a three-month period. I implemented comparison and sorting algorithms to filter students and classes, created various white-box and unit tests, collaborated on the UI design, and coordinated stand-up and weekly meetings."
              skills={[
                "Java",
                "Unit Testing",
                "UI Design",
                "Android Studio",
                "Agile Methodologies",
                "Software Design Patterns",
                "Android Application",
              ]}
            />
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
