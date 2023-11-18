import { HStack, Icon, Text, theme, useColorModeValue } from "@chakra-ui/react";

import { IconType } from "react-icons";

export interface Props {
  text: string;
  icon: IconType;
  isActive: boolean;
  setActiveSideBar: (text: string) => void;
}

const SideBarItem = ({ text, icon, setActiveSideBar, isActive }: Props) => {
  const bgColor = useColorModeValue("#white", "#474a53");
  return (
    <HStack
      borderRadius={4}
      bg={isActive ? theme.colors.green[300] : bgColor}
      cursor="pointer"
      spacing={4}
      padding={2}
      onClick={() => setActiveSideBar(text)}
    >
      <Icon as={icon} fontSize="xl" /> <Text fontSize="lg">{text}</Text>
    </HStack>
  );
};

export default SideBarItem;
