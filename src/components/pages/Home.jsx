import styled from "styled-components";

const HomeWrapper = styled.div`
  position: relative;

  background-color: var(--color-secondary);
  color: var(--color-black);

  padding: 4rem 2rem;

  overflow-y: scroll;

  .temp {
    background-color: purple;

    flex-shrink: 0;

    width: 30rem;
    height: 30rem;
    border-radius: 1000px;
  }

  .home--hero {
    position: relative;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;

    margin-bottom: 10rem;
  }

  .home--hero-text > p:nth-child(1) {
    font-size: var(--font-heading);
    font-weight: 700;
    text-align: center;
  }

  .home--hero-text > p:last-child {
    width: 44.5rem;

    font-size: var(--font-sm-3);
    text-align: center;
  }

  @media (min-width: 822px) {
    .home--hero {
      flex-direction: row;
      justify-content: center;
    }

    .home--hero-text > p:nth-child(1) {
      font-size: var(--font-heading);
      font-weight: 600;
      text-align: left;
    }

    .home--hero-text > p:last-child {
      width: 44.5rem;

      font-size: var(--font-sm-3);
      text-align: left;
    }

    .home--hero-text > p:last-child {
      /* width: 44.5rem; */
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home--hero">
        {/* <img
          src={pfp}
          alt="Profile picture"
        /> */}
        <section className="home--hero-text">
          <p>Hi, I&apos;m Elias!</p>
          <p>
            I&apos;m an aspiring software engineer who loves to create full-stack applications and be terrible at
            LeetCode.
          </p>
        </section>
        <div className="temp"></div>
      </section>
      <section className="home--skills">
        <heading>Skills</heading>
        <div>
          <p></p>
        </div>
      </section>
    </HomeWrapper>
  );
};
export default Home;
