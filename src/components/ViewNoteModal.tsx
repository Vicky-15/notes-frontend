import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  theme,
  Box,
} from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";

import { useState } from "react";
import getNextAnimationName from "../utilities/modalMotionPreset";
import NoteTags, { type NoteTag } from "./NoteTags";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ViewNoteModal = ({ isOpen, onClose }: Props) => {
  const [tags, setTag] = useState<NoteTag[]>([
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "green" },
  ]);

  const handleTagDelete = (id: number) => {
    setTag(tags.filter((tag) => tag.id !== id));
  };

  const handleTagAdd = (name: string) => {
    setTag([...tags, { id: tags.length + 1, name }]);
  };

  const [editState, setEditState] = useState(false);
  const handleSaveNote = () => {
    console.log("saved");
  };

  return (
    <Modal
      motionPreset={getNextAnimationName()}
      scrollBehavior="inside"
      isCentered
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader paddingBottom={2}>
          <HStack spacing={4}>
            <FormControl colorScheme="green">
              <Input
                disabled={!editState}
                focusBorderColor={theme.colors.green[500]}
                fontSize="xl"
                fontWeight="500"
                placeholder="Title"
                required
                paddingY={6}
                sx={{
                  _disabled: {
                    borderColor: "transparent",
                  },
                }}
              />
            </FormControl>
            {editState ? (
              <Icon
                onClick={() => {
                  setEditState(false);
                  handleSaveNote();
                }}
                cursor="pointer"
                as={TfiSave}
                boxSize="30px"
                color={theme.colors.green[500]}
              />
            ) : (
              <Icon
                onClick={() => setEditState(!editState)}
                cursor="pointer"
                as={MdModeEdit}
                boxSize="30px"
                color={theme.colors.gray[500]}
              />
            )}
          </HStack>
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <Textarea
              disabled={!editState}
              focusBorderColor={theme.colors.green[500]}
              fontSize="lg"
              fontWeight="400"
              height="250px"
              placeholder="Take a note..."
              required
              sx={{
                _disabled: {
                  borderColor: "transparent",
                  resize: "none",
                },
              }}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter as={HStack} justifyContent="space-between">
          <Box>
            <Text paddingBottom="5px" fontSize="12px">
              Tags
            </Text>
            <NoteTags
              tags={tags}
              onTagDelete={handleTagDelete}
              onTagAdd={handleTagAdd}
            />
          </Box>

          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewNoteModal;
