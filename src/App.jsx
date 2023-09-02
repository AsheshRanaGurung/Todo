import { Flex, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "./useLocalStorage";
import { AnimatePresence, motion } from "framer-motion";
import "@fontsource/yellowtail";

function App() {
  // const [listValue, setListValue] = useLocalStorage("list", []); //Array of todos obj {id:id, text:todo}

  // const toast = useToast();
  // const handleToast = (text, status) =>
  //   toast({
  //     title: text,
  //     status: status,
  //     isClosable: true,
  //   }); //toast messages

  // const addToList = (item) => {
  //   setListValue((listValue) =>
  //     listValue.concat({ text: item, id: String(Date.now()) })
  //   );
  //   return true;
  // };

  // const deleteFromList = (index) => {
  //   setListValue((listValue) =>
  //     listValue.filter((value) => value.text !== index)
  //   );
  // };
  // const handleEdit = (edited) => {
  //   setListValue((listValue) =>
  //     listValue.map((elem) => (elem.id === edited.id ? edited : elem))
  //   );
  //   handleToast("Item edited successfully", "success");
  //   return true;
  // };

  return <p>Hello</p>;
}
export default App;
