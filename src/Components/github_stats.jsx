import style from "../styles/statistics.module.css";
import GitHubCalendar from "react-github-calendar";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useColorMode } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useState } from "react";

export default function GithubStats() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const { colorMode } = useColorMode();

  return (
    <>
      {" "}
      <div className={style.outer_box}>
 
          <h1 className={style.main_heading}>My Statistics</h1>
    

        <div className={style.flex_box}>
          <div data-aos="fade-right" >
            <img  
              src={
                colorMode === "dark"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=arpit10saluja&theme=dark"
                  : "https://github-readme-streak-stats.herokuapp.com?user=arpit10saluja"
              }
              alt="stats"
              id="github-streak-stats"
              
            />
          </div>
          <div data-aos="fade-left">
            <img 
            id="github-stats-card"
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api?username=arpit10saluja&theme=dark"
                  : "https://github-readme-stats.vercel.app/api?username=arpit10saluja"
              }
              alt="contribution"
            />
          </div>
        </div>
      </div>
      
      <div data-aos="fade-left"  className={style.flex_box}>
            <img
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api/top-langs/?username=arpit10saluja&theme=dark"
                  : "https://github-readme-stats.vercel.app/api/top-langs/?username=arpit10saluja"
              }
              alt="Top Lang"
              id="github-top-langs"
            />
    </div>
      
      <div className={style.outer_box}>
      
          <h1 className={style.main_heading}>My Github Calender</h1>
      
        <div data-aos="fade-up" className={style.Calendar}>
          <GitHubCalendar username="arpit10saluja" />
        </div>
      </div>
      <div className={style.outer_box}>
       
          <h1 className={style.main_heading}>Github Contribution Graph</h1>
    
        <div className={style.graph}>
       
            <img
              src={
                colorMode === "dark"
                  ? "https://github-readme-activity-graph.vercel.app/graph?username=arpit10saluja&theme=gotham"
                  : "https://github-readme-activity-graph.vercel.app/graph?username=arpit10saluja&theme=github-light"
              }
              alt=""
            />
      
        </div>
      </div>
    </>
  );
}
