import { SiIntellijidea } from "react-icons/si";

import HomeWrapper from "../../assets/wrappers/HomeWrapper";
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
