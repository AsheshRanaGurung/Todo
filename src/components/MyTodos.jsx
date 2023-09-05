import { Box, Text } from "@chakra-ui/react";
import React from "react";

const MyTodos = (props) => {
  const myArr = props.todos ?? [];
  return myArr.map((obj) => {
    return (
      <Box>
        <Text>{obj.text}</Text>
      </Box>
    );
  });
};

export default MyTodos;
