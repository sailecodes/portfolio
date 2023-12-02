import styled from "styled-components";

import pp from "../../assets/imgs/luffy.jpg";

const HomeWrapper = styled.div`
  position: relative;

  background-color: var(--color-primary-3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem;

  .home--content-container {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .home--content-container > img {
    max-width: 100%;
    height: auto;
    clip-path: circle(50%);
  }

  .home--text-container > p:nth-child(1) {
    font-size: var(--font-lg-4);
    font-weight: 600;
  }

  .home--text-container > p:last-child {
    font-size: var(--font-sm-3);
  }

  .temp {
    background-color: purple;
    width: 20rem;
    height: 20rem;
    border-radius: 1000px;
  }

  @media (min-width: 767px) {
    justify-content: center;

    .home--content-container {
      flex-direction: row;
    }

    .temp {
      width: 25rem;
      height: 25rem;
    }
  }

  @media (min-width: 1264px) {
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className="home--content-container">
        {/* <img
          src={pp}
          alt="Profile picture"
        /> */}
        <div className="temp"></div>
        <div className="home--text-container">
          <p>Main heading</p>
          <p>Sub heading.</p>
        </div>
      </div>
    </HomeWrapper>
  );
};
export default Home;
