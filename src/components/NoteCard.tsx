import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  theme,
  useDisclosure,
} from "@chakra-ui/react";

import { BiCategory } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

import stopPropagation from "../utilities/stopPropagation";
import AlertDialogModal from "./AlertDialogModal";
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

  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleDelete = (id: number) => {
    console.log(id);
    onOpen();
  };

  return (
    <>
      <AlertDialogModal
        {...{
          isOpen,
          onClose,
          headerText: "Delete Note",
          submitBtnText: "Delete",
        }}
      />
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
            What are your options? What are your goals? What are your fears?
            What are your options? What are your goals? What are your fears?
          </Text>
        </CardBody>
        <CardFooter>
          <Stack spacing={4}>
            <NoteTags tags={tags} />
            <HStack fontSize="sm" alignItems={"center"} width="fit-content">
              <Icon as={BiCategory} />{" "}
              <Text fontWeight="bold">Entertainment</Text>
            </HStack>
          </Stack>
        </CardFooter>
      </Card>
    </>
  );
};

export default NoteCard;
