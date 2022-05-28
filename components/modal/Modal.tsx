import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
  headerText: string;
  footerText: string;
};

export const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, children, headerText, footerText }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headerText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme='darkBlue' mr={3} onClick={onClose}>
              {footerText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
