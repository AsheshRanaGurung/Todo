import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const MyTodos = (props) => {
  const myArr = props.todos ?? [];
  return myArr.map((obj) => {
    return (
      <AnimatePresence key={obj.id}>
        <Box
          as={motion.div}
          layoutId={obj.id}
          initial={{ scale: 0 }}
          exit={{ scale: 0 }}
          animate={{ scale: 0.9 }}
        >
          <Text>{obj.text}</Text>
        </Box>
      </AnimatePresence>
    );
  });
};

export default MyTodos;
