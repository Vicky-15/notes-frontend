import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

const PageHeading = ({ children }: Props) => {
  return (
    <Heading as={"h2"} fontSize={{ base: "lg", lg: "2xl" }}>
      {children}
    </Heading>
  );
};

export default PageHeading;
