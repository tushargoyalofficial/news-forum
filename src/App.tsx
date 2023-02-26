import React from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Center bg="tomato" height="100vh" color="white">
        <Text fontSize="xx-large">Hello World!</Text>
      </Center>
    </ChakraProvider>
  );
};

export default React.memo(App);
