import styled from "styled-components";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiIntellijidea } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const HomeWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  .home--skills > header,
  .home--tools > header {
    font-size: var(--font-md-1);
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

  @media (min-width: 822px) {
    flex-direction: column;

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
      <section className="home--skill-set">
        <section className="home--skills">
          <header>Skills</header>
          <div>
            <FaHtml5
              size={40}
              color={"var(--color-html-icon)"}
            />
            <FaCss3Alt
              size={40}
              color={"var(--color-css-icon)"}
            />
            <IoLogoJavascript
              size={40}
              color={"var(--color-js-icon)"}
            />
            <RiReactjsFill
              size={40}
              color={"var(--color-react-icon)"}
            />
            <FaNodeJs
              size={40}
              color={"var(--color-node-icon)"}
            />
            <FaJava
              size={40}
              color={"var(--color-java-icon)"}
            />
          </div>
        </section>
        <section className="home--tools">
          <header>Tools</header>
          <div>
            <FaGithub
              size={38}
              color={"var(--color-github-icon)"}
            />
            <TbBrandVscode
              size={40}
              color={"var(--color-vscode-icon)"}
            />
            <SiIntellijidea
              size={35}
              color={"var(--color-intellij-icon)"}
            />
            <SiPostman
              size={38}
              color={"var(--color-postman-icon)"}
            />
          </div>
        </section>
      </section>
    </HomeWrapper>
  );
};
export default Home;
