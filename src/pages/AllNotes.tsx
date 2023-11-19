import { Divider, Stack } from "@chakra-ui/react";
import NotesGrid from "../components/NotesGrid";
import PageHeading from "../components/PageHeading";

const AllNotes = () => {
  return (
    <>
      <Stack divider={<Divider />} spacing={3}>
        <PageHeading>All Notes</PageHeading>
        <NotesGrid />
      </Stack>
    </>
  );
};

export default AllNotes;
