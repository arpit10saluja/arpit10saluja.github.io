import React from "react";
import style from "../styles/skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="Skills" className={style.outer_box}>
      
          <h1 className={style.main_heading}>Technical Skills</h1>


        <div className={style.main_box}>
          <div>
            <h1>Languages</h1>
            <div className={style.language_logo}>
              <div data-aos="flip-left">
                <img src="./js.png" alt="JavaScript" />
              </div>
              <div data-aos="flip-left" style={{ width: "40%" }}>
                <img src="./ts.png" alt="TypeScript" />
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "10%",
              }}>
              My favorite languages for software engineering
            </p>
          </div>

          <div className={style.frontend}>
            <h1>Front-End</h1>
            <div className={style.frontend_logo}>
              {" "}
              <div data-aos="flip-left">
                <img src="./html.png" alt="html" />
              </div>
              <div data-aos="flip-left">
                <img src="./css.png" alt="css" />
              </div>
              <div data-aos="flip-left">
                <img src="./react.png" alt="React" />
              </div>
              <div data-aos="flip-left">
                <img src="./next.png" alt="Next.js" />
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "10%",
              }}>
              My preferred technologies for front-end web development and
              component design.
            </p>
          </div>

          <div className={style.backend}>
            <h1>Back-End</h1>
            <div className={style.backend_logo}>
              <div data-aos="flip-left">
                <img src="./ex.png" alt="express" />
              </div>
              <div data-aos="flip-left">
                <img src="./mongodb.png" alt="mongodb" />
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "10%",
              }}>
              My preferred technologies for back-end web programming and
              database architecture.
            </p>
          </div>

          <div className={style.tools}>
            <h1>Tools</h1>
            <div className={style.tools_logo}>
              <div data-aos="flip-left">
                <img src="./git.png" alt="git" />
              </div>
              <div data-aos="flip-left">
                <img src="./github.png" alt="github" />
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "10%",
              }}>
              My favorite tools for version control, code editing, and container
              orchestration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
