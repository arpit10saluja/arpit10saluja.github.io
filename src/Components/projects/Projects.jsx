import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./ProjectsData";

const Projects = () => {
  return (
    <Box id="Projects" w={"90%"} m="auto" mt={"3%"}>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "30px", md: "40px" }}
        fontWeight={{ base: "semibold", md: "semibold" }}
        mb="2%">
        Featured Projects
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: "2rem", md: "4rem" }}>
        {projectsData.map((project, i) => (
          <ProjectCard
            index={i}
            project_img={project.project_img}
            project_img_dark={project.project_img_dark}
            tech_stack={project.tech_stack}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
