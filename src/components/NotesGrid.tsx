import { Button, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import ViewNoteModal from "./ViewNoteModal";
import AddNewNoteModal from "./AddNewNoteModal";

const NotesGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isCreateModalOpen,
    onOpen: createModalonOpen,
    onClose: createModalonClose,
  } = useDisclosure();

  return (
    <Stack padding="10px" spacing={5}>
      <Button
        onClick={createModalonOpen}
        colorScheme="gray"
        size="lg"
        width={"fit-content"}
      >
        Create Note
      </Button>
      <AddNewNoteModal
        isOpen={isCreateModalOpen}
        onClose={createModalonClose}
      />
      <ViewNoteModal isOpen={isOpen} onClose={onClose} />
      <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
      </SimpleGrid>
    </Stack>
  );
};

export default NotesGrid;
