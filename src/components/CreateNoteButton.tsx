import { Button, Icon, useDisclosure } from "@chakra-ui/react";
import { MdNoteAdd } from "react-icons/md";

import AddNewNoteModal from "./AddNewNoteModal";

const CreateNoteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant={"outline"}
        marginX="auto"
        onClick={onOpen}
        colorScheme="green"
        size="lg"
        width={"fit-content"}
      >
        <Icon mr={2} as={MdNoteAdd} fontSize="30px" /> Create Note
      </Button>
      <AddNewNoteModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CreateNoteButton;
