import React from 'react'
import Simple from './Navbar/Navbar'
import Skills from "./skills"
import GithubStats from "./github_stats";
import Projects from "./projects/Projects";
import Contact from "./contactForm/Contact";
import { Box } from '@chakra-ui/react';
import About from './about';
import { Fragment } from "react";


export default function Home() {
  return (
    <div id='home'>
      <Simple/>
      <Box w="full" margin={"auto"}>
        <About />
        <Skills />
        <GithubStats />
        <Projects />
        <Fragment>
          <Contact />
        </Fragment>
      </Box>
    </div>
  )
}
