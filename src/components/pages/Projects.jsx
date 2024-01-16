import styled from "styled-components";
import projects from "../../data/projects";

const ProjectsWrapper = styled.main`
  background-color: var(--color-secondary);
  color: var(--color-tertiary);

  display: grid;
  place-items: center;
  row-gap: 10rem;

  padding: 6rem 2rem;

  overflow-y: scroll;

  @media (min-width: 830px) {
    row-gap: 15rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      {projects.map((project, ind) => (
        <ProjectItem
          key={ind}
          isImgOnLeft={ind % 2 !== 0 ? true : false}
          {...project}
        />
      ))}
    </ProjectsWrapper>
  );
};

const ProjectItemWrapper = styled.section`
  .project-item--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .temp-pic {
    background-color: purple;

    width: 25rem;
    height: 25rem;

    border-radius: 10px;
  }

  .project-item--information header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1.5rem;
  }

  .project-item--name {
    font-size: var(--font-md-2);
    font-weight: 600;
  }

  .project-item--skills {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-item--skills > p {
    font-size: var(--font-sm-3);
    font-weight: 500;
  }

  .project-item--description {
    color: var(--color-quad);

    width: 30rem;

    font-size: var(--font-sm-2);
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

    font-size: var(--font-sm-2);
  }

  .dot-separator {
    font-size: 2rem;
  }

  @media (min-width: 510px) {
    .temp-pic {
      width: 35rem;
      height: 35rem;
    }

    .project-item--name {
      font-size: var(--font-md-3);
    }

    .project-item--skills > p {
      font-size: var(--font-sm-4);
    }

    .project-item--description {
      width: 40rem;

      font-size: var(--font-sm-3);
    }

    .project-item--links > a {
      font-size: var(--font-sm-3);
    }
  }

  @media (min-width: 830px) {
    .project-item--container {
      flex-direction: row-reverse;
      gap: 6rem;
    }

    .project-item--container.reversed {
      flex-direction: row;
    }

    .project-item--information header {
      align-items: flex-start;
    }

    .project-item--description {
      width: 35rem;

      text-align: left;
    }

    .project-item--links {
      justify-content: flex-start;
    }
  }
`;

const ProjectItem = ({ isImgOnLeft, name, skills, description, links, img }) => {
  return (
    <ProjectItemWrapper>
      <div className={`project-item--container ${isImgOnLeft ? "reversed" : ""}`}>
        <div className="temp-pic"></div>
        <div className="project-item--information">
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
      </div>
    </ProjectItemWrapper>
  );
};

export default Projects;
