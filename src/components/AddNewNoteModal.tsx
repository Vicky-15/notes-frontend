import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
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
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import getNextAnimationName from "../utilities/modalMotionPreset";
import NoteTags, { type NoteTag } from "./NoteTags";

const schema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be at least 2 characters" }),
  content: z
    .string()
    .min(2, { message: "Content should be at least 2 characters" }),
});

type Note = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// interface SubmitNoteData extends Note {
//   tags: NoteTag[];
// }

const AddNewNoteModal = ({ isOpen, onClose }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<Note>({ resolver: zodResolver(schema) });

  const [tags, setTag] = useState<NoteTag[]>([
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "green" },
  ]);

  useEffect(() => {
    return () => {
      if (!isOpen) {
        reset();
        setTag([
          { id: 1, name: "apple" },
          { id: 2, name: "orange" },
          { id: 3, name: "green" },
        ]);
      }
    };
  }, [isOpen, reset]);

  const handleTagDelete = (id: number) => {
    setTag(tags.filter((tag) => tag.id !== id));
  };

  const handleTagAdd = (name: string) => {
    setTag([...tags, { id: tags.length + 15, name }]);
  };

  const onSubmit = (values: Note) => {
    console.log({ ...values, tags });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader paddingBottom={2}>
            <FormControl isInvalid={Boolean(errors.title)} colorScheme="green">
              <Input
                {...register("title")}
                focusBorderColor={theme.colors.green[500]}
                fontSize="xl"
                fontWeight="500"
                placeholder="Title"
                paddingY={6}
              />
              <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
          </ModalHeader>
          <ModalBody>
            <FormControl isInvalid={Boolean(errors.content)}>
              <Textarea
                {...register("content")}
                focusBorderColor={theme.colors.green[500]}
                fontSize="lg"
                fontWeight="400"
                height="250px"
                placeholder="Take a note..."
              />
              <FormErrorMessage>{errors?.content?.message}</FormErrorMessage>
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

            <Button type="submit" isDisabled={!isValid} colorScheme="red">
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddNewNoteModal;
