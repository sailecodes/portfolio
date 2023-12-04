import styled from "styled-components";

const ProjectsWrapper = styled.main`
  background-color: var(--color-secondary);
  color: var(--color-tertiary);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;

  padding: 6rem 2rem;

  overflow-y: scroll;
`;

const Projects = () => {
  const projects = [
    {
      name: "InstaIV",
      skills: ["MongoDB", "Express", "React", "Node"],
      description:
        "A basic social media app inspired by Instagram where users are able to enjoy the core aspects of such apps in their simplicity.",
      links: [
        { name: "Github", link: "https://github.com/sailecodes/instaiv" },
        { name: "Visit", link: "#" },
      ],
    },
    {
      name: "TodoIV",
      skills: ["MongoDB", "Express", "React", "Node"],
      description:
        "A todo app for keeping track of different tasks, ultimately providing users with a sense of organization and accountability.",
      links: [
        { name: "Github", link: "https://github.com/sailecodes/todo" },
        { name: "Visit", link: "#" },
      ],
    },
  ];

  return (
    <ProjectsWrapper>
      {projects.map((project, ind) => (
        <ProjectItem
          key={ind}
          {...project}
        />
      ))}
    </ProjectsWrapper>
  );
};

const ProjectItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .temp-pic {
    background-color: purple;

    width: 35rem;
    height: 35rem;

    border-radius: 10px;
  }

  .project-item--information header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1.5rem;
  }

  .project-item--name {
    font-size: var(--font-md-3);
    font-weight: 600;
  }

  .project-item--skills {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-item--skills > p {
    font-size: var(--font-sm-4);
    font-weight: 500;
  }

  .project-item--description {
    color: var(--color-quad);

    font-size: var(--font-sm-3);
    text-align: center;

    margin-bottom: 1.5rem;
  }

  .project-item--links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .project-item--links > a {
    color: var(--color-blue);

    font-size: var(--font-sm-3);
  }
`;

const ProjectItem = ({ name, skills, description, links, img }) => {
  return (
    <ProjectItemWrapper>
      <div className="temp-pic"></div>
      <div className="project-item--information">
        <header>
          <p className="project-item--name">{name}</p>
          <div className="project-item--skills">
            {skills.map((skill) => (
              <p key={name + skill}>{skill}</p>
            ))}
          </div>
        </header>
        <p className="project-item--description">{description}</p>
        <div className="project-item--links">
          {links.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </ProjectItemWrapper>
  );
};

export default Projects;
