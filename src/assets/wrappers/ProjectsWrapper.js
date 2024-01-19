import styled from "styled-components";

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

export default ProjectsWrapper;
