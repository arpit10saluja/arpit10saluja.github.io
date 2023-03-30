import { useState } from "react";
import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { MdContacts } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

import Typewriter from "typewriter-effect";
import Resume from "../../resume/Arpit-Kumar-Resume.pdf";

// const Links = ["About", "Skills", "Projects", "Contact", "Resume"];
const Links = [
  { name: "About", icon: FiHome },
  { name: "Skills", icon: FiTrendingUp },
  { name: "Projects", icon: GoProject },
  { name: "Contact", icon: MdContacts },
  { name: "Resume", icon: HiOutlineDownload },
];

function SideDrawerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open navigation"
        onClick={onOpen}
        size="md"
        display={{ md: "none" }}
        ml="20px"
      />

      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <Flex justifyContent="space-between">
            <DrawerHeader minW="50%">
              {" "}
              <Typewriter
                options={{
                  strings: ["Namaste"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </DrawerHeader>
            <DrawerHeader>
              <CloseButton
                display={{ base: "flex" }}
                size="lg"
                onClick={onClose}
              />
            </DrawerHeader>
          </Flex>
          <DrawerBody>
            <Box pb={4}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <>
                    {link.name === "Resume" ? (
                      <Link
                        style={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                        onClick={() => {
                          console.log("resume btn clicked");
                          window.open(
                            "https://drive.google.com/file/d/1lFycavzJaYExlcNPBhWmXXuKScE6WGY3/view?usp=sharing",
                            "blank"
                          );
                        }}
                        href={Resume}
                        download="Arpit-Kumar-Resume">
                        <Flex
                          align="center"
                          p="4"
                          mx="4"
                          borderRadius="lg"
                          role="group"
                          cursor="pointer"
                          _hover={{
                            bg: "cyan.400",
                            color: "white",
                          }}>
                          {
                            <Icon
                              mr="4"
                              fontSize="16"
                              _groupHover={{
                                color: "white",
                              }}
                              as={link.icon}
                            />
                          }
                          {link.name}
                        </Flex>
                      </Link>
                    ) : (
                      <NavItem
                        key={link.name}
                        icon={link.icon}
                        onClose={onClose}>
                        {link.name}
                      </NavItem>
                    )}
                  </>
                ))}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavItem = ({ icon, children, onClose, ...rest }) => {
  return (
    <Link
      to={children}
      smooth={true}
      duration={1000}
      offset={-80}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClose}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SideDrawerNavbar;
