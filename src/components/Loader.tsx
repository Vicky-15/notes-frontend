import { HStack, Spinner, theme } from "@chakra-ui/react";

const Loader = () => {
  const spinners: string[] = ["xs", "sm", "md", "lg", "xl"];

  return (
    <HStack height="100vh" alignItems="center" justifyContent="center">
      <HStack>
        {spinners.map((spinner, index) => (
          <Spinner
            key={spinner}
            size={spinner}
            thickness={`${index + 1}px`}
            speed="0.65s"
            emptyColor={theme.colors.green[100]}
            color={theme.colors.green[400]}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export default Loader;
