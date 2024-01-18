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

import styled from "styled-components";
const HomeWrapper = styled.main`
  position: relative;

  background-color: var(--color-main-bg);
  color: var(--color-black);

  display: grid;
  place-items: center;
  gap: 5rem;

  padding: 8rem 2rem;

  overflow-y: scroll;

  .home--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
  }

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
  }

  .home--hero-text-header {
    color: var(--color-black);

    font-size: var(--font-home-hero-header-sm);
    font-weight: 600;
    text-align: center;
  }

  .home--hero-text-description {
    color: var(--color-gray);

    max-width: 44.5rem;

    font-size: var(--font-home-hero-description-sm);
    text-align: center;

    margin-bottom: 1rem;
  }

  .home--hero-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .home--hero-links a {
    color: var(--color-blue);

    font-size: var(--font-home-hero-link-sm);
  }

  .home--img-container {
    width: 28rem;
    height: 28rem;

    border-radius: 50%;

    overflow: hidden;
  }

  .home--img-container > img {
    width: 28rem;
    height: 28rem;

    object-fit: cover;
    object-position: -6px -155px;

    scale: 2;
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
    .home--container {
      gap: 12rem;
    }

    .home--hero-text-header {
      font-size: var(--font-home-hero-header-lg);
    }

    .home--hero-text-description {
      width: 44.5rem;

      font-size: var(--font-home-hero-description-lg);
    }

    .home--hero-links a {
      font-size: var(--font-home-hero-link-lg);
    }

    .home--img-container {
      width: 32rem;
      height: 32rem;

      border-radius: 50%;

      overflow: hidden;
    }

    .home--img-container > img {
      width: 32rem;
      height: 32rem;

      object-position: -6px -180px;
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
      gap: 3.5rem;
    }

    .home--hero-text-header {
      text-align: left;
    }

    .home--hero-text-description {
      text-align: left;
    }

    .home--hero-links {
      justify-content: flex-start;
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
      <div className="home--container">
        <section className="home--hero">
          <section className="home--hero-text">
            <header className="home--hero-text-header">Hi, I&apos;m Elias!</header>
            <p className="home--hero-text-description">
              I&apos;m an aspiring software engineer who transforms ideas into powerful code to build innovative
              solutions.
            </p>
            <div className="home--hero-links">
              <a
                href="https://github.com/sailecodes"
                target="_blank"
                rel="noopener noreferrer">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/elias-iv-roman/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
          <div className="home--img-container">
            <img
              src={pfp}
              alt="Profile picture"
            />
          </div>
        </section>
        <section className="home--set">
          <section className="home--skills">
            <header>Skills</header>
            <div>
              <JavaIcon />
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <ReactIcon />
              <NodeIcon />
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
      </div>
    </HomeWrapper>
  );
};
export default Home;
