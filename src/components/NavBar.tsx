import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/vite.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import HamBurgerButton from "./HamBurgerButton";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack
      spacing={5}
      alignItems="center"
      justifyContent="space-between"
      padding={"10px"}
    >
      <HStack spacing={5}>
        <HamBurgerButton />
        <Image boxSize="30px" src={logo} />
      </HStack>

      <Search />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
