import { Stack, useDisclosure } from "@chakra-ui/react";
import SearchField from "./SearchField";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

const Search = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [searchQuery, setQuery] = useState("");

  console.log(searchQuery);

  return (
    <Stack
      gap={0}
      height={"fit-content"}
      pos="relative"
      flex="1"
      maxWidth="600px"
    >
      <SearchField
        searchQuery={searchQuery}
        onQueryChange={(value) => setQuery(value)}
        filterShowState={isOpen}
        showFilter={onToggle}
      />
      <SearchFilter isOpen={isOpen} />
    </Stack>
  );
};

export default Search;
