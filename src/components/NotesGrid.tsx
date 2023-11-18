import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

const NotesGrid = () => {
  return (
    <Stack padding="10px" spacing={5}>
      <Button colorScheme="gray" size="lg" width={"fit-content"}>
        Create Note
      </Button>

      <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </SimpleGrid>
    </Stack>
  );
};

export default NotesGrid;
