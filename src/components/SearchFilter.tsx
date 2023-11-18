import { Box, Fade, useColorModeValue } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
}

const SearchFilter = ({ isOpen }: Props) => {
  const bgColor = useColorModeValue("white", "gray.800");
  return (
    <Fade in={isOpen}>
      <Box
        bg={bgColor}
        pos="absolute"
        top="100%"
        left="0"
        width="100%"
        p="15px"
        borderRadius="5px"
        boxShadow="md"
        zIndex={100}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
        tempora temporibus delectus ea expedita ipsum accusantium eveniet
        assumenda illo quaerat magnam atque est, alias veritatis, velit enim,
        aut suscipit.
      </Box>
    </Fade>
  );
};

export default SearchFilter;
