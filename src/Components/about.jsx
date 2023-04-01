import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../resume/Arpit-Kumar-Resume.pdf";
import Typewriter from "typewriter-effect";

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <diV id="about" className="about section">
    <div id="About" className={style.homepage} >
      <div className={style.image}>
        {/* <BookType /> */}
        <img  src="https://avatars.githubusercontent.com/u/109855468?v=4" alt="profile_img"className="home-img" />
      </div>
      <div className={style.name}>
          <h1>Hello,</h1>
        <h1  id="user-detail-name">
          {" "}
          <Typewriter
         
            options={{
              strings: ["I'm Arpit Kumar"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
            />
        </h1>
        {/* <h1>Frontend Developer</h1> */}

        <div className={style.flipBox} >
          <div className={style.flip}>
            <div>
              <div style={{ color: "white" }}>Quick Learner</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Problem Solver</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Adaptable</div>
            </div>
          </div>
        </div>

        
          <p id="user-detail-intro">
          A aspiring and self motivated full stack web developer with
          expertise in creating ready to use website. Team
          collaborator with good interpersonal skill, Looking for a
          challenging role in a tech driven organisation.
          </p>

        <div>
          {" "}
          <a
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1lFycavzJaYExlcNPBhWmXXuKScE6WGY3/view?usp=sharing",
                "blank"
                );
              }}
              id="resume-button-2"
              href={Resume}
              download="Arpit-Kumar-Resume"
              className={style.ResumeBtn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
          {/*  */}
          <a
            href="https://github.com/arpit10saluja"
            className={style.githubBtn}
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
          {/*  */}
          <a
            href="https://www.linkedin.com/in/arpitsaluja1234/"
            className={style.githubBtn}
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  </diV>
  );
}
