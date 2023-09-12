import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Button from "../atoms/Button.component";
const ChakraModal = ({
  children,
  title,
  onClose,
  isOpen,
  scrollBehavior = "inside",
  isCentered,
  closeOnOverlayClick = true,
  confirmBtnText,
  cancleBtnText,
  size,
}) => {
  return (
    <Modal
      onClose={onClose}
      //finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior={scrollBehavior}
      isCentered={isCentered}
      size={size ? size : "md"}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter className="gap-5">
          <Button onClick={onClose}>{confirmBtnText}</Button>
          <Button onClick={onClose}>{cancleBtnText}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChakraModal;
