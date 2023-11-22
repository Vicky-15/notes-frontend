import { HStack, Heading, Icon, Image, Tooltip } from "@chakra-ui/react";
import logo from "../assets/vite.svg";

import { CiLogout } from "react-icons/ci";
import ColorModeSwitch from "./ColorModeSwitch";
import HamBurgerButton from "./HamBurgerButton";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      spacing={5}
      alignItems="center"
      justifyContent="space-between"
      paddingX={"10px"}
      my={10}
      mt={6}
    >
      <HStack spacing={5}>
        <HamBurgerButton />
        <Image boxSize="30px" src={logo} />
      </HStack>

      <Search />

      <HStack spacing={5}>
        <HStack>
          <Heading fontSize="lg">Sokka Aang</Heading>
          <Tooltip label="Logout" fontSize="sm">
            <span>
              <Icon
                cursor="pointer"
                as={CiLogout}
                fontSize="25px"
                color={"red"}
              />
            </span>
          </Tooltip>
        </HStack>
        <ColorModeSwitch />
        <span>
          <b>Just to see login/register page</b>
        </span>
        <Tooltip label="Login" fontSize="sm">
          <Link to="/login" style={{ cursor: "pointer" }}>
            Login
          </Link>
        </Tooltip>
        <Tooltip label="Register" fontSize="sm">
          <Link to="/register" style={{ cursor: "pointer" }}>
            Register
          </Link>
        </Tooltip>
      </HStack>
    </HStack>
  );
};

export default NavBar;
