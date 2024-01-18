import styled from "styled-components";
import projects from "../../data/projects";

const ProjectsWrapper = styled.main`
  background-color: var(--color-main-bg);
  color: var(--color-black);

  display: grid;
  place-items: center;

  padding: 8rem 2rem;

  overflow-y: scroll;

  .projects--container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects--line {
    background-color: var(--color-gray);

    width: 1px;
    height: 12rem;

    margin: 3rem 0;
  }

  @media (min-width: 830px) {
    .projects--line-container {
      display: grid;
      place-items: center;

      width: 2.5rem;
    }

    .projects--container {
      align-items: flex-start;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <div className="projects--container">
        {projects.map((project, ind) => (
          <>
            <ProjectItem
              key={ind}
              {...project}
            />
            {ind !== projects.length - 1 && (
              <div className="projects--line-container">
                <div className="projects--line"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </ProjectsWrapper>
  );
};

const ProjectItemWrapper = styled.section`
  .project-item--date p {
    color: var(--color-gray);

    font-size: var(--font-projects-date-sm);
    font-weight: 500;
    text-align: center;
    letter-spacing: 3px;

    margin-bottom: 1rem;
  }

  .project-item--container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 30rem;
  }

  .project-item--container header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1.5rem;
  }

  .project-item--name {
    font-size: var(--font-projects-name-sm);
    font-weight: 600;
  }

  .project-item--skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }

  .project-item--skills > p {
    font-size: var(--font-projects-skills-sm);
    font-weight: 500;
  }

  .project-item--description {
    color: var(--color-gray);

    width: 30rem;

    font-size: var(--font-projects-description-sm);
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

    font-size: var(--font-projects-link-sm);
  }

  .dot-separator {
    font-size: 2rem;
  }

  @media (min-width: 510px) {
    .project-item--date p {
      font-size: var(--font-projects-date-lg);
    }

    .project-item--container {
      width: unset;
    }

    .project-item--name {
      font-size: var(--font-projects-name-lg);
    }

    .project-item--skills > p {
      font-size: var(--font-projects-skills-lg);
    }

    .project-item--description {
      width: 40rem;

      font-size: var(--font-projects-description-lg);
    }

    .project-item--links > a {
      font-size: var(--font-projects-link-lg);
    }
  }

  @media (min-width: 830px) {
    display: flex;
    align-items: center;
    gap: 3rem;

    .project-item--date {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .project-item--date div {
      background-color: var(--color-black);

      width: 1px;
      height: 10px;
    }

    .project-item--date p {
      font-weight: 600;
      letter-spacing: 9px;
      writing-mode: vertical-lr;

      transform: rotate(180deg);

      margin-bottom: 0;
    }

    .project-item--container {
      align-items: flex-start;
    }

    .project-item--container header {
      align-items: flex-start;
    }

    .project-item--description {
      width: 45rem;

      text-align: left;
    }

    .project-item--links {
      justify-content: flex-start;
    }
  }
`;

const ProjectItem = ({ date, name, skills, description, explanation, links }) => {
  return (
    <ProjectItemWrapper>
      <div className="project-item--date">
        <p>{date}</p>
      </div>
      <div className="project-item--container">
        <header>
          <p className="project-item--name">{name}</p>
          <div className="project-item--skills">
            {skills.map((skill, ind) => (
              <>
                {ind !== 0 && <div className="dot-separator">&middot;</div>}
                <p key={name + skill}>{skill}</p>
              </>
            ))}
          </div>
        </header>
        <p className="project-item--description">{description}</p>
        <p className="project-item--description">{explanation}</p>
        <div className="project-item--links">
          {links.map((link) => {
            if (link.link === "#") return <></>;
            return (
              <a
                key={name + link.link}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer">
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </ProjectItemWrapper>
  );
};

export default Projects;
