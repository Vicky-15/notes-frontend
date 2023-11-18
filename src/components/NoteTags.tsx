import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import AddNoteTag from "./AddNoteTag";

export interface NoteTag {
  id: number;
  name: string;
}

interface Props {
  tags: NoteTag[];
  onTagDelete?: (id: number) => void;
  onTagAdd?: (name: string) => void;
}

const NoteTags = ({ onTagDelete, tags, onTagAdd }: Props) => {
  return (
    <HStack spacing={2} flexWrap="wrap">
      {tags.map((tag) => (
        <Tag
          size="sm"
          key={tag.id}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
        >
          <TagLabel>{tag.name}</TagLabel>
          {onTagDelete && (
            <TagCloseButton
              boxSize="15px"
              onClick={(event) => {
                event.stopPropagation();
                onTagDelete(tag.id);
              }}
            />
          )}
        </Tag>
      ))}
      {onTagAdd && <AddNoteTag onTagAdd={onTagAdd} />}
    </HStack>
  );
};

export default NoteTags;
