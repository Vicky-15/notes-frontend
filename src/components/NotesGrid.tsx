import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import ViewNoteModal from "./ViewNoteModal";

const NotesGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ViewNoteModal isOpen={isOpen} onClose={onClose} />
      <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
        <NoteCard onOpenModal={onOpen} />
      </SimpleGrid>
    </>
  );
};

export default NotesGrid;
