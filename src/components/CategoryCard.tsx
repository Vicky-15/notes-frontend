import { Badge, HStack, Heading, Icon, Stack, theme } from "@chakra-ui/react";
import { SlNotebook } from "react-icons/sl";
import { Category } from "../entities";

interface Props extends Category {
  setSelectedCategory: (id: string) => void;
  isActive: (id: string) => boolean;
}

const CategoryCard = ({
  id,
  name,
  notesCount,
  setSelectedCategory,
  isActive,
}: Props) => {
  return (
    <Stack
      _hover={{
        borderColor: theme.colors.green[200],
      }}
      padding={"10px"}
      borderRadius={5}
      border={`2px solid ${
        isActive(id + "") ? theme.colors.green[400] : "transparent"
      }`}
      onClick={() => setSelectedCategory(id + "")}
      cursor="pointer"
    >
      <Heading
        fontSize={{
          base: "lg",
          lg: "xl",
        }}
        textTransform="capitalize"
      >
        {name}
      </Heading>
      <HStack alignItems={"center"} width="fit-content">
        <Icon fontSize="20px" as={SlNotebook} />{" "}
        <Badge borderRadius={5} fontSize="15px" colorScheme="green">
          {notesCount}
        </Badge>
      </HStack>
    </Stack>
  );
};

export default CategoryCard;
