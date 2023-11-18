import {
  Box,
  FormControl,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  StackDivider,
  Tag,
  TagLabel,
  Text,
  theme,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
  onTagAdd: (name: string) => void;
}

const AddNoteTag = ({ onTagAdd }: Props) => {
  const tagFieldRef = useRef<HTMLInputElement>(null);

  const tags: { id: number; name: string }[] = [
    { id: 11, name: "roja" },
    { id: 12, name: "jasmine" },
    { id: 33, name: "lilly" },
  ];

  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <IconButton
              aria-label="Add Tag"
              size="sm"
              icon={<IoAddCircleOutline />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <Stack divider={<StackDivider borderColor="gray.200" />}>
                <FormControl>
                  <InputGroup>
                    <Input
                      ref={tagFieldRef}
                      focusBorderColor={theme.colors.green[500]}
                      type="text"
                      placeholder="Add new tag & press enter"
                      size="sm"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          if (tagFieldRef.current) {
                            const tagFieldValue = tagFieldRef.current
                              .value as string;
                            if (tagFieldValue.length) {
                              onTagAdd(tagFieldValue);
                              tagFieldRef.current.value = "";
                              onClose();
                            }
                          }
                        }
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <Box>
                  <Text paddingBottom="5px" fontSize="12px">
                    Choose from Existing tags
                  </Text>
                  <HStack>
                    {tags.map((tag) => (
                      <Tag
                        size="sm"
                        key={tag.id}
                        borderRadius="full"
                        variant="solid"
                        colorScheme="green"
                        cursor="pointer"
                        onClick={() => {
                          onTagAdd(tag.name);
                          onClose();
                        }}
                      >
                        <TagLabel>{tag.name}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </Box>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default AddNoteTag;
