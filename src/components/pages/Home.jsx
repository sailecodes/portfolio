import { SiIntellijidea } from "react-icons/si";

import pfp from "../../assets/imgs/pfp.jpg";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import ReactIcon from "../icons/ReactIcon";
import NodeIcon from "../icons/NodeIcon";
import JavaIcon from "../icons/JavaIcon";
import GithubIcon from "../icons/GithubIcon";
import VsCodeIcon from "../icons/VsCodeIcon";
import PostmanIcon from "../icons/PostmanIcon";
import useScreenSize from "../../hooks/useScreenSize";

import styled from "styled-components";
const HomeWrapper = styled.main`
  position: relative;

  background-color: var(--color-main-bg);
  color: var(--color-black);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20rem;

  padding: 6rem 2rem;

  overflow-y: scroll;

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
  }

  .home--hero-text > p:nth-child(1) {
    color: var(--color-black);

    font-size: var(--font-home-hero-header-sm);
    font-weight: 600;
    text-align: center;
  }

  .home--hero-text > p:last-child {
    color: var(--color-gray);

    max-width: 44.5rem;

    font-size: var(--font-home-hero-description-sm);
    text-align: center;
  }

  .home--hero > img {
    width: 26rem;
    height: 26rem;

    object-fit: cover;

    border-radius: 50%;
  }

  .home--set {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .home--skills > header,
  .home--tools > header {
    font-size: var(--font-home-skills-header-sm);
    text-align: center;

    margin-bottom: 1.5rem;
  }

  .home--skills > div,
  .home--tools > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }

  .home--skills svg,
  .home--tools svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  .home--tools > div svg:nth-child(2) {
    width: 3.8rem;
    height: 3.8rem;
  }

  @media (min-width: 510px) {
    .home--hero-text > p:nth-child(1) {
      font-size: var(--font-home-hero-header-lg);
    }

    .home--hero-text > p:last-child {
      width: 44.5rem;

      font-size: var(--font-home-hero-description-lg);
    }

    .home--hero > img {
      width: 30rem;
      height: 30rem;
    }

    .home--skills > header,
    .home--tools > header {
      font-size: var(--font-home-skills-header-lg);
    }

    .home--skills svg,
    .home--tools svg {
      width: 3.6rem;
      height: 3.6rem;
    }

    .home--tools > div svg:nth-child(2) {
      width: 4.2rem;
      height: 4.2rem;
    }
  }

  @media (min-width: 860px) {
    .home--hero {
      flex-direction: row;
      justify-content: center;
    }

    .home--hero-text > p:nth-child(1) {
      text-align: left;
    }

    .home--hero-text > p:last-child {
      text-align: left;
    }

    .home--set {
      flex-direction: row;
      gap: 10rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home--hero">
        <section className="home--hero-text">
          <p>Hi, I&apos;m Elias!</p>
          <p>
            I&apos;m an aspiring software engineer who loves to tackle challenges and create innovative applications.
          </p>
        </section>
        <img
          src={pfp}
          alt="Profile picture"
        />
      </section>
      <section className="home--set">
        <section className="home--skills">
          <header>Skills</header>
          <div>
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <ReactIcon />
            <NodeIcon />
            <JavaIcon />
          </div>
        </section>
        <section className="home--tools">
          <header>Tools</header>
          <div>
            <GithubIcon />
            <VsCodeIcon />
            <SiIntellijidea />
            <PostmanIcon />
          </div>
        </section>
      </section>
    </HomeWrapper>
  );
};
export default Home;
