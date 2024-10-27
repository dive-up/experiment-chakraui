/*
Stack is a layout component used to group elements together and apply a space between them.

Stack: used to stack elements in the vertical or horizontal direction use the direction prop.
HStack: Horizontal Stack
VStack: Vertical Stack
*/

import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Center,
} from "@chakra-ui/react";

export const ContentStack = () => {
  return (
    <Stack direction="column" spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="yellow.200">
        2
      </Box>
      <Box w="40px" h="40px" bg="yellow.200">
        3
      </Box>
    </Stack>
  );
};

export const ContentHStack = () => {
  return (
    <HStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="yellow.200">
        2
      </Box>
      <Box w="40px" h="40px" bg="yellow.200">
        3
      </Box>
    </HStack>
  );
};

export const ContentVStack = () => {
  return (
    <Center>
      <VStack
        w="100px"
        divider={<StackDivider borderColor="gray.200" />}
        spacing="24px"
      >
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="yellow.200">
          2
        </Box>
        <Box w="40px" h="40px" bg="yellow.200">
          3
        </Box>
      </VStack>
    </Center>
  );
};
