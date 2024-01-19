import ProjectItemWrapper from "../../assets/wrappers/ProjectItemWrapper";

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
                {ind !== 0 && (
                  <div
                    key={"dot-separator" + name}
                    className="dot-separator">
                    &middot;
                  </div>
                )}
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

export default ProjectItem;
