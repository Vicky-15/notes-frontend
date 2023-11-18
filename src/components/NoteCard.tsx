import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";

import { IoEllipsisVerticalOutline } from "react-icons/io5";

const NoteCard = () => {
  return (
    <Card>
      <CardHeader>
        <HStack justifyContent="space-between">
          <Heading size="md">Stuck in Situation:</Heading>
          <Menu isLazy>
            <MenuButton cursor="pointer" as={Box} aria-label="Open menu">
              <Icon as={IoEllipsisVerticalOutline} fontSize="25px" />
            </MenuButton>

            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </CardHeader>
      <CardBody
        cursor="pointer"
        onClick={() => {
          alert("hello");
        }}
        paddingY={0}
      >
        <Text>
          What are your options? What are your goals? What are your fears?
          options: don't do anything seriously and keep going, do not deserve
          the universe help no action needed just be alive
        </Text>
      </CardBody>
      <CardFooter>
        <Stack spacing={4}>
          <HStack spacing={4} flexWrap="wrap">
            {["sm", "sm"].map((size, index) => (
              <Tag
                size={size}
                key={index + "2"}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>tag</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </HStack>
          <Badge width="fit-content" variant="subtle" colorScheme="green">
            Entertainment
          </Badge>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
