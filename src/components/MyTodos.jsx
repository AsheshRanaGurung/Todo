import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MyTodos = ({ todos, deleteFunc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const myArr = todos ?? [];
  return myArr.map((obj) => {
    return (
      <>
        <AnimatePresence key={obj.id}>
          <Flex justifyContent={"space-between"}>
            <Box
              as={motion.div}
              layoutId={obj.id}
              initial={{ scale: 0 }}
              exit={{ scale: 0 }}
              animate={{ scale: 0.9 }}
            >
              <Text>{obj.text}</Text>
            </Box>

            <AiOutlineDelete
              onClick={() => {
                deleteFunc(obj.id);
              }}
            />
          </Flex>
          <Divider />
        </AnimatePresence>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>ashesh</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  });
};

export default MyTodos;
