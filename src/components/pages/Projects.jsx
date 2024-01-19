import ProjectsWrapper from "../../assets/wrappers/ProjectsWrapper";
import ProjectItem from "../custom/ProjectItem";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <div className="projects--container">
        {projects.map((project, ind) => (
          <>
            <ProjectItem
              key={ind + project.explanation}
              {...project}
            />
            {ind !== projects.length - 1 && (
              <div
                key={ind}
                className="projects--line-container">
                <div className="projects--line"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
