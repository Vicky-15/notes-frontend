import {
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialog,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  headerText: string;
  bodyText?: string;
  submitBtnText: string;
}
const AlertDialogModal = ({
  isOpen,
  onClose,
  headerText,
  bodyText,
  submitBtnText,
}: Props) => {
  const cancelRef = React.useRef(null);

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {headerText}
            </AlertDialogHeader>

            <AlertDialogBody>
              {bodyText ??
                "Are you sure? You can't undo this action afterwards."}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                {submitBtnText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDialogModal;
