import { type Params, useParams, useSearchParams } from "react-router-dom";
import { Divider, HStack, Icon, Stack } from "@chakra-ui/react";
import { BsFillTagFill } from "react-icons/bs";

import NotesGrid from "../components/NotesGrid";
import PageHeading from "../components/PageHeading";

const TagBasedNotes = () => {
  const URLSearchParams = useSearchParams()[0];

  const Title = URLSearchParams.get("tagName");
  const { tagId }: Params = useParams();
  console.log("tagId", tagId);

  return (
    <Stack divider={<Divider />} spacing={3}>
      <PageHeading>
        <HStack alignItems="center">
          <Icon as={BsFillTagFill} /> <span>{Title}</span>
        </HStack>
      </PageHeading>
      <NotesGrid />
    </Stack>
  );
};

export default TagBasedNotes;
