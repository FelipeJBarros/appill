import React from "react";
import { Button, FormControl, Input, Modal, Text, VStack } from "native-base";

interface ModalCompProps{
    modalVisible: boolean;
    closeModal: () => void;
}
export default function ModalComp({modalVisible, closeModal} : ModalCompProps) {

    return (
        <Modal isOpen={modalVisible} onClose={closeModal} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Forgot Password?</Modal.Header>
            <Modal.Body>
              Enter email address and we'll send a link to reset your password.
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button flex="1" onPress={closeModal}>
                Proceed
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      )
  }