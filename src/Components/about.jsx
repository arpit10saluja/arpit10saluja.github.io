import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../resume/Arpit-Kumar-Resume.pdf";
import { Text } from "@chakra-ui/react";

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="about section">
      {/* <Text textAlign={'center'} fontSize={'4xl'}>About</Text> */}
      <div id="about" className={style.about}>
        <div className={style.image}>
          {/* <BookType /> */}
          <img
            src="https://avatars.githubusercontent.com/u/109855468?v=4"
            alt="profile_img"
            className="home-img"
          />
        </div>
        <div className={style.name}>
          <h1>Hello,</h1>
          <h1 id="user-detail-name">
            {" "}
            <Text>I'm Arpit Kumar</Text>
            {/* <Typewriter
            options={{
              strings: ["I'm Arpit Kumar"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
            /> */}
          </h1>
          {/* <h1>Frontend Developer</h1> */}

          <div className={style.flipBox}>
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
            <h3 id="">About</h3>
          <p id="user-detail-intro">
            A aspiring and self motivated full stack web developer with
            expertise in creating ready to use website. Team collaborator with
            good interpersonal skill and tech skills such as Reach.js, Node.js,
            JavaScript, HTML, CSS and some more. Looking for a challenging role
            in a tech driven organisation.
          </p>

          <div>
            {" "}
            {/* <Button
              className="nav-link resume"
              id="resume-button-2"
              // className={styles.a}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1lFycavzJaYExlcNPBhWmXXuKScE6WGY3/view?usp=sharing",
                  "blank"
                );
              }}
              download="Arpit-Kumar-Resume"
            >
              {" "}
              <a
                id="resume-link-2"
                href={Resume}
                target="_blank"
                className={style.ResumeBtn}
                rel="noreferrer"
                download="Arpit-Kumar-Resume.pdf"
              >
                Resume
              </a>
            </Button> */}
            {/* <button  */}

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
              {/* </button> */}
            {/*  */}
            <a
              href="https://github.com/arpit10saluja"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            {/*  */}
            <a
              href="https://www.linkedin.com/in/arpitsaluja1234/"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
