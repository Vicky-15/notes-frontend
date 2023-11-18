import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

import { IoCloseOutline, IoOptionsOutline } from "react-icons/io5";
import { RxMagnifyingGlass } from "react-icons/rx";

interface Props {
  showFilter: () => void;
  filterShowState: boolean;
  searchQuery: string;
  onQueryChange: (value: string) => void;
}

const SearchField = ({
  showFilter,
  filterShowState,
  searchQuery,
  onQueryChange,
}: Props) => {
  const bgColor = useColorModeValue("#e2e8f0", "#474a53");

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={RxMagnifyingGlass} boxSize="30px" />
      </InputLeftElement>

      <Input
        value={searchQuery}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search Notes"
      />

      <InputRightElement width="85px">
        <HStack
          borderRadius={4}
          bg={bgColor}
          padding={1}
          spacing={3}
          justifyContent="space-between"
        >
          <Icon
            cursor="pointer"
            onClick={() => !filterShowState && showFilter()}
            as={IoOptionsOutline}
            boxSize="25px"
          />
          <Icon
            cursor="pointer"
            onClick={() => {
              filterShowState && showFilter();
              onQueryChange("");
            }}
            as={IoCloseOutline}
            boxSize="25px"
          />
        </HStack>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchField;
