import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  theme,
} from "@chakra-ui/react";

import { MdOutlineDelete } from "react-icons/md";

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

  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <Card cursor="pointer" onClick={onOpenModal}>
      <CardHeader>
        <HStack justifyContent="space-between">
          <Heading size="md">Stuck in Situation:</Heading>
          <Icon
            as={MdOutlineDelete}
            fontSize="30px"
            color={theme.colors.red[300]}
            _hover={{
              color: theme.colors.red[400],
            }}
            onClick={(event) => {
              stopPropagation(event);
              handleDelete(23);
            }}
          />
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
