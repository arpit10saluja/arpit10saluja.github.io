import React from "react";
import style from "../styles/skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills">
      <div id="Skills" className={style.outer_box}>
      
          <h1 className={style.main_heading}>Technical Skills</h1>


        <div className={style.main_box}>
          <div>
            <h1>Languages</h1>
            <div className={style.language_logo}>
              <div data-aos="flip-left" className="skills-card">
                <img src="./js.png" alt="JavaScript" className="skills-card-img"/>
                <h3 className="skills-card-name">JavaScript</h3>
              </div>
              <div data-aos="flip-left" style={{ width: "40%" }} className="skills-card">
                <img src="./ts.png" alt="TypeScript" className="skills-card-img"/>
                <h3 className="skills-card-name">TypeScript</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20%",
              }}>
              My favorite languages for software engineering
            </p>
          </div>

          <div className={style.frontend}>
            <h1>Front-End</h1>
            <div className={style.frontend_logo}>
              {" "}
              <div data-aos="flip-left" className="skills-card">
                <img src="./html.png" alt="html" className="skills-card-img"/>
                <h3 className="skills-card-name">HTML</h3>
              </div>
              <div data-aos="flip-left"  className="skills-card">
                <img src="./css.png" alt="css" className="skills-card-img"/>
                <h3 className="skills-card-name">CSS</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src="./react.png" alt="React" className="skills-card-img"/>
                <h3 className="skills-card-name">React</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src="./node.png" alt="Next.js" className="skills-card-img"/>
                <h3 className="skills-card-name">Node.js</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20%",
              }}>
              My preferred technologies for front-end web development and
              component design.
            </p>
          </div>

          <div className={style.backend}>
            <h1>Back-End</h1>
            <div className={style.backend_logo}>
              <div data-aos="flip-left" className="skills-card">
                <img src="./ex.png" alt="express"  className="skills-card-img"/>
                <h3 className="skills-card-name">Express</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src="./mongodb.png" alt="mongodb"  className="skills-card-img"/>
                <h3 className="skills-card-name">MongoDB</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20%",
              }}>
              My preferred technologies for back-end web programming and
              database architecture.
            </p>
          </div>

          <div className={style.tools}>
            <h1>Tools</h1>
            <div className={style.tools_logo}>
              <div data-aos="flip-left" className="skills-card">
                <img src="./git.png" alt="git" className="skills-card-img"/>
                <h3 className="skills-card-name">Git</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src="./github.png" alt="github" className="skills-card-img"/>
                <h3 className="skills-card-name">Github</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20%",
              }}>
              My favorite tools for version control, code editing, and container
              orchestration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
