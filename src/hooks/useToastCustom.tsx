import { useToast } from "@chakra-ui/react";

type ToastTypes = "success" | "error" | "warning" | "info";

const useToastCustom = () => {
  const Toast = useToast();

  const callToast = (status: ToastTypes, title: string, description?: string) =>
    Toast({
      title,
      description: description,
      status: status,
      isClosable: true,
      duration: 3000,
      position: "top-right",
      variant: "subtle",
      id: crypto.randomUUID(),
    });

  return { callToast };
};

export default useToastCustom;
