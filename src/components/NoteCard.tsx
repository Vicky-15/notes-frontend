import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Badge,
  Text,
} from "@chakra-ui/react";

import { IoEllipsisVerticalOutline } from "react-icons/io5";
import stopPropagation from "../utilities/stopPropagation";
import NoteTags, { type NoteTag } from "./NoteTags";

interface Props {
  onOpenModal: () => void;
}

const NoteCard = ({ onOpenModal }: Props) => {
  const tags: NoteTag[] = [
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "green" },
  ];

  const handleEdit = (data: string) => {
    console.log(data);
  };
  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <Card cursor="pointer" onClick={onOpenModal}>
      <CardHeader>
        <HStack justifyContent="space-between">
          <Heading size="md">Stuck in Situation:</Heading>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Manage Menu"
              icon={<IoEllipsisVerticalOutline />}
              variant="outline"
              colorScheme="green"
              onClick={(event) => event.stopPropagation()}
            />

            <MenuList>
              <MenuItem onClick={stopPropagation(handleEdit)}>Edit</MenuItem>
              <MenuItem onClick={stopPropagation(handleDelete)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </CardHeader>
      <CardBody maxHeight={"100px"} overflow="hidden" paddingY={0}>
        <Text>
          What are your options? What are your goals? What are your fears? What
          are your options? What are your goals? What are your fears?
        </Text>
      </CardBody>
      <CardFooter>
        <Stack spacing={4}>
          <NoteTags tags={tags} />
          <Badge width="fit-content" variant="subtle" colorScheme="primary">
            Entertainment
          </Badge>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
