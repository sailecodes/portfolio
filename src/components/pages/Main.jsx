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
          <div>
            <Project
              date="January 2024 - Present"
              title="Shoe Szn"
              intro=""
              description="An e-commerce website that provides consumers with a selection of shoes handpicked by a community."
            />
            <Project
              date="December 2023"
              title="InstaIV"
              intro="A social media application based on Instagram’s design and basic functionalities."
              description="This was a personal project that allowed me to reinforce my understanding of social media applications. I designed a React frontend based on Instagram's UI and incorporated the TanStack React Query, React Router, Axios, and styled-components frameworks. I also built a Node and Express backend to handle various operations, such as logging in or following other users, and integrated JSON Web Token authentication to restrict routes from unregistered users. Additionally, I utilized bcrypt hashing to protect passwords stored in the database. For data storage, I implemented the server to communicate with MongoDB and Cloudinary to store text-based information and pictures, respectively."
            />
            <Project
              date="December 2022"
              title="Birds of a Feather"
              intro="An Android application that allows students to connect with one another based on classes."
              description="This was a six-member project for my software engineering class at UCSD. It was developed with agile software methodologies to simulate or mimic a real-world work environment within a three-month period. I implemented comparison and sorting algorithms to filter students and classes, created various white-box and unit tests, collaborated on the UI design, and coordinated stand-up and weekly meetings."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const Project = ({ date, title, intro, description }) => {
  return (
    <div className="main--projects-project">
      <p className="main--projects-project-date">{date}</p>
      <p className="main--projects-project-title">{title}</p>
      <p className="main--projects-project-description">
        <span>{intro}</span>
        {description}
      </p>
    </div>
  );
};

export default Main;
