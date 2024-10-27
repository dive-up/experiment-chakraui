/*
Flex is Box with display set to flex and comes with helpful style shorthand. It renders a 'div' element.

Spacer: Creates and adjustable, empty space that can be used to tune the spacing between child elements within flex.
*/

import { Box, Flex, Spacer, Square, Text, Center } from "@chakra-ui/react";

const FlexExample = () => {
  return (
    <Flex color="white" mb="8">
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex="1"
        bg="tomato"
      >
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
};

export const FlexWithSpacerExample = () => {
  return (
    <Flex>
      <Box p="4" bg="red.400">
        Box 1
      </Box>
      <Spacer />
      <Box p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  );
};

/*
The Flex and Spacer components, Grid and HStack treat children of different widths differently.

In HStack, the children will have equal spacing between them but they won't span the entire width of the container.

In Grid, the starting points of the children will be equally spaced but the gaps between them will not be equal. 

With Flex and Spacer, the children will span the entire width of the container and also have equal spacing between them.
*/

export default FlexExample;
