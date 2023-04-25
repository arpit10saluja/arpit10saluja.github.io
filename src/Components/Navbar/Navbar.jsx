import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  useColorMode,
  Text,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import About from "../about";
import SideDrawerNavbar from "./SideDrawerNavbar";
import Resume from "../../resume/Arpit-Kumar-Resume.pdf";
import Skills from "../skills";
import GithubStats from "../github_stats";
import Projects from "../projects/Projects";
import Contact from "../contactForm/Contact";
import Home from "../Home";

// const Links = ["Home","About", "Skills", "Projects", "Contact", "Resume",];

export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="100%" overflowX="hidden" id="nav-menu">
      <Box
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        }
        bg={useColorModeValue("white", "black")}
        w="100%"
        position="fixed"
        top={0}
        width="100%"
        zIndex={1001}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <SideDrawerNavbar />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              ml={"40px"}
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}>

            // Home Link
              <Link
                id="nav-link.home"
                className="nav-link home"
                to={"Home"}
                smooth={true}
                duration={500}
                offset={-90}
                px={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold">
                  {" "}
                  {"Home"}
                </Text>
              </Link>

              // About Link
              <Link
                className="nav-link about"
                to={"about"}
                smooth={true}
                duration={500}
                offset={-90}
                px={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold">
                  {" "}
                  {"About"}
                </Text>
              </Link>


              //Skills  Link
              <Link
                className="nav-link skills"
                to={"Skills"}
                smooth={true}
                duration={500}
                offset={-90}
                px={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold">
                  {" "}
                  {"Skills"}
                </Text>
              </Link>

              //Projects  Link
              <Link
                className="nav-link projects"
                to={"Projects"}
                smooth={true}
                duration={500}
                offset={-90}
                px={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold">
                  {" "}
                  {"Projects"}
                </Text>
              </Link>

              //Contact  Link
              <Link
                className="nav-link contact"
                to={"Contact"}
                smooth={true}
                duration={500}
                offset={-90}
                px={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold">
                  {" "}
                  {"Contact"}
                </Text>
              </Link>

// Resume Link
              <Text
                  _hover={{
                    color: "red",
                  }}
                  fontSize="18px"
                  fontWeight="semibold"> 
              <a
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1lFycavzJaYExlcNPBhWmXXuKScE6WGY3/view?usp=sharing",
                    "blank"
                  );
                }}
                className="nav-link resume"
                id="resume-button-1"
                href={Resume}
                download="Arpit-Kumar-Resume"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}>
                Resume
              </a>
              </Text>

            
            </HStack>
          </HStack>
          <Box alignItems={"center"} mr="20px">
            <Button
              onClick={toggleColorMode}
              variant="ghost"
              fontSize="20px"
              fontWeight="semibold">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box w="full" margin={"auto"}>
        <Home>
          <About />
        </Home>
        <Skills />
        <GithubStats />
        <Projects />
        <Center>
          <Contact />
        </Center>
      </Box>
  
    </Box>
  );
}



// {Links.map((link) => (
//   <>
//     {link === "Resume" ? (
//       <>
//         <Link
//           onClick={() => {
//             window.open(
//               "https://drive.google.com/file/d/1lFycavzJaYExlcNPBhWmXXuKScE6WGY3/view?usp=sharing"
//             );
//           }}
//           href={Resume}
//           download="Arpit-Kumar-Resume"
//           key={link}
//           px={2}
//           py={1}
//           rounded={"md"}
//           _hover={{
//             textDecoration: "none",
//           }}>
//           <Text
//             _hover={{
//               color: "red",
//             }}
//             fontSize="18px"
//             fontWeight="semibold">
//             {" "}
//             {link}
//           </Text>
//         </Link>
//       </>
//     ) : (
//       <>
//         <Link
//           to={link}
//           smooth={true}
//           duration={500}
//           offset={-90}
//           key={link}
//           px={2}
//           rounded={"md"}
//           _hover={{
//             textDecoration: "none",
//           }}>
//           <Text
//             cursor={"pointer"}
//             _hover={{
//               color: "red",
//             }}
//             fontSize="18px"
//             fontWeight="semibold">
//             {" "}
//             {link}
//           </Text>
//         </Link>
//       </>
//     )}
//   </>  
// ))}