import React from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Center } from "@chakra-ui/react";
import About from "./about";
import Skills from "./skills";
import GithubStats from "./github_stats";
import Projects from "./projects/Projects";
import Contact from "./contactForm/Contact";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Box w="full" margin={"auto"}>
        <About />
        <Skills />
        <GithubStats />
        <Projects />
        <Center>
          <Contact />
        </Center>
      </Box>
    </div>
  );
}
