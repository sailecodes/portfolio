import styled from "styled-components";

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

const HomeWrapper = styled.main`
  position: relative;

  background-color: var(--color-secondary);
  color: var(--color-tertiary);

  display: grid;
  place-items: center;
  row-gap: 7rem;

  padding: 6rem 2rem;

  overflow-y: scroll;

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
  }

  .home--hero-text > p:nth-child(1) {
    font-size: var(--font-lg-4);
    font-weight: 700;
    text-align: center;
  }

  .home--hero-text > p:last-child {
    color: var(--color-quad);

    width: 30rem;

    font-size: var(--font-sm-2);
    text-align: center;
  }

  .home--hero > img {
    width: 25rem;
    height: 25rem;

    object-fit: cover;

    border-radius: 50%;
  }

  .home--skills > header,
  .home--tools > header {
    font-size: var(--font-sm-4);
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

  .home--skill-set {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  @media (min-width: 510px) {
    row-gap: 10rem;

    .home--hero-text > p:nth-child(1) {
      font-size: var(--font-heading);
    }

    .home--hero-text > p:last-child {
      width: 44.5rem;

      font-size: var(--font-sm-3);
    }

    .home--hero > img {
      width: 30rem;
      height: 30rem;
    }

    .home--skills > header,
    .home--tools > header {
      font-size: var(--font-md-1);
    }
  }

  @media (min-width: 830px) {
    row-gap: 15rem;

    padding: 4rem 2rem;

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

    .home--skill-set {
      flex-direction: row;
      gap: 10rem;
    }
  }
`;

const Home = () => {
  const screenSize = useScreenSize();

  return (
    <HomeWrapper>
      <section className="home--hero">
        <section className="home--hero-text">
          <p>Hi, I&apos;m Elias!</p>
          <p>
            I&apos;m an aspiring software engineer who loves to create full-stack applications and be terrible at
            LeetCode.
          </p>
        </section>
        <img
          src={pfp}
          alt="Profile picture"
        />
      </section>
      <section className="home--skill-set">
        <section className="home--skills">
          <header>Skills</header>
          <div>
            <HtmlIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <CssIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <JavascriptIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <ReactIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <NodeIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <JavaIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
          </div>
        </section>
        <section className="home--tools">
          <header>Tools</header>
          <div>
            <GithubIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
            <VsCodeIcon
              width={screenSize.width < 510 ? "3.4rem" : "4.4rem"}
              height={screenSize.width < 510 ? "3.4rem" : "4.4rem"}
            />
            <SiIntellijidea
              size={screenSize.width < 510 ? 28 : 35}
              color={"var(--color-intellij-icon)"}
            />
            <PostmanIcon
              width={screenSize.width < 510 ? "3rem" : "4rem"}
              height={screenSize.width < 510 ? "3rem" : "4rem"}
            />
          </div>
        </section>
      </section>
    </HomeWrapper>
  );
};
export default Home;
