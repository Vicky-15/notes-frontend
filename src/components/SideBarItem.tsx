import { HStack, Icon, Text, theme, useColorModeValue } from "@chakra-ui/react";

import { type SideBarItemType } from "../entities";
import { Link } from "react-router-dom";

const SideBarItem = ({ name, icon, isActive, gotoLink }: SideBarItemType) => {
  const bgColor = useColorModeValue("#white", "#474a53");

  return (
    <HStack
      as={Link}
      to={gotoLink}
      borderRadius={4}
      bg={isActive ? theme.colors.green[300] : bgColor}
      cursor="pointer"
      spacing={4}
      padding={2}
    >
      <Icon as={icon} fontSize="xl" /> <Text fontSize="lg">{name}</Text>
    </HStack>
  );
};

export default SideBarItem;
