import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack alignItems="center">
      <Icon
        cursor="pointer"
        as={colorMode === "dark" ? MdDarkMode : CiLight}
        fontSize="20px"
      />
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="green"
      />
    </HStack>
  );
};

export default ColorModeSwitch;
